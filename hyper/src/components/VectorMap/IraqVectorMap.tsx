// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/iraq.js'

//components
import BaseVectorMap from './BaseVectorMap'

type IraqVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const IraqVectorMap: FC<IraqVectorMapProps> = ({ width, height, options }) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="iraq"
      />
    </>
  )
}

export default IraqVectorMap
