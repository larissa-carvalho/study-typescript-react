import styled from 'styled-components'

interface ITagProps{
    color: string
}

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: rgba(255, 255, 255, .1);

    list-style: none;
    border-radius: 5px;
    cursor: pointer;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    transition: all .3s;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;