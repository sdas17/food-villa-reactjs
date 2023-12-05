
import {IMAGE_CDN_URL} from "../config"

const RestrauntCard = ({
    name,
    cloudinaryImageId,
    area,
    cuisines,
    lastMileTravelString,
    costForTwoString,
    address,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMAGE_CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="ratings">
          <p>{name}</p> 
          <p style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
        </div>
        <p>{costForTwoString}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{lastMileTravelString} minutes</p>
      </div>
    );
  };
  export default RestrauntCard;