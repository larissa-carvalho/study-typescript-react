import React from 'react'

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles'

interface IToogleProps{
    labelLeft: string
    labelRight: string
    checked: boolean
    onChange(): void
}

const Toggle: React.FC<IToogleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector 
            checked={checked}
            onChange={onChange}
            uncheckedIcon={false}
            checkedIcon={false}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
)

export default Toggle