import Headers from './component/Header/Headers.jsx'
import Navbar from './component/Navbar.jsx'
import BottomCard from './component/BottomCards.jsx'
import Footer from './component/Footer.jsx'
import SlideListProvider from './Store/IndexPageSlider.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'
import ProductProvider from './Store/ProductStore.jsx'

function App() {

  return (
    <>
      <ProductProvider>
        <SlideListProvider>
          <Headers />
          <Navbar />
          <Outlet />
          <Footer />
        </SlideListProvider>
      </ProductProvider>
    </>
  )
}

export default App
