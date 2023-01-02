import styled from 'styled-components'

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    width:  32%;
    height: 150px;
    margin: 10px 0;

    background-color: ${props =>  props.color};
    color: ${props => props.theme.colors.white};

    border-color: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;
    border-radius: 4px;

    > img {
        height: 110%;
        position: absolute;

        top: -10px;
        right: -20px;
        opacity: .2;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }


    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
