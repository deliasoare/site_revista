import { useState } from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx';

import './styles/styles.scss';

function App() {

  return (
    <div className='content'>
      <Header />
      <Main />
    </div>
  )
}

export default App
