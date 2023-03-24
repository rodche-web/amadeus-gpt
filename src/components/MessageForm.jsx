import {useState} from 'react'

const MessageForm = ({isLoading, sendMessage}) => {
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        sendMessage(message)
        setMessage('')
    }

    return (
        <div class="fixed bottom-0 left-0 right-0 bg-white">
            <div class="mb-2">
                <textarea class="w-full rounded-lg resize-none border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" rows="3" placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)} disabled={isLoading}></textarea>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" type="submit" onClick={handleSubmit} disabled={!message || isLoading}>Send</button>
        </div>
    )
}

export default MessageForm