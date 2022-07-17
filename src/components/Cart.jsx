import React from 'react'
import '../App.css';

const Cart = ({id,r_name,image,rating}) => {
  return (
    <>
    <div className='main_div'>
 
       <div className='flex' >
      
       <div>
           <img className='main_image' src={image} alt="" />
       </div>
 
       <div>
           <h1>{r_name}</h1>
           <p>Contined,pizza,Asia,Desserts</p>
           <p>cost $ 600 for one</p>
           <div className='flex'>
              <h4>Min $50</h4>.<h4>Up to 30 min</h4>
           </div>
           
           <h4>Accepts online payement online</h4>
       </div>
 
       <div>
         <button>{rating}</button>
         <p>766 votes</p>
         <p>512 reviews</p>
       </div>
 
       </div>
 
 
       <div className='order_div'>
         <div className='flex sub_div'>
           <p>Order Online</p>
           <span>&#8594;</span>
         </div>
       </div>
 
    </div>
 
      </>
  )
}

export default Cart