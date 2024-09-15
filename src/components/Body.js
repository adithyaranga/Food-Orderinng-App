
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./Restaurantapi";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
// let ListOfrestaurant=restaurantList;

//react hooks=>react state variable =>usestate()
const Body=()=>{
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");


useEffect(() => {
  fetchData();
}, []);


const fetchData = async () => {
   const SWIGGY_API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4989195&lng=78.3926882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const SWIGGY_REST_API_PATH = `data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants`;

    const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];

    setListOfRestraunt(restaurants);
    setFilteredRestaurant(restaurants);
};

if(listOfRestaurants.length===0){
    return <Shimmer/>
}

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                <input
            type="text"
            className="search-box"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
        

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
                Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    //write filter logic ,filter rating>4
                    const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.avgRating>=4.4);
                    setFilteredRestaurant(filteredRestaurant);
                    
                }}>Top-rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(
                 (restaurant)=>(
                         <Link
                         key= {restaurant.info.id}
                        to={"/restaurants/"+restaurant.info.id}

                         >
                        <RestaurantCard
                        key={restaurant?.info?.id}
                        {...restaurant.info}/>
                        </Link>
                     
                    ))}
            </div>

        </div>
    )
}
export default Body