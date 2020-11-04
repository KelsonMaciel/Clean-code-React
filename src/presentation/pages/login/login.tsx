import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/component/spinner/spinner'
import Logo from '@/presentation/component/logo/logo'

const Login: React.FC = () => {
  return <div className={Styles.login}>
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
    <form className={Styles.form}>
      <h2>Login</h2>
      <div className={Styles.inputWrap}>
        <input type="email" name="email" placeholder="digite seu email"/>
        <span className={Styles.status}>🔴</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type="password" name="password" placeholder="digite seu senha"/>
        <span className={Styles.status}>🔴</span>
      </div>
      <button className={Styles.submit} type="submit">Entrar</button>
      <span className={Styles.link}>Criar conta</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner}/>
        <span className={Styles.error}>Error</span>
      </div>
    </form>
    <footer className={Styles.footer} />
  </div>
}

export default Login