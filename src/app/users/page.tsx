'use client'
import styles from '@/app/ui/users/users.module.css'
import '@/app/ui/theme/dx.generic.salvaterra-fight-club-theme.css'

import { serviceData } from '@/lib/member-datagrid-seed'

import DataGrid, {
  Editing,
  FilterRow,
  GroupPanel,
  HeaderFilter,
  Scrolling,
  Popup,
  Form,
  PatternRule,
} from 'devextreme-react/data-grid'
import { EmailRule, Item, RequiredRule } from 'devextreme-react/form'
import getColumnsDefinition from '@/lib/devExtreme/member-datagrid-columns-definition'

type identificationDocumentTypes =
  | 'Cartão de Cidadão'
  | 'Passaporte'
  | 'Cartão de residência'
  | 'Outro'

type relationshipDegreeTypes = 'Mãe' | 'Pai' | 'Irmão' | 'Irmã' | 'Avó' | 'Avô'

const datepickOptions = {
  displayFormat: 'yyyy-MM-dd',
  openOnFieldClick: true,
  pickerType: 'calendar',
}

const phoneNumberOptions = {
  mask: '+351 000000000',
  maskRules: {
    X: /^\+3519[1236]\d{7}$/,
  },
  maskInvalidMessage: 'Número de telemovel deve ter o formato correto',
}

const postalCodeOptions = {
  mask: '0000-000',
  maskRules: {
    X: /^\d{4}-\d{3}$/,
  },
  maskInvalidMessage: 'Código postal deve ter o formato correto',
}

const UsersPage = () => {
  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <h1 className="pb-5">Lista de membros</h1>
      <div className={styles.container}>
        <DataGrid
          dataSource={serviceData.getMembers()}
          keyExpr="member.id"
          showBorders={true}
          height={700}
          defaultColumns={getColumnsDefinition(serviceData)}
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
              {/* identificação */}
              <Item
                itemType="group"
                caption="Identificação"
                colCount={2}
                colSpan={2}
              >
                <Item
                  isRequired={true}
                  dataField="member.fullName"
                  label={{ text: 'Nome Completo', location: 'top' }}
                >
                  <RequiredRule message="Nome is required" />
                  <PatternRule
                    message="Do not use digits in the Name"
                    pattern={/^[^0-9]+$/}
                  />
                </Item>
                <Item
                  isRequired={true}
                  dataField="member.gender_id"
                  label={{ text: 'Genero', location: 'top' }}
                  editorType="dxSelectBox"
                  editorOptions={{ dataSource: serviceData.getGengerList() }}
                />
                <Item
                  isRequired={true}
                  dataField="member.dateOfBirth"
                  editorType="dxDateBox"
                  editorOptions={datepickOptions}
                  label={{ text: 'Data Nascimento', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="member.nationality_id"
                  label={{ text: 'Nacionalidade', location: 'top' }}
                  editorType="dxSelectBox"
                  editorOptions={{
                    dataSource: serviceData.getNacionalitiesList(),
                  }}
                />
                <Item
                  isRequired={true}
                  dataField="member.placeOfBirth"
                  label={{ text: 'Naturalidade', location: 'top' }}
                ></Item>
                <Item
                  dataField="member.email"
                  label={{ text: 'Email', location: 'top' }}
                >
                  <RequiredRule message="Email is required" />
                  <EmailRule message="Email is invalid" />
                </Item>
                <Item
                  isRequired={true}
                  dataField="member.contact"
                  label={{ text: 'Nº Telemóvel', location: 'top' }}
                  editorOptions={phoneNumberOptions}
                ></Item>
              </Item>
              {/* dados morada */}
              <Item itemType="group" caption="Morada" colCount={2} colSpan={2}>
                <Item
                  isRequired={true}
                  dataField="memberAddress.address"
                  label={{ text: 'Morada', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="memberAddress.city"
                  label={{ text: 'Cidade', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="memberAddress.county"
                  label={{ text: 'Concelho', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="memberAddress.parish"
                  label={{ text: 'Freguesia', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="memberAddress.postalCode"
                  label={{ text: 'Cod. Postal', location: 'top' }}
                  editorOptions={postalCodeOptions}
                ></Item>
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
                  dataField="memberIdentificationDocument.identificationDocument_id"
                  label={{
                    text: 'Documento de identificação',
                    location: 'top',
                  }}
                  editorType="dxSelectBox"
                  editorOptions={{
                    dataSource: serviceData.getIdentificationDocumentList(),
                  }}
                />
                <Item
                  isRequired={true}
                  dataField="memberIdentificationDocument.identificationNumber"
                  label={{ text: 'Nº Identificação', location: 'top' }}
                />
                <Item
                  isRequired={true}
                  dataField="memberIdentificationDocument.expireDate"
                  label={{ text: 'Data de Validade', location: 'top' }}
                  editorType="dxDateBox"
                  editorOptions={{ datepickOptions }}
                />
                <Item
                  isRequired={true}
                  dataField="memberIdentificationDocument.taxIdentificationNumber"
                  label={{ text: 'Nº Identificação Fiscal', location: 'top' }}
                  editorType="dxNumberBox"
                  editorOptions={{
                    value: null,
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
