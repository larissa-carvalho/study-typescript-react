import React from 'react'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
} from 'recharts'

import {
    Container,
    SideLeft,
    SideRight,
    Legend,
    LegendContainer
} from './styles'

interface IBarChartProps {
    title: string
    data: {
        name: string
        amount: number
        percent: number
        color: string
    }[]
}

const BarChartBox : React.FC<IBarChartProps> = ({
    title,
    data
}) => {
    console.log(`data`, data)

    return(
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>
                    {data.map((item) => (
                        <Legend color={item.color}>
                            <div>{item.percent}</div>
                            <span>{item.name}</span>
                        </Legend>
                    ))}
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell 
                                        key={indicator.name}
                                        fill={indicator.color}
                                        color={indicator.color}
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip cursor={{fill: 'none'}} />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}   

export default BarChartBox