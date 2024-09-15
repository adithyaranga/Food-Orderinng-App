import React from 'react'
import Shimmer from './Shimmer';
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
    const[Restinfo,setRestinfo]=useState(null);
    //useEffect hook fetch from api
    const { resId } = useParams();
    useEffect(()=>{
         fetchRestMenu();
    },[]
    );
    const Menu_Api=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4989195&lng=78.3926882&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const fetchRestMenu=async ()=>{
        const data= await fetch(Menu_Api);
        const json=await data.json();
        console.log(json);
        setRestinfo(json.data);
        //data?.cards[2]?.card?.card?.inf0
    };
    if(Restinfo===null)return <Shimmer/>
//destructing
  
   const {name,cuisines,cloudinaryImageId,avgRating}=Restinfo?.cards[2]?.card?.card?.info;
   const { itemCards } =
    Restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
  return (
    <div className='menu-container'>
      <h1>{name}</h1>
      <img className="res-menu-img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
       <h2 >Menu Items</h2>
       <div className='menu-items'>
         {itemCards.map((item) => (
          <div className="menu-card"key={item.card.info.id}>
            <div>
              <h4 style={{color:"green"}}>{item.card.info.name}</h4>
              <h3>
                ₹
                {item.card.info.price / 100 || item.card.info.defaultPrice / 100||
                 0}
              </h3>
            </div>
            <div>
              <img className='menu-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ item.card.info.imageId} alt="Menu Info" />
            </div>
          </div>
        ))}

       </div>
    </div>
  )
}

export default RestaurantMenu
