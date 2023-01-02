import styled, { css }  from 'styled-components'

interface IContainerProps {
    menuIsOpen: boolean
}



export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};

    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px){
        padding-left: 8px;
        position: fixed;
        z-index: 2;
        width: 200px;


        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}
    }
`

export const Header = styled.header`

    display: flex;
    align-items: center;

    @media(max-width: 600px){
        height: 70px;
    }
    
`

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){
        display: none;
    }
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 7px;

    transition: opacity 300ms;

    &:hover{
        opacity: .7;
    }

    svg{
        margin-right: 10px;
    }
`

export const MenuItemButton = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 7px;
    cursor: pointer;

    transition: opacity 300ms;

    &:hover{
        opacity: .7;
    }

    svg{
        margin-right: 10px;
    }
`

export const ToogleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 4px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    display: none;

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            fill: #fff;
        }
    }   
`

export const ToogleThemeContainer = styled.footer<IContainerProps>`
    display: none;
    position: absolute;
    bottom: 10px;
 
    @media screen and (max-width: 600px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`