import React from 'react'
import { useParams } from 'react-router-dom'

// components
import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'

//style
import { Container, Filters, Content } from './styles'

//data
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

//utils
import formateDate from '../../utils/formateDate'
import formateCurrency from '../../utils/formatCurrency'
import listMonths from '../../utils/listMonths'

interface IData{
    id?: string
    description: string
    amount: string
    type: string
    frequency: string
    date: string
    tagColor: string
}


const List: React.FC = () => {
    const [data, setData] = React.useState<IData[]>([])
    const [monthSelected, setMonthSelected] = React.useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = React.useState<number>(new Date().getFullYear())
    const [frequencyFilterSelected, setFrequencyFilterSelected] = React.useState<String[]>(['recorrente', 'eventual']);

    const movimentType = useParams().type
    const pageData = React.useMemo(() => {
        return movimentType === 'balance-entry' ? { title: 'Entradas', lineColor:"#F7931B", data: gains} : { title: 'Saídas', lineColor:"#E44C4E", data: expenses}
    }, [movimentType])

    const months = React.useMemo(() => {
        return listMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, [])

    const years = React.useMemo(() => {
        let uniqueYears: number[] = [];

        const { data } = pageData

        data.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [ pageData ])

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency)

        if (alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency)
            setFrequencyFilterSelected(filtered)
        } else {
            setFrequencyFilterSelected((prev) => [...prev, frequency])
        }   
    }

    React.useEffect(() => {
        const { data } = pageData
        const filteredData = data.filter((item) => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
        })

        const formattedData = filteredData.map((item) => {
            return {
                id: String(new Date().getTime() + item.amount + item.type),
                description: item.description,
                amount: formateCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                date: formateDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })

        setData(formattedData)
    }, [pageData, monthSelected, yearSelected, frequencyFilterSelected])

    return(
            <Container>
                <ContentHeader lineColor={pageData?.lineColor} title={pageData?.title} >
                    <SelectInput options={months} onChange={(e) => setMonthSelected(Number(e.target.value))} defaultValue={String(monthSelected)}/>
                    <SelectInput options={years} onChange={(e) => setYearSelected(Number(e.target.value))} defaultValue={String(yearSelected)}/>
                </ContentHeader>

                <Filters>
                    <button
                        type="button"
                        className={`tag-filter tag-filter-recurrent ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                        onClick={() => handleFrequencyClick('recorrente')}
                    >
                        Recorrentes
                    </button>
                    <button
                        type="button"
                        className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                        onClick={() => handleFrequencyClick('eventual')}
                    >
                        Eventuais
                    </button>
                </Filters>

                <Content>
                    {
                        data.map((item) => {
                            return(
                                <HistoryFinanceCard 
                                    tagColor={item.tagColor}
                                    title={item.description}
                                    subtitle={item.date}
                                    amount={item.amount} 
                                />
                            )
                        })
                    }
                </Content>
            </Container>
    )   
}

export default List