// @flow
import React, { FC } from 'react'
import classNames from 'classnames'

type SpinnerProps = {
  tag?: string
  className?: string
  size?: 'lg' | 'md' | 'sm'
  type?: 'bordered' | 'grow'
  color?: string
  children?: any
}

/**
 * Spinner
 */
const Spinner: FC<SpinnerProps> = (props) => {
  const children = props.children || null
  const tag = props.tag || 'div'
  const color = props.color || 'secondary'
  const size = props.size || ''

  return (
    tag === 'div' && (
      <div
        role="status"
        className={classNames(
          {
            'spinner-border': props.type === 'bordered',
            'spinner-grow': props.type === 'grow',
          },
          [`text-${color}`],
          { [`avatar-${size}|`]: size },
          props.className
        )}
      >
        {children}
      </div>
    )
  )
}

Spinner.defaultProps = {
  tag: 'div',
  type: 'bordered',
}

export default Spinner
