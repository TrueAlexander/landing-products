import React from 'react'
import ProductPage from './pages/ProductPage'
import WhatsappIcon from './components/whatsappIcon/WhatsappIcon'
// import ScrollToTop from './utils/ScrollToTop'
import UpArrow from './components/upArrow/UpArrow'


const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <ProductPage/>
      <WhatsappIcon/>
      <UpArrow />
    </>
  )
}

export default App
