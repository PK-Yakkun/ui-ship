import MainContents from "@/components/ui-ship/MainContents";
import MenuButton from "@/components/ui-ship/MenuButton";
import SideMenu from "@/components/ui-ship/SideMenu";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block md:hidden p-6">
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContents>{children}</MainContents>
    </>
  );
}

export default Layout;
