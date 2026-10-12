
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './pagas/ProductList'
import Cart from './pagas/Cart'
import CheckOut from './pagas/CheckOut'
import ProductDetails from './pagas/ProductDetails'
import Footer from './components/Footer'
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        <div className='min-h-screen bg-gray-950 font-sans text-white '>
          <Navbar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
