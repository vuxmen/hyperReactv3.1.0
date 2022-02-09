// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/russia.js'

//components
import BaseVectorMap from './BaseVectorMap'

type RussiaVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const RussiaVectorMap: FC<RussiaVectorMapProps> = ({
  width,
  height,
  options,
}) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="russia"
      />
    </>
  )
}

export default RussiaVectorMap
