import React from 'react'
import Header from '../componenets/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'350px'} height={'200px'}  src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
        <div>
          <h3 className='font-bold'>PID : id</h3>
          <h1 className='text-5xl font-bold'>Product Name</h1>
          <h4 className='font-bold text-red-600 2xl'>$ 250</h4>
          <h4>Category : category</h4>
          <p>
            <span className='font-bold'>Description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio tempore odio officiis eveniet aperiam repudiandae, error unde vel natus aspernatur, sed maiores voluptas suscipit quam dolores rem magnam fugiat!
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to cart</button>
            </div>
          </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default View

 