import styles from '@/app/ui/members/members.module.css'

import MembersDataGrid from '../ui/members/membersDataGrid/membersDataGrid'

const MembersPage = () => (
  <div className="p-5">
    <h4 className="pb-5"></h4>
    <div className={styles.container}>
      <MembersDataGrid />
    </div>
  </div>
)

export default MembersPage
