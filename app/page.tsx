import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import Image from "next/image";
import ProductsList from "./_components/products-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/images/banner-pizza.png"
          alt="banner"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="pt-6 ">
        <div className="px-5 flex justify-between items-center">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
            Ver todos
            <ChevronRightIcon size={16}/>
           </Button>
        </div>
        <ProductsList />
      </div>
    </>
  );
};
export default Home;
