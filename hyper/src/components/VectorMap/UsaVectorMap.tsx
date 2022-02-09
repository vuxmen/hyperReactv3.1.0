// @flow
import React, { FC } from 'react'
import 'jsvectormap'
import 'jsvectormap/dist/maps/us-merc-en.js'

//components
import BaseVectorMap from './BaseVectorMap'

type UsaVectorMapProps = {
  width?: string
  height?: string
  options?: any
}

const UsaVectorMap: FC<UsaVectorMapProps> = ({ width, height, options }) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="us_merc_en"
      />
    </>
  )
}

export default UsaVectorMap
