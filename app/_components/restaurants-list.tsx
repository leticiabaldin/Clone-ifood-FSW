import RestaurantItem from "./restaurant-item";
import { db } from "./_lib/prisma";

const RestaurantsList = async ()  => {
//TODO: pegar restaurantes com maior numero de pedidos
const restaurants = await db.restaurant.findMany({
    take: 10,
})

    return ( 
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 px-5 pt-6">
        {restaurants.map((restaurant) => (
         <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
       ))}
     </div>
     );
}
 
export default RestaurantsList;