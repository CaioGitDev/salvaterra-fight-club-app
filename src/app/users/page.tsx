'use client'
import styles from '@/app/ui/users/users.module.css'
import { differenceInYears } from 'date-fns'
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
  EmailRule,
  RequiredRule,
  PatternRule,
} from 'devextreme-react/data-grid'
import { Item } from 'devextreme-react/form'
import { useState } from 'react'

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

const UsersPage = () => {
  const [guardionPanel, setGuardianPanel] = useState(true)
  const handleBirthDateChange = (dateOfBirthSelected: string) => {
    const dateOfBirthDate = new Date(dateOfBirthSelected)
    const today = new Date()

    setGuardianPanel(!(differenceInYears(today, dateOfBirthDate) <= 18))
  }

  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <h1 className="pb-5">Lista de membros</h1>
      <div className={styles.container}>
        <DataGrid
          dataSource={membersData}
          keyExpr="id"
          defaultColumns={memberDataColumns}
          showBorders={true}
          height={700}
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
            <Form showValidationSummary={true}>
              {/* dados pessoais */}
              <Item
                itemType="group"
                caption="Identificação"
                colCount={2}
                colSpan={2}
              >
                <Item
                  isRequired={true}
                  dataField="fullName"
                  label={{ text: 'Nome Completo', location: 'top' }}
                >
                  <RequiredRule message="Name is required" />
                  <PatternRule
                    message="Do not use digits in the Name"
                    pattern={/^[^0-9]+$/}
                  />
                </Item>
                <Item
                  isRequired={true}
                  dataField="gender"
                  label={{ text: 'Genero', location: 'top' }}
                  editorType="dxSelectBox"
                  editorOptions={{ items: ['Homem', 'Mulher', 'Outro'] }}
                />
                <Item
                  isRequired={true}
                  dataField="dateOfBirth"
                  editorType="dxDateBox"
                  editorOptions={{
                    // format: 'date',
                    displayFormat: 'yyyy-MM-dd',
                    openOnFieldClick: true,
                    pickerType: 'calendar',
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onValueChanged: (e: any) => {
                      console.log(e.value)
                      handleBirthDateChange(e.value)
                    },
                  }}
                  label={{ text: 'Data Nascimento', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="nationality"
                  label={{ text: 'Nacionalidade', location: 'top' }}
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      'Português',
                      'Brasileiro',
                      'Inglês',
                      'Ucraniano',
                      'Espanhol',
                      'Alemão',
                      'Marroquino',
                      'Russo',
                    ],
                  }}
                />
                <Item
                  isRequired={true}
                  dataField="placeOfBirth"
                  label={{ text: 'Naturalidade', location: 'top' }}
                />
                <Item
                  dataField="email"
                  label={{ text: 'Email', location: 'top' }}
                >
                  <RequiredRule message="Email is required" />
                  <EmailRule message="Email is invalid" />
                </Item>
                <Item
                  isRequired={true}
                  dataField="contact"
                  label={{ text: 'Nº Telemóvel', location: 'top' }}
                ></Item>
              </Item>

              {/* dados morada */}
              <Item itemType="group" caption="Morada" colCount={2} colSpan={2}>
                <Item
                  isRequired={true}
                  dataField="address"
                  label={{ text: 'Morada', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="city"
                  label={{ text: 'Cidade', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="country"
                  label={{ text: 'Concelho', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="parish"
                  label={{ text: 'Freguesia', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="postalCode"
                  label={{ text: 'Cod. Postal', location: 'top' }}
                  editorOptions={{
                    format: '#-###',
                    mask: '0000-000',
                  }}
                />
              </Item>

              {/* identificação fiscal */}
              <Item
                itemType="group"
                caption="Documento de Identificação"
                colCount={2}
                colSpan={2}
              >
                <Item
                  isRequired={true}
                  dataField="identificationDocument"
                  label={{
                    text: 'Documento de identificação',
                    location: 'top',
                  }}
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      'Cartão de Cidadão',
                      'Bilhete de identidade',
                      'Cartão de residência',
                      'Passaporte',
                      'Autorização',
                      'Título de residência',
                    ],
                  }}
                />
                <Item
                  isRequired={true}
                  dataField="identificationNumber"
                  label={{ text: 'Nº Identificação', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="expireDate"
                  label={{ text: 'Data de Validade', location: 'top' }}
                  editorType="dxDateBox"
                  editorOptions={{
                    format: 'date',
                    displayFormat: 'yyyy-MM-dd',
                    openOnFieldClick: true,
                    pickerType: 'calendar',
                  }}
                />
                <Item
                  isRequired={true}
                  dataField="taxIdentificationNumber"
                  label={{ text: 'Nº Identificação Fiscal', location: 'top' }}
                  editorType="dxNumberBox"
                  editorOptions={{
                    value: null,
                  }}
                />
              </Item>

              {/* dados de um responsavel por menor */}
              <Item
                itemType="group"
                caption="Responsável"
                colCount={2}
                colSpan={2}
              >
                <Item
                  isRequired={true}
                  dataField="guardian.fullName"
                  label={{ text: 'Nome Responsável', location: 'top' }}
                  disabled={guardionPanel}
                ></Item>
              </Item>
            </Form>
          </Editing>
        </DataGrid>
      </div>
    </div>
  )
}

export default UsersPage
