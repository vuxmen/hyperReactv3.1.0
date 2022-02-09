// @flow
import React, { FC } from 'react'
import classNames from 'classnames'

type TimelineProps = {
  tag: string
  className?: string
  children?: any
}

/**
 * TimelineItem
 */
const TimelineItem: FC<TimelineProps> = (props) => {
  const children = props.children || null
  const tag = props.tag

  return (
    tag === 'div' && (
      <div className={classNames('timeline-item', props.className)} {...props}>
        {children}
      </div>
    )
  )
}

TimelineItem.defaultProps = {
  tag: 'div',
}

export default TimelineItem
