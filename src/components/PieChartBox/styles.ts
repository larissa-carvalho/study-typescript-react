import styled, { keyframes } from 'styled-components'

interface ILegendProps{
    color: string
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    } 
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin:  10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    display: flex;

    animation: ${animate} 1s;

    @media screen and (max-width: 959px){
        display: flex;
        width: 100%;
        height: auto;
    }
`

export const SideLeft = styled.aside`
    padding: 30px 20px;

`;

export const LegendContainer = styled.ul`
    list-style: none;
    max-height: 170px;
    overflow-y: scroll;

    > h2 {
        margin-bottom: 20px;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors};
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 16px;

    > div {
        background-color: ${props => props.color};

        width: 45px;
        height: 40px;
        border-radius: 5px;

        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }

    > span{
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;
