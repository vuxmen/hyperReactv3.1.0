// @flow
import React, { FC } from 'react'
import classNames from 'classnames'

type MessageItemProps = {
  tag: string
  className?: string
  children?: Object
}

/**
 * MessageItem
 */
const MessageItem: FC<MessageItemProps> = (props) => {
  const children = props.children || null
  const tag = props.tag

  return (
    tag === 'div' && (
      <div className={classNames('inbox-item', props.className)} {...props}>
        {children}
      </div>
    )
  )
}

MessageItem.defaultProps = {
  tag: 'div',
}

export default MessageItem
