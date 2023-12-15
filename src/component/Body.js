import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [actualData, setActualData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('API IS CALLING');
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setActualData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } finally {
      setLoading(false); // Set loading to false whether successful or not
    }
  }

  const filterDataDemo = (searchText, actualData) => {
    const data = actualData.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return data;
  };

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
            onClick={(e) => {
              const data = filterDataDemo(searchText, actualData);
              setRestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="restaurant-list">
        {loading ? (
          <Shimmer />
        ) : (
          <>
            <p className="restaurant-count">{restaurants.length} restaurants.</p>
            {restaurants.length === 0 ? (
              <p style={{ textAlign: "center", fontSize: "3rem", width: "100%" }}>
                No restaurant found...
              </p>
            ) : (
              restaurants.map((restaurant) => (
                <RestrauntCard {...restaurant?.info} key={restaurant?.info?.id} />
              ))
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Body;
