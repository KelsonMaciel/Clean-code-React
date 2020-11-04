import React from 'react'
import Styles from './login-styles.scss'
import { Header, Footer, Input, FormStatus } from '@/presentation/component'

const Login: React.FC = () => {
  return <div className={Styles.login}>
    <Header />
    <form className={Styles.form}>
      <h2>Login</h2>
      <Input type="email" name="email" placeholder="digite seu email"/>
      <Input type="password" name="password" placeholder="digite seu senha"/>
      <button className={Styles.submit} type="submit">Entrar</button>
      <span className={Styles.link}>Criar conta</span>
      <FormStatus />
    </form>
    <Footer />
  </div>
}

export default Login
