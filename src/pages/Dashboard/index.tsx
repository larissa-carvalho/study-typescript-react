import React from 'react'

// components
import ContentHeader from '../../components/ContentHeader'

// styles
import { Container, Content } from './styles'

// components
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'
import PieChartBox from '../../components/PieChartBox'
import HistoryBox from '../../components/HistoryBox'
import BarChartBox from '../../components/BarChartBox'

//data
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

//utils
import listMonths from '../../utils/listMonths'


const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = React.useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = React.useState<number>(new Date().getFullYear())

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

        [...gains, ...expenses].forEach(item => {
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
    }, [])

    const totalExpenses = React.useMemo(() => {
        let total: number = 0;

        expenses.forEach((item) => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount number')
                }
            }
        })

        return total
    }, [monthSelected, yearSelected])

    const totalGains = React.useMemo(() => {
        let total: number = 0;

        gains.forEach((item) => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount number')
                }
            }
        })

        return total
    }, [monthSelected, yearSelected])

    const totalBalance = React.useMemo(() => {
        return totalGains - totalExpenses
    }, [totalGains, totalExpenses])

    const relationExpensesVersusGains = React.useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: isNaN(Number(percentGains.toFixed(1))) ? 0 : Number(percentGains.toFixed(1)),
                color: '#E44C4E'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: isNaN(Number(percentExpenses.toFixed(1))) ? 0 : Number(percentExpenses.toFixed(1)),
                color: '#f7931b'
            }
        ]

        return data
    }, [totalExpenses, totalGains])

    const historyData = React.useMemo(() => {
        return listMonths.map((_, month) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date)
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount)
                    } catch { 
                        throw new Error('amountEntry is invalid. amountEntry must be a valid number')
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date)
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount)
                    } catch { 
                        throw new Error('amountOutput is invalid. amountOutput must be a valid number')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listMonths[month].substring(0, 3),
                amountEntry,
                amountOutput
            }

        }).filter((item) => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })
    }, [yearSelected])

    const relationExpensesRecurrentVersusEventual = React.useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date)    
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            

            return month === monthSelected && year === yearSelected
        }).forEach((expense) => {
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount)
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount)
            }
        });

        const total = amountRecurrent + amountEventual
        const percentRecurrent =  isNaN(Number(((amountRecurrent / total) * 100).toFixed(1))) ? 0 : Number(((amountRecurrent / total) * 100).toFixed(1))
        const percentEventual =  isNaN(Number(((amountEventual / total) * 100).toFixed(1))) ?  0 : Number(((amountEventual / total) * 100).toFixed(1))

        return [
            {
                name: "Recorrentes",
                amount: amountRecurrent,
                percent: percentRecurrent,
                color: '#f7931b'
            },
            {
                name: "Eventuais",
                amount: amountEventual,
                percent: percentEventual,
                color: '#e44c4e'
            }
        ]
    }, [monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = React.useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date)    
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            

            return month === monthSelected && year === yearSelected
        }).forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount)
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount)
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent =  isNaN(Number(((amountRecurrent / total) * 100).toFixed(1))) ? 0 : Number(((amountRecurrent / total) * 100).toFixed(1))
        const percentEventual =  isNaN(Number(((amountEventual / total) * 100).toFixed(1))) ?  0 : Number(((amountEventual / total) * 100).toFixed(1))

        return [
            {
                name: "Recorrentes",
                amount: amountRecurrent,
                percent: percentRecurrent,
                color: '#f7931b'
            },
            {
                name: "Eventuais",
                amount: amountEventual,
                percent: percentEventual,
                color: '#e44c4e'
            }
        ]
    }, [monthSelected, yearSelected])

    const message = React.useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria",
                footerText: "Continue assim e falirá",
                icon: sadImg,
            }
        } else if (totalBalance === 0){
            return {
                title: "Uffa!",
                description: "Neste mês, você gastou exatamente o que ganhou",
                footerText: "Tentaa gastar menos",
                icon: happyImg,
            }
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva',
                footerText: 'Continue assim. Considere investir seu saldo.',
                icon: happyImg
            }
        }
    }, [totalBalance])

    return(
        <Container>
            <ContentHeader lineColor='#F7931B' title="Dashboard" >
                <SelectInput options={months} onChange={(e) => setMonthSelected(Number(e.target.value))} defaultValue={String(monthSelected)}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(Number(e.target.value))} defaultValue={String(yearSelected)}/>
            </ContentHeader>

            <Content>
                <WalletBox 
                    title="Saldo"
                    amount={totalBalance}
                    footerLabel='Atualizado com base nas entradas e saídas'
                    icon="dollar"
                    color="#4E41F0"
                />

                <WalletBox 
                    title="Entradas"
                    amount={totalGains}
                    footerLabel='Atualizado com base nas entradas'
                    icon="arrowUp"
                    color="#F7931b"
                />

                <WalletBox 
                    title="Saídas"
                    amount={totalExpenses}
                    footerLabel='Atualizado com base nas saídas'
                    icon="arrowDown"
                    color="#E44C4E"
                />     
                
                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                /> 
                
                <PieChartBox data={relationExpensesVersusGains} />
                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry='#f4931b'
                    lineColorAmountOutput='#e44c4e'
                />


                <BarChartBox 
                    title="Entradas" 
                    data={relationGainsRecurrentVersusEventual} 
                />

                <BarChartBox 
                    title="Saídas" 
                    data={relationExpensesRecurrentVersusEventual} 
                />
            </Content>
        </Container>
    )
}

export default Dashboard;