'use client'
import '@/app/ui/theme/dx.material.salvaterra-fight-club-theme.css'
import { serviceData } from '@/lib/member-datagrid-seed'

import DataGrid, {
  FilterRow,
  GroupPanel,
  HeaderFilter,
  Scrolling,
  LoadPanel,
  SearchPanel,
  Export,
  Toolbar,
  Item,
  DataGridTypes,
} from 'devextreme-react/data-grid'

import config from 'devextreme/core/config'

import getColumnsDefinition from '@/lib/devExtreme/member-datagrid-columns-definition'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MemberDataInterface } from '@/lib/definitions'
import CustomStore from 'devextreme/data/custom_store'
import Button from 'devextreme-react/button'
import MembersPopup from '@/components/members-popup/membersPopup'
import notify from 'devextreme/ui/notify'
import MemberNewForm from '@/components/library/member-new-form/memberNewForm'

config({
  editorStylingMode: 'underlined',
})

const exportFormats = ['xlsx', 'pdf']

const MembersDataGrid = () => {
  const [gridDataSource, setGridDataSource] =
    useState<CustomStore<MemberDataInterface, string>>()
  const [isPanelOpened, setPanelOpened] = useState(false)
  const [memberId, setMemberId] = useState<string>('')
  const [popupVisible, setPopupVisible] = useState(false)
  const [formDataDefaults, setFormDataDefaults] =
    useState<MemberDataInterface>()
  const gridRef = useRef<DataGrid>(null)

  const handleNewMemberClick = useCallback(() => {
    setFormDataDefaults(undefined)
    setPopupVisible(true)
  }, [])

  const handleRefreshClick = useCallback(() => {
    gridRef.current?.instance.refresh()
  }, [])

  const handleOnRowClick = useCallback(
    ({ data }: DataGridTypes.RowClickEvent) => {
      setMemberId(data.id)
      setFormDataDefaults(data)
      setPopupVisible(true)
    },
    [],
  )

  const handleOnSaveClick = useCallback(() => {
    notify(
      {
        message: `Novo Membro criado com sucesso`,
        position: { at: 'bottom center', my: 'bottom center' },
      },
      'success',
    )

    setPopupVisible(false)
  }, [])

  const changePopupVisibility = useCallback((isVisble: boolean) => {
    setPopupVisible(isVisble)
  }, [])

  useEffect(() => {
    setGridDataSource(
      new CustomStore({
        key: 'member.id',
        load: () => serviceData.getMembers(),
      }),
    )
  }, [])

  return (
    <div suppressHydrationWarning className="dx-viewport p-5">
      <DataGrid
        dataSource={gridDataSource}
        showBorders={true}
        height={700}
        defaultColumns={getColumnsDefinition(serviceData)}
        onRowClick={handleOnRowClick}
        ref={gridRef}
      >
        <LoadPanel showPane={false} />
        <SearchPanel visible width={200} placeholder="Pesquisa de Membro" />
        <Export enabled allowExportSelectedData formats={exportFormats} />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <GroupPanel visible={true} />
        <Scrolling mode="virtual" />
        <Toolbar>
          <Item location="before">
            <div className="grid-header">Lista de Membros</div>
          </Item>
          <Item location="after" locateInMenu="auto">
            <Button
              icon="plus"
              text="Novo Membro"
              type="default"
              stylingMode="contained"
              onClick={handleNewMemberClick}
            />
          </Item>
          <Item
            location="after"
            locateInMenu="auto"
            showText="inMenu"
            widget="dxButton"
          >
            <Button
              icon="refresh"
              text="Refresh"
              stylingMode="text"
              onClick={handleRefreshClick}
            />
          </Item>
          <Item location="after" locateInMenu="auto">
            <div className="separator" />
          </Item>
          <Item name="exportButton" />
          <Item location="after" locateInMenu="auto">
            <div className="separator" />
          </Item>
          <Item name="searchPanel" locateInMenu="auto" />
        </Toolbar>
      </DataGrid>
      <MembersPopup
        title="Novo Membro"
        visible={popupVisible}
        setVisible={changePopupVisibility}
        onSave={handleOnSaveClick}
      >
        <MemberNewForm data={formDataDefaults}></MemberNewForm>
      </MembersPopup>
    </div>
  )
}

export default MembersDataGrid
