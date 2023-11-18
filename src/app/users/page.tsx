'use client'
import styles from '@/app/ui/users/users.module.css'

import '@/app/ui/theme/dx.generic.salvaterra-fight-club-theme.css'
import { UUID } from 'crypto'

import DataGrid, {
  Editing,
  FilterRow,
  GroupPanel,
  HeaderFilter,
  Scrolling,
  Popup,
  Form,
} from 'devextreme-react/data-grid'
import { Item } from 'devextreme-react/form'
import DataSource from 'devextreme/data/data_source'

const pageSizes = [10, 25, 50, 100]

type identificationDocumentTypes =
  | 'Cartão de Cidadão'
  | 'Passaporte'
  | 'Cartão de residência'
  | 'Outro'

type relationshipDegreeTypes = 'Mãe' | 'Pai' | 'Irmão' | 'Irmã' | 'Avó' | 'Avô'

const memberDataColumns = [
  { dataField: 'membershipNumber', caption: 'Nº Socio' },
  { dataField: 'fullName', caption: 'Nome Completo' },
  { dataField: 'gender', caption: 'Genero' },
  { dataField: 'dateOfBirth', caption: 'Data Nasc.' },
  { dataField: 'nationality', caption: 'Nacionalidade' },
  { dataField: 'placeOfBirth', caption: 'Local de Nasc.' },
  { dataField: 'identificationDocument', caption: 'Doc. Identificação' },
  { dataField: 'identificationNumber', caption: 'Nº de Identificação' },
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

const genreDataSource = new DataSource({
  store: {
    data: [{ id: 1, text: 'Homem' }],
    type: 'array',
    key: 'id',
  },
})

const UsersPage = () => {
  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <h1 className="pb-5">Lista de membros</h1>
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
            useIcons={true}
            allowAdding={true}
            allowUpdating={true}
            allowDeleting={true}
          >
            <Popup title="Membro" showTitle={true} width="90vw" height="80vh" />
            <Form>
              <Item
                itemType="group"
                caption="Identificação"
                colCount={2}
                colSpan={2}
              >
                <Item
                  dataField="fullName"
                  label={{ text: 'Nome Completo', location: 'top' }}
                />
                <Item
                  dataField="gender"
                  label={{ text: 'Genero', location: 'top' }}
                  editorType="dxSelectBox"
                  editorOptions={{ items: ['Homem', 'Mulher', 'Outro'] }}
                />
                <Item
                  dataField="dateOfBirth"
                  editorType="dxDateBox"
                  editorOptions={{
                    format: 'date',
                    displayFormat: 'yyyy-MM-dd',
                    openOnFieldClick: true,
                    pickerType: 'calendar',
                  }}
                  label={{ text: 'Data Nascimento', location: 'top' }}
                />
                <Item
                  dataField="nationality"
                  label={{ text: 'Nacionalidade', location: 'top' }}
                />
                <Item
                  dataField="placeOfBirth"
                  label={{ text: 'Naturalidade', location: 'top' }}
                />
                <Item
                  dataField="identificationDocument"
                  label={{
                    text: 'Documento de identificação',
                    location: 'top',
                  }}
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      'Cartão de Cidadão',
                      'Passaporte',
                      'Cartão de residência',
                      'Outro',
                    ],
                  }}
                />
              </Item>
            </Form>
          </Editing>
        </DataGrid>
      </div>
    </div>
  )
}

export default UsersPage
