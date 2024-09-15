
const RestaurantCard=({
  name,
  locality,
  cuisines,
  areaName,
  cloudinaryImageId,
  sla,
  costForTwoString,
  avgRating})=>{
  return(
      <div className="res-card">
      <img className="res-img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.slice(0,5).join(',')}</h4>
      <h4 style={{color:"green"}}>{locality +" "+areaName }</h4>
      <span>
      <h4><i class="fa-solid fa-star"></i>
       {avgRating}
      </h4>
      <h4>{sla.slaString}</h4>
       <h4>{costForTwoString}</h4>
      </span>
      </div>
  );
}
export default RestaurantCard;