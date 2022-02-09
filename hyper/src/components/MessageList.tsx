// @flow
import React, { FC } from 'react'
import classNames from 'classnames'

type MessageListProps = {
  tag: string
  className?: string
  children?: Object
}

/**
 * MessageList
 */
const MessageList: FC<MessageListProps> = (props) => {
  const children = props.children || null
  const tag = props.tag

  return (
    tag === 'div' && (
      <div className={classNames('inbox-widget', props.className)} {...props}>
        {children}
      </div>
    )
  )
}

MessageList.defaultProps = {
  tag: 'div',
}

export default MessageList
