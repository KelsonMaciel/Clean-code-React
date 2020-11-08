import React, { useContext } from 'react'
import Spinner from '@/presentation/component/spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/component/context/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {state.main && <span className={Styles.error}>{state.main}</span>}
    </div>
  )
}

export default FormStatus
