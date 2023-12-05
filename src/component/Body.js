import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterdatademo(searchText,filterdata){
    // return   filterdata.filter((filterdata)=>filterdata.data.name.includes(searchText));
    if (searchText.trim() === "") {
        return filterdata; 
      }
    const data = filterdata.filter((filterdata) => {
        return filterdata.data.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      console.log(data);
      console.log(restaurantList);
    
      return data;



  }

const Body = () => {
    
      
  const [searchText, setSearchText] = useState("");
  const [filterdata,setfilterdata]=useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={(e)=>{
                const data= filterdatademo(searchText,filterdata);
                setfilterdata(data);
            }}
           
          >
            Search
          </button>
        </form>
      </div>

      <div className="restaurant-list">
        {filterdata.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
