/* eslint-disable react/display-name */
import React from 'react'

const LabelTemplate =
  (iconName: string) =>
  (data: {
    text:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined
  }) => (
    <div>
      <i className={`dx-icon dx-icon-${iconName}`}></i>
      {data.text}
    </div>
  )

export default LabelTemplate
