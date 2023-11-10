import Navbar from '../ui/dashboard/navbar/navbar'
import SideBar from '../ui/dashboard/sidebar/sidebar'
import styles from '../ui/dashboard/dashboard.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
