import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from './ReduxStore/CartSlice';

const Card = () => {
  const dispatch = useDispatch();
  // const addToCart = (product) =>{
  //     dispatch(add(product))
  // }
  return (
    <>
    <div className='card-container'>
    {data.map((d) => (
    <div className="card" >
  <img src={d.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{d.name}</h5>
    <p className="card-text">price={d.price}</p>
    <button href="#" className="btn btn-primary"  onClick={()=>dispatch(add(d))}>Add to cart</button>
  </div>
</div>

    )
  )
}
    </div>
     
    </>
  )
}
const data = [
  { 
    id: 1,
    name: `Burger`,
    img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    price: 1700,
  },
  {
    id: 2,
    name: ` Pizza`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSmn0XG0T3chmzRFSh2pKMFD5_ALy3xl5bmtbNKf_4g&s",
    price: 1200,
  },
  {
    id: 3,
    name: `Icecream`,
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg",
    price: 900,
  }


];

export default Card
