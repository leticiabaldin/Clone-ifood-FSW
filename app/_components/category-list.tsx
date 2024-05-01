import CategoryItem from "./category-item";
import { db } from "./_lib/prisma";

const CategoryList = async () => {
    const categories = await db.category.findMany({});

    //pegar as categorias do bd
    //renderizar os itens para cada categoria
    return (
   <div className="grid grid-cols-2 gap-3">
    {categories.map((category) => (
       <CategoryItem key={category.id} category={category}/>
    ))}
   </div>
    );
}
 
export default CategoryList;