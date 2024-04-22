import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IndexCarosel from './component/IndexPage/indexCarosel.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProfilePage from './component/profilePage/ProfilePage.jsx'
import BottomCard from './component/BottomCards.jsx'
import ProductPageIntro from './component/AllProducts/ProductPageIntro.jsx'
import FeatureProducts from './component/AllProducts/FeatureProducts.jsx'
import NotFoundPage from './component/NotFound/NotFoundPage.jsx'
import ProductPreview from './component/AllProducts/ProductPreview.jsx'
import BraPage from './component/BraPages/BraPage.jsx'
import CheckoutPage from './component/Checkout/CheckoutPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'




const route = createBrowserRouter([{path:'/',element:<App/>,children:[
  {path:'/',element: (
    <>
      <IndexCarosel/>
      <ProductPageIntro/>
      <FeatureProducts/>
      <BottomCard/>
    </>
  )},
  {
    path:'/checkout-page', element:<CheckoutPage/>
  },
  {
    path:'/profile-page', element:<ProfilePage/>
  },
  {
    path:'/product-preview', element:<ProductPreview/>
  },
  {
    path:'/Bra', element:<BraPage/>
  },
  {
    path:'*', element:<NotFoundPage/>
  }
]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
