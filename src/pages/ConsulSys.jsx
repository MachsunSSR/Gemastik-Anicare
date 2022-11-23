import React from 'react'
import Header from '../components/Header'
import ChatContent from '../components/ChatContent'

// Build a chat UI
// Path: src\components\Chatbot.jsx

const ConsulSys = () => {
  return (
    <div>
      <Header title={"Konsultasikan dengan Sistem"} />
      {/* Build a chat UI */}
      <div className='px-10 py-10'>
        <ChatContent />
      </div>
    </div>
  )
}

export default ConsulSys