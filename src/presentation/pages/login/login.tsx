import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, Input, FormStatus } from '@/presentation/component'
import Context from '@/presentation/component/context/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props ={
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    isLoading: false,
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return <div className={Styles.login}>
    <Header />
    <Context.Provider value={{ state, setState }}>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="digite seu email"/>
        <Input type="password" name="password" placeholder="digite seu senha"/>
        <button data-testid='submit' disabled className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
    </Context.Provider>

    <Footer />
  </div>
}

export default Login
