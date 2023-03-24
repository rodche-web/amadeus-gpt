import React from 'react'
import AmadeusAvatar from '../assets/kurisu.jpg'
import UserAvatar from '../assets/profilepic.png'

const MessageItem = ({role, message}) => {

    if (role === 'user') {
        return (
            <div class="flex items-start mb-4">
                <img class="w-14 h-14 rounded-full mr-4" src={UserAvatar} alt="Avatar" />
                <div class="flex flex-col">
                <div class="flex items-center">
                    <h3 class="text-gray-900 font-semibold mr-2">User</h3>
                </div>
                <div class="bg-gray-100 rounded-lg px-4 py-2 mt-2">
                    <p class="text-gray-800">{message}</p>
                </div>
                </div>
            </div>
        )
    }

  return (
    <div class="flex items-end mb-4">
        <div class="bg-blue-500 rounded-lg px-4 py-2 mt-2 ml-auto">
          <p class="text-white">{message}</p>
        </div>
        <img class="w-14 h-14 rounded-full ml-4" src={AmadeusAvatar} alt="Avatar" />
    </div>
  )
}

export default MessageItem