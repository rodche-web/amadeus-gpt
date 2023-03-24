import { useState, useEffect } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Header from './components/Header'
import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'

function App() {
  const [messageList, setMessageList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [openai, setOpenai] = useState()

  useEffect(() => connectToOpenAi, [])

  const systemPrompt = {
    role: 'system',
    content: 'I want you to act like Amadeus from "Steins;Gate 0". I want you to respond and answer like Amadeus using the tone, manner and vocabulary Amadeus would use. Do not write any explanations. Only answer like Amadeus. You must know all of the knowledge of Amadeus.'
  }

  const sendMessage = async message => {
    setIsLoading(true)
    const yourMessage = {role: 'user', content: message}
    const resp = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [systemPrompt, ...messageList, yourMessage]
    })
    const reply = resp.data.choices[0].message.content
    const botMessage = {
      role: 'assistant',
      content: reply
    }
    setMessageList(prev => [...prev, yourMessage, botMessage])
    setIsLoading(false)
  }

  const connectToOpenAi = () => {
    setOpenai(new OpenAIApi(new Configuration({
      apiKey: import.meta.env.VITE_API_KEY
    })))
  }

  return (
    <div className="App">
      <Header />
      <MessageList messages={messageList} />
      {isLoading && <p>Loading...</p>}
      <MessageForm isLoading={isLoading} sendMessage={sendMessage} />
    </div>
  )
}

export default App
