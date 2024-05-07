"use client" 
//sempre que tiver qualquer interação, ex: onClick

import { Prisma, Product } from "@prisma/client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { calculateProductTotalPrice } from "../_helpers/price";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {

  return (
   <Link className="w-[150px] min-w-[150px]" href={`/products/${product.id}`}>
    <div className="space-y-2 w-full">
      {/**imagem */}
      <div className="h-[150px] w-full relative">
        <Image
          src={product.imageUrl}
          alt="image"
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/**titulo preço e restaurante */}
      <div>
        <h2 className="text-sm truncate">{product.name}</h2>
        <div className="flex gap-1 items-center">
          <h3 className="font-semibold ">
            R$
            {Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(calculateProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            //adiciona o preço sem desconto riscado
            <span className="line-through text-[#7E8392] text-xs">
              R$
              {Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(Number(product.price))}
            </span>
          )}
        </div>
      </div>

      <span className="text-muted-foreground text-xs ">
        {product.restaurant.name}
      </span>
    </div>
   </Link>
  );
};

export default ProductItem;
