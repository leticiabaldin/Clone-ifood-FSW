import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_components/_lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: {
        id: string;
    }
}

const ProdcutPage = async ({params: {id}}: ProductPageProps) =>  {
    const product = await db.product.findUnique({
        where: {
            id,
        }
     });

    if(!product) {
        return notFound();
    }
    
   return(
    <div className="relative w-full h-[360px]">
        <Image src={product.imageUrl} alt="image" 
        fill 
        className="object-cover"/>

        <Button className="absolute left-2 top-2 rounded-full bg-white text-foreground" size="icon">
            <ChevronLeftIcon/>
        </Button>
    </div>
   );
};
 
export default ProdcutPage;