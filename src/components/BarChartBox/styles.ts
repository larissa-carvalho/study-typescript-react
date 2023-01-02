import styled from 'styled-components'

interface ILegendProps{
    color: string
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 959px){
        width: 100%;
        height: initial;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const SideLeft = styled.aside`
    padding: 30px 20px;
    flex: 1;


    > h2{
        padding-left: 16px;
        margin-bottom: 10px;

        @media screen and (max-width: 959px){
            padding-left: 8px;
        }
    }
`

export const SideRight = styled.main`
    flex: 1;
    width: 200px;
    height: 150px;

    display: flex;
    justify-content: center;
    padding-top: 35px;

    @media screen and (max-width: 959px){
        width: 100%;
    }
`

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 959px){
        flex-direction: row;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 16px;
    padding-left: 16px;

    @media screen and (max-width: 959px){
        padding-left: 8px;
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
            font-size: 12px;
            line-height: 30px;
        }
    }

    > span{
        margin-left: 5px;
    }
`;
