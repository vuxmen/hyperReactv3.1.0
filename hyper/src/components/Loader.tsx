// @flow
import React, { FC } from 'react'

/**
 * Renders the preloader
 */
const Loader: FC = () => {
  return (
    <div className="preloader" id="preloader">
      <div className="status" id="status">
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
