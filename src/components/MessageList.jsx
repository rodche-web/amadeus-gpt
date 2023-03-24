import React from 'react'
import MessageItem from './MessageItem'

const MessageList = ({messages}) => {
  return (
    <div class="max-w-lg mx-auto">
        <div class="flex flex-col">
          {messages.map((item, idx) => <MessageItem key={idx} role={item.role} message={item.content} />)}
        </div>
      </div>
  )
}

export default MessageList