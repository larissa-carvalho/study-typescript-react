import React from 'react'

import Toggle from '../Toggle'

import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme';

//libs
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

// styles
import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToogleMenu,
    ToogleThemeContainer
} from './styles';

const Aside: React.FC = () => {
    const logo: string = require("../../assets/logo.svg").default;
    const { singOut } = useAuth()
    const { toggleTheme, theme } = useTheme()


    const [toggleMenuIsOpened, setToggleMenuIsOpened] = React.useState(false)
    const [darkTheme, setDarkTheme] = React.useState(() => theme.title === 'dark' ? true : false)


    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }
 
    return(
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToogleMenu onClick={() => setToggleMenuIsOpened(!toggleMenuIsOpened)}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToogleMenu>
                <LogoImg src={logo} alt="Logo my wallet" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/balance-entry">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/balance-exit">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                <MenuItemButton type="button" onClick={() => singOut()}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ToogleThemeContainer menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft='Light'
                    labelRight='Dark'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ToogleThemeContainer>
        </Container>
    )
}

export default Aside;