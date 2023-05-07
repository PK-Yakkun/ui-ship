import "../styles/globals.css";
import SideMenu from "@/components/ui-ship/SideMenu";
import MainContents from "@/components/ui-ship/MainContents";
import MenuButton from "@/components/ui-ship/MenuButton";
import { useState } from "react";

function MyApp({ Component, pageProps }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="text-md md:text-sm md:flex text-typography">
      <div className="block md:hidden p-6">
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContents>
        <Component {...pageProps} />
      </MainContents>
    </div>
  );
}

export default MyApp;
