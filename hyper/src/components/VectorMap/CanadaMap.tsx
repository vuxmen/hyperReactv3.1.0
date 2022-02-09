// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/canada.js'

//components
import BaseVectorMap from './BaseVectorMap'

type CanadaVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const CanadaVectorMap: FC<CanadaVectorMapProps> = ({
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
        type="canada"
      />
    </>
  )
}

export default CanadaVectorMap
