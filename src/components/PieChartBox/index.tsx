import React from 'react'

import {
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight,
} from './styles'

import { ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'

interface IPieChartProps{
    data: {
        name: string,
        value: number,
        percent: number, 
        color: string
    }[]
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <h2>Relação</h2>
                {
                    data.map((indicator) =>  (
                        <Legend color={indicator.color} key={indicator.name}> 
                            <div>{indicator.percent}</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} labelLine={false} dataKey="percent">
                        {
                            data.map((indicator) => ( 
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)

export default PieChartBox