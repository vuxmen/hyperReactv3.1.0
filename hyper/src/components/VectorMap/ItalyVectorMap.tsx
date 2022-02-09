// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/italy.js'

//components
import BaseVectorMap from './BaseVectorMap'

type ItalyVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const ItalyVectorMap: FC<ItalyVectorMapProps> = ({
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
        type="italy"
      />
    </>
  )
}

export default ItalyVectorMap
