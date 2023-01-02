import React from 'react'

import {
    Container
} from './styles'

type  InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({...rest}) => {
    return(
        <Container {...rest}></Container>
    )
}

export default Input