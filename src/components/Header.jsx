import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-500 sticky py-4 top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">Amadeus GPT</a>
        </div>
    </header>
  )
}

export default Header