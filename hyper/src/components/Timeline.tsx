// @flow
import React, { FC } from 'react'
import classNames from 'classnames'

type TimelineProps = {
  tag: string
  className?: string
  children?: any
}

/**
 * Timeline
 */
const Timeline: FC<TimelineProps> = (props) => {
  const children = props.children || null
  const tag = props.tag

  return (
    tag === 'div' && (
      <div
        className={classNames('timeline-alt', 'pb-0', props.className)}
        {...props}
      >
        {children}
      </div>
    )
  )
}

Timeline.defaultProps = {
  tag: 'div',
}

export default Timeline
