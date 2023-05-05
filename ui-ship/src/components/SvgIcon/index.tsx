import Image from "next/image";
import path from "/public/svg/download.svg";

function SvgIcon() {
  return <Image priority src={path} alt="download" />;
}

export const code = `
import Image from "next/image";
import path from "/public/svg/download.svg";

function SvgIcon() {
  return <Image priority src={path} alt="download" />;
}

export default SvgIcon;
`;

export default SvgIcon;
