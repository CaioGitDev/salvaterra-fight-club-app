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
import { Item } from 'devextreme-react/form'
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
              </Item>
            </Form>
          </Editing>
        </DataGrid>
      </div>
    </div>
  )
}

export default UsersPage
