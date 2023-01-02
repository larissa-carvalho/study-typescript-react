import React from 'react'

import dollarImg from '../../assets/dollar.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'
import formateCurrency from '../../utils/formatCurrency'

import { Container } from './styles'

interface IWalletBox{
    title: string
    amount: number
    footerLabel: string
    icon: 'dollar' | 'arrowUp' | 'arrowDown'
    color: string
}

const WalletBox: React.FC<IWalletBox> = ({
    color,
    title,
    amount,
    footerLabel,
    icon
}) => {
    const iconSelected = React.useMemo(() => {
        switch (icon) {
            case 'dollar':
                return dollarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
        }
    }, [icon])

    return(
        <Container color={color}>
            <span>{title}</span>
            <h1>{formateCurrency(amount)}</h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    )
}

export default WalletBox