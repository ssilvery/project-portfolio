// import { useState } from 'react'
import Container from './Portfolio'
import './css/App.css'
import './css/Style.css'
import Menu from './menu'

function App() {

  return (
    <div className='md:flex'>
      <Menu />
      <Container />
    </div>
  )
}

export default App
