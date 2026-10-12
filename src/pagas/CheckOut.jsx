import React, { useState } from 'react'
import { Package, MapPin, Zap } from 'lucide-react'
import { useCart } from '../context/CartContext'
import OrderConfarmation from '../pagas/OrderConfarmation'
import { Link } from 'react-router-dom'
const CheckOut = () => {
  const { cartTotal, clearCart, cart } = useCart()
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true)
  }
  console.log("shipilng deta", deliveryDetails)
  if (isConfirmed) return <OrderConfarmation deliveryDetails={deliveryDetails} />
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <h2 className='text-5xl font-extrabold text-white mb-10 tracking-tight'>finalize Order</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800'>
            <h3 className='text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4 '>
              <MapPin className='w-7 h-7 text-orange-500' />
              <span>Shoping information</span>
            </h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className='block text-sm font-semibold text-gray-300 capitalize mb-1'>
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    required
                    className='mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500'
                  />
                </div>
              ))}
              <div className='pt-6'>
                <button
                  type='submit'
                  className=' w-full py-4 bg-orange-600 text-white font-bold rounded-full flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wider uppercase'>
                  {/* <Zap className='w-5 h-5 ' /> */}
                  <span >Pay & Confirm Order(₹{cartTotal.toFixed(2)})</span>
                </button>

              </div>
            </form>
          </div>
          {/* Order summary in checkout */}

          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl border-1-4 sticky top-20 h-fit border-gray-800">

            <h3 className="text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
              <Package className="w-6 h-6 text-orange-400" />
              <span>Summary</span>
            </h3>

            <div className='space-y-4 text-gray-400'>
              {cart.map((item) => (
                <div key={item.id} className='flex justify-between text-base border-b border-gray-800 pb-2'>
                  <span className='trucate text-gray-300'>{item.name}</span>
                  <span className='font-medium text-orange-300'>{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="space-y-4 text-gray-400 ">
                <div className="flex justify-between text-xl">
                  <span>Sub Total</span>
                  <span className="font-semibold text-white">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span>Shiping (Express) : </span>
                  <span className="font-semibold text-green-400">free</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-gray-700 ">
                  <span className="text-2xl font-extrabold text-white">Total Due : </span>
                  <span className="font-semibold text-green-400">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CheckOut