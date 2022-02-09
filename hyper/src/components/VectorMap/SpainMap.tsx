// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/spain.js'

//components
import BaseVectorMap from './BaseVectorMap'

type SpainVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const SpainVectorMap: FC<SpainVectorMapProps> = ({
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
        type="spain"
      />
    </>
  )
}

export default SpainVectorMap
