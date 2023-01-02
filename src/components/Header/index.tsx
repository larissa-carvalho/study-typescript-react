import React from 'react'

//components
import Toggle from './../Toggle'
import { useTheme } from './../../hooks/theme';

//utils
import emojis from './../../utils/emojis'

// styles
import { 
    Container,
    Profile,
    Welcome, 
    UserName
} from './styles';

const Header: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = React.useState(() => theme.title === 'dark' ? true : false)

    const emoji = React.useMemo(() => {
        const ind = Math.floor(Math.random() * emojis.length)
        return emojis[ind];
    }, [])

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme();
    }
 
    return(
        <Container>
            <Toggle
                labelLeft='Light'
                labelRight='Dark'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Larissa de Carvalho</UserName>
            </Profile>
        </Container>
    )
}

export default Header;