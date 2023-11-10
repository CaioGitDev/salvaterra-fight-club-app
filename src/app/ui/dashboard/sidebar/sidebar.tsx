import { randomUUID } from 'crypto'
import styles from './sidebar.module.css'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdGroups,
  MdOutlineCreditCard,
  MdOutlineCalendarMonth,
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

import LogoImage from '../../../../../public/images/logo.svg'

const menuItems = [
  {
    id: randomUUID(),
    title: 'Menu',
    list: [
      {
        id: randomUUID(),
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        id: randomUUID(),
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdGroups />,
      },
      {
        id: randomUUID(),
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        id: randomUUID(),
        title: 'Payments',
        path: '/dashboard/payments',
        icon: <MdOutlineCreditCard />,
      },
      {
        id: randomUUID(),
        title: 'Meeting Management',
        path: '/dashboard/meetingManagement',
        icon: <MdOutlineCalendarMonth />,
      },
    ],
  },
  {
    id: randomUUID(),
    title: "Teams",
    list: []
  }
]

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.logo_image} src={LogoImage} alt="" width={50} height={50} />
        <div className={styles.logo_detail}>
          <span className={styles.logo_name}>Salvaterra Fight Club</span>
          <span className={styles.logo_description}>Artes Marciais e Desportos de Combate</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.id}>
            <span className={styles.category}>{category.title}</span>
            {
              category.list.map(item => (
                <MenuLink item={item} key={item.id} />
              ))
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
