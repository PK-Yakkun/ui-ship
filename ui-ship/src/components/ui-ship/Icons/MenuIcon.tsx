import Image from "next/image";
import path from "/public/svg/menu.svg";

function MenuIcon() {
  return <Image priority src={path} alt="menu" />;
}

export default MenuIcon;
