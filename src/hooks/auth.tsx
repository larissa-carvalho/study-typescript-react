import React from 'react'

interface IAuthContext{
    logged: boolean
    signIn(email: string, password: string): void
    singOut(): void
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({children}) => {
    const [logged, setLogged] = React.useState<boolean>(() => {
        const isLogged = localStorage.getItem('logged')

        return !!isLogged
    })

    const signIn = (email: string, password: string) => {
        if(email === "lari@dev.com" && password === "123"){
            localStorage.setItem('logged', 'true')
        }else{
            alert('E-mail ou senha inválidos')
        }
    }

    const singOut = () => {
        localStorage.removeItem('logged');
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, singOut}} > { children } </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = React.useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth };