'use client'
import Form from '@/app/ui/users/form/form'
import styles from '@/app/ui/users/users.module.css'

import 'devextreme/dist/css/dx.salvaterra-fight-club-theme.min.css'
import Button from 'devextreme-react/button'

const UsersPage = () => {
  function sayHelloWorld() {
    alert('Hello world!')
  }
  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <div className={styles.container}>
        <Button text="Click me" type="success" onClick={sayHelloWorld} />
      </div>
    </div>
  )
}

export default UsersPage
