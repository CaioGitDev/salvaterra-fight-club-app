import styles from '@/app/ui/members/members.module.css'

import MembersDataGrid from '../ui/members/membersDataGrid/membersDataGrid'
import NoSSRWraper from '@/components/no-ssr-wrapper/noSSRWraper'

const MembersPage = () => (
  <div className="p-5">
    <h4 className="pb-5"></h4>
    <div className={styles.container}>
      <NoSSRWraper>
        <MembersDataGrid />
      </NoSSRWraper>
    </div>
  </div>
)

export default MembersPage
