import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main role='main' className='w-full h-screen bg-creamColor flex justify-center items-center'>
        <section className=' sm:w-[700px] w-[350px] bg-colorWhite rounded-lg flex flex-col sm:flex-row'>
          {/* Image side */}
          <div className=' sm:w-1/2 w-full'>
            <img src="/image-product-desktop.jpg" className='sm:rounded-l-lg  max-sm:rounded-t-lg w-full sm:h-auto h-[278px] object-cover' alt="image product"  />
          </div>
          {/* Description Side */}
          <div className=' sm:w-1/2 w-full sm:p-8 p-6 flex flex-col font-bold  sm:justify-between gap-4'>
            <p className='monts text-darkGrayishBlue tracking-[7px] text-xl font-normal'>PERFUME</p>
            <h1 className='fraunc text-4xl '>Gabrielle Essence Eau De Parfum</h1>
            <p className='text-darkGrayishBlue font-normal'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.</p>
            <div className='flex items-center gap-6'>
              <h1 className='fraunc font-bold text-3xl text-darkCyan'>$149.99</h1>
              <h2 className='fraunc text-darkGrayishBlue font-normal line-through'>$169.99</h2>
            </div>
            <a href="" className='flex  text-colorWhite bg-darkCyan py-4 justify-center rounded-lg gap-4 hover:bg-[#1A4031]'> <img className='w-5' src="/icon-cart.svg" alt="icon cart" /> Add to Cart</a>
          </div>  
        </section>
      </main>
    </>
  )
}

export default App
