import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './ReduxStore/CartSlice';

const Cart = () => {
 const productCart = useSelector(state=>state.cart)
 const dispatch = useDispatch();
 const removeItem =(id) =>{
  return dispatch(remove(id))
 } 
 console.log(productCart);
 
 return (
    <div className='card-container'>
    {productCart.map((d,i) => (
    <div className="card" >
  <img src={d.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{d.name}</h5>
    <p className="card-text">price={d.price}</p>
    <button href="#" className="btn btn-primary" onClick={()=> removeItem(d.id)}>Remove</button>
  </div>
</div>

    )
  )
}
    </div>
  )
}

export default Cart
