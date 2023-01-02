import styled from 'styled-components'

interface ILegendProps{
    color: string
}

export const Container = styled.div`
    width: 100%;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
`;


export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }

    @media screen and (max-width: 959px){
        flex-direction: column;
    }
`;


export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    
    @media screen and (max-width: 959px){
        padding-left: 16px;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 16px;
    
    @media screen and (max-width: 959px){
        margin-right: 10px;
    }

    > div {
        background-color: ${props => props.color};

        width: 45px;
        height: 40px;
        border-radius: 5px;

        font-size: 18px;
        line-height: 40px;
        text-align: center;

        @media screen and (max-width: 959px){
            width: 30px;
            height: 30px;
        }
    }

    > span{
        margin-left: 5px;
    }
`;
