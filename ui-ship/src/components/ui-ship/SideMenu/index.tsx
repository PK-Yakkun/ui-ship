import Link from "next/link";
import { useEffect, useState } from "react";
import { ComponentList } from "@/lib/componentList";
import CloseButton from "../CloseButton";

const componentList = new ComponentList();
interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const [selectedName, setSelectedName] = useState<string>("");
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    const sideMenuSearchResults = componentList.sortedList.filter(
      (componentName) =>
        componentName.toLowerCase().includes(searchWord.toLowerCase())
    );
    sideMenuSearchResults.length
      ? setMenuItems(sideMenuSearchResults)
      : setMenuItems([]);
  }, [searchWord]);

  return (
    <menu
      className={`absolute top-0 left-0 z-50 md:relative w-9/12 md:w-72 min-h-screen bg-primary p-6 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mb-8 md:mb-2">
        <h1 className="text-4xl font-bold md:mb-6">
          <Link href="/">UI Ship</Link>
        </h1>
        <div className="md:hidden">
          <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div className="relative before:content-[''] before:block before:absolute before:right-[10px] before:top-[7px] md:before:top-[6px] before:w-[24px] before:h-[24px] before:bg-[url(/svg/search.svg)]">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className="w-full rounded-[100vw] py-2 px-3 mb-6 focus:outline-none"
        />
      </div>
      {menuItems.length ? (
        <ol>
          {menuItems.map((componentName, index) => (
            <li
              key={index}
              className={`rounded-md overflow-hidden transition duration-300 ${
                componentName === selectedName ? "bg-tertiary" : ""
              } hover:opacity-70`}
              onClick={() => setSelectedName(componentName)}
            >
              <Link href={`/components/${componentName}`} passHref>
                <span className="block py-2 px-3">{componentName}</span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p>No search results.</p>
      )}
    </menu>
  );
}

export default SideMenu;
