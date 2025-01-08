
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './componenets/Footer'

function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Whislist' element={<Whishlist/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/:id/View' element={<View/>} />
      <Route path='/*' element={<Pnf/>} />
   </Routes>
   
    {/* footer */}
    <Footer/>
    </>
  )
}

export default App
