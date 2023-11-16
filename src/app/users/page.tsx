'use client'
import styles from '@/app/ui/users/users.module.css'

import '@/app/ui/theme/dx.generic.salvaterra-fight-club-theme.css'
import { UUID } from 'crypto'

import DataGrid, {
  Column,
  Editing,
  FilterRow,
  Grouping,
  GroupPanel,
  HeaderFilter,
  Pager,
  Paging,
  Scrolling,
  SearchPanel,
  Popup,
  Form,
} from 'devextreme-react/data-grid'
import { GroupItem, Item } from 'devextreme-react/form'

const pageSizes = [10, 25, 50, 100]

type identificationDocumentTypes =
  | 'Cartão de Cidadão'
  | 'Passaporte'
  | 'Cartão de residência'
  | 'Outro'

type relationshipDegreeTypes = 'Mãe' | 'Pai' | 'Irmão' | 'Irmã' | 'Avó' | 'Avô'

const memberDataColumns = [
  'membershipNumber',
  'fullName',
  'gender',
  'dateOfBirth',
  'nationality',
  'placeOfBirth',
  'identificationDocument',
  'identificationNumber',
]

type MemberData = {
  id?: UUID
  membershipNumber?: number
  photoUrl: string
  fullName: string
  gender: string
  dateOfBirth: Date
  nationality: string
  placeOfBirth: string
  identificationDocument: identificationDocumentTypes
  identificationNumber: string
  expireDate: Date

  taxIdentificationNumber: string
  contact: string
  email: string
  address: string
  city: string
  county: string
  parish: string
  postalCode: string

  guardian?: {
    fullName: string
    contact: string
    relationshipDegree: relationshipDegreeTypes
    address: string
    city: string
    county: string
    parish: string
    postalCode: string
  }
}

const membersData: MemberData[] = [
  {
    id: '123e4567-e89b-12d3-a456-426614174001',
    membershipNumber: 1,
    photoUrl: 'https://example.com/photo1.jpg',
    fullName: 'João Silva',
    gender: 'Male',
    dateOfBirth: new Date(),
    nationality: 'Portuguese',
    placeOfBirth: 'Lisbon',
    identificationDocument: 'Cartão de Cidadão',
    identificationNumber: '123456789',
    expireDate: new Date(),
    taxIdentificationNumber: '987654321',
    contact: '+351 123 456 789',
    email: 'joao.silva@example.com',
    address: 'Rua ABC, 123',
    city: 'Lisbon',
    county: 'Lisbon',
    parish: 'Parish1',
    postalCode: '1234-567',
    guardian: {
      fullName: 'Maria Silva',
      contact: '+351 987 654 321',
      relationshipDegree: 'Irmã',
      address: 'Rua XYZ, 456',
      city: 'Lisbon',
      county: 'Lisbon',
      parish: 'Parish2',
      postalCode: '5678-901',
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174002',
    membershipNumber: 1,
    photoUrl: '',
    fullName: 'Ana Pereira',
    gender: 'Female',
    dateOfBirth: new Date(),
    nationality: 'Portuguese',
    placeOfBirth: 'Porto',
    identificationDocument: 'Cartão de residência',
    identificationNumber: '987654321',
    expireDate: new Date(),
    taxIdentificationNumber: '123456789',
    contact: '+351 987 654 321',
    email: 'ana.pereira@example.com',
    address: 'Avenida 123, 456',
    city: 'Porto',
    county: 'Porto',
    parish: 'Parish3',
    postalCode: '3456-789',
    guardian: {
      fullName: 'Carlos Pereira',
      contact: '+351 123 456 789',
      relationshipDegree: 'Pai',
      address: 'Avenida XYZ, 789',
      city: 'Porto',
      county: 'Porto',
      parish: 'Parish4',
      postalCode: '6789-012',
    },
  },
]

const UsersPage = () => {
  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <h2 className="pb-5">Lista de membros</h2>
      <div className={styles.container}>
        <DataGrid
          dataSource={membersData}
          keyExpr="id"
          defaultColumns={memberDataColumns}
          showBorders={true}
        >
          <FilterRow visible={true} />
          <HeaderFilter visible={true} />
          <GroupPanel visible={true} />
          <Scrolling mode="virtual" />
          <Editing
            mode="popup"
            useIcons={false}
            allowAdding={true}
            allowUpdating={false}
            allowDeleting={false}
          >
            <Popup title="Membro" showTitle={true} width="90vw" height="80vh" />
            <Form>
              <GroupItem caption="Identificação" colCount={2} colSpan={2}>
                <Item dataField="fullName"></Item>
              </GroupItem>
            </Form>
          </Editing>
        </DataGrid>
      </div>
    </div>
  )
}

export default UsersPage
