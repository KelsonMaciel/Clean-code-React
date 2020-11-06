import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, Input, FormStatus } from '@/presentation/component'
import Context from '@/presentation/component/context/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return <div className={Styles.login}>
    <Header />
    <Context.Provider value={state}>
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
