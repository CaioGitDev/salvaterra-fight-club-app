import styles from '@/app/ui/members/members.module.css'
import '@/app/ui/theme/dx.material.salvaterra-fight-club-theme.css'
import MembersDataGrid from '../ui/members/membersDataGrid/membersDataGrid'

const MembersPage = () => {
  return (
    <div className="p-5">
      <h4 className="pb-5"></h4>
      <div className={styles.container}>
        <div className="block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-quaternary-color ">
          <div className="border-b-[1px] border-secondary-color px-5 py-3 text-lg">
            Lista de membros
          </div>
          <div className="">
            <MembersDataGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersPage
