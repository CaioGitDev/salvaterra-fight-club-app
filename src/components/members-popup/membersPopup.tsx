'use client'
import { ScrollView, ValidationGroup } from 'devextreme-react'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { PropsWithChildren, useCallback, useRef } from 'react'
import NoSSRWraper from '../no-ssr-wrapper/noSSRWraper'

type PopupProps = {
  title: string
  visible: boolean
  width?: number
  wrapperAttr?: { class: string }
  isSaveDisabled?: boolean
  setVisible: (visible: boolean) => void
  onSave?: () => void
}

const MembersPopup = ({
  title,
  visible,
  width = 480,
  onSave,
  setVisible,
  wrapperAttr = { class: '' },
  isSaveDisabled = false,
  children,
}: PropsWithChildren<PopupProps>) => {
  const validationGroup = useRef<ValidationGroup>(null)

  const close = () => {
    validationGroup.current?.instance.reset()
    setVisible(false)
  }

  const onCancelClick = useCallback(() => {
    close()
  }, [close, validationGroup])

  const onSaveClick = useCallback(() => {
    if (!validationGroup.current?.instance.validate().isValid) return

    onSave && onSave()
    close()
  }, [validationGroup])

  return (
    <NoSSRWraper>
      <Popup
        title={title}
        visible={visible}
        width="90vw"
        height="90vh"
        wrapperAttr={{
          ...wrapperAttr,
          class: `${wrapperAttr?.class} form-popup`,
        }}
      >
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="after"
          options={{ text: 'Cancelar', type: 'normal', onClick: onCancelClick }}
        />
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="after"
          options={{
            text: 'Salvar',
            stylingMode: 'contained',
            type: 'default',
            onClick: onSaveClick,
          }}
        />
        <ScrollView>
          <ValidationGroup ref={validationGroup}>{children}</ValidationGroup>
        </ScrollView>
      </Popup>
    </NoSSRWraper>
  )
}

export default MembersPopup
