import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between pt-6 px-5">
      <Image src="/assets/images/logo.png" alt="Fsw food" height={30} width={100} />
      <Button size="icon" variant="outline" className="bg-transparent border-none"></Button>
      <MenuIcon/>
    </div>
  );
};

export default Header;
