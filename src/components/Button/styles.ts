import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-top: 5px;

    background: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    border-radius: 5px;
`