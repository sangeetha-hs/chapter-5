import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utilis/mockData";

const Body = () => {
//local  state variable=super powerful variable

 
const [listOfRestuarant,setListOfRestuarant]=useState(resList);


 return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
           
           //setListOfRestuarant()
            
            const filteredList=listOfRestuarant.filter(
              (res)=>res.info.avgRating > 4.3
              
              
               );
               setListOfRestuarant(filteredList);
        
          }}
          >
            Top Rated Restaurants</button>
            
        </div>
        <div className="res-container">
          {
            listOfRestuarant?.map((restaurant)=>{
              return <RestaurantCard  key={restaurant?.info?.id}resData={restaurant}/>
            })
          }
        </div>
  
      </div>
    )
  }


export default Body;  



