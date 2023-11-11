'use client'

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md'
import Image from 'next/image'

import userImage from '../../../../public/images/caio.svg'

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split('/').pop()}</div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.user}>
          <Image
            className={styles.user_image}
            src={userImage}
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.user_detail}>
            <span className={styles.user_name}>Caio Rosa</span>
          </div>
        </div>
        <div className={styles.icons}>
          <MdNotifications size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
