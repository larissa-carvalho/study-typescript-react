import React from 'react'

import LogoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles'

const SignIn: React.FC = () =>  {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const { signIn } = useAuth()

    return(
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha carteira"/>
                <h3>Minha carteira</h3>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>
                    Entrar
                </FormTitle>

               <Input type="email" placeholder='E-mail' required onChange={({target}) => setEmail(target.value)} />
               <Input type="password" placeholder='Senha' required  onChange={({target}) => setPassword(target.value)}/>

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    )
}

export default SignIn;