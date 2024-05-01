import ProductItem from "./product-item";
import { db } from "./_lib/prisma";

const ProductsList = async () => {
    const products = await db.product.findMany({
        where: {
            discountPercentage: {
                gt: 0
            }
        },
        take: 10,
        include: {
            restaurant: {
                select: {
                    name: true
                }
            }
        }
    })

    return ( 
     <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 px-5 pt-6">
        {products.map((product) => (
         <ProductItem key={product.id} product={product}/>
       ))}
     </div>
     );
}
 
export default ProductsList;