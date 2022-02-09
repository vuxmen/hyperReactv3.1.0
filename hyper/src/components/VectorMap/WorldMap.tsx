// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'

//components
import BaseVectorMap from './BaseVectorMap'

type WorldVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const WorldVectorMap: FC<WorldVectorMapProps> = ({
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
        type="world"
      />
    </>
  )
}

export default WorldVectorMap
