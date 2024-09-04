import React from 'react'
import Header from './components/Header/Header'
import Platfrom from './components/Platfrom/Platfrom'
import Integrations from './components/Integrations/Integrations'
import Work from './components/Work/Work'
import Trust from './components/Trust/Trust'
import Price from './components/Price/Price'


const App = () => {
  return (
    <div>
      <Header />
      <Platfrom />
      <Integrations />
      <Work />
      <Trust />
      <Price />
    </div>
  )
}

export default App
