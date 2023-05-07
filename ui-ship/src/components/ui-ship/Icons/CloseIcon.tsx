import Image from "next/image";
import path from "/public/svg/close.svg";

function CloseIcon() {
  return <Image priority src={path} alt="close" />;
}

export default CloseIcon;
