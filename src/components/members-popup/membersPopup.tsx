import { Popup, ValidationGroup } from 'devextreme-react'
import { ToolbarItem } from 'devextreme-react/popup'
import Button from 'devextreme-react/button'
import { PropsWithChildren, useCallback, useRef } from 'react'
import { useScreenSize } from '@/utils/quedia-query'

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
  const { isXSmall } = useScreenSize()
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
    <Popup
      title={title}
      visible={visible}
      fullScreen={isXSmall}
      width="90vw"
      height="90vh"
      wrapperAttr={{
        ...wrapperAttr,
        class: `${wrapperAttr?.class} form-popup`,
      }}
    >
      <ToolbarItem toolbar="bottom" location="center">
        <div
          className={`form-popup-buttons-container ${
            width <= 360 ? 'flex-buttons' : ''
          }`}
        >
          <Button
            text="Cancel"
            stylingMode="contained"
            onClick={onCancelClick}
          />
          <Button
            text="Save"
            stylingMode="contained"
            type="default"
            disabled={isSaveDisabled}
            onClick={onSaveClick}
          />
        </div>
      </ToolbarItem>
      <ValidationGroup ref={validationGroup}>{children}</ValidationGroup>
    </Popup>
  )
}

export default MembersPopup
