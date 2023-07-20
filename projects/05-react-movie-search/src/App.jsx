import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Uppenheimer, Barbie, The Flash...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <h2>Here the results...</h2>
      </main>
    </div>

  )
}

export default App
