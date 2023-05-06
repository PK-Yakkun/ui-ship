import Link from "next/link";
import { useEffect, useState } from "react";
import { componentList } from "@/lib/componentList";

interface SideMenuProps {
  list: string[];
}

function SideMenu() {
  const [selectedName, setSelectedName] = useState<string>("");
  const [menuItems, setMenuItems] = useState<string[]>([]);

  useEffect(() => {
    setMenuItems(componentList.list);
  }, []);
  return (
    <menu className="w-72 min-h-screen bg-primary p-3">
      <h1 className="p-3 mb-3">UI Ship</h1>
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
              <span className="block py-1 px-3">{componentName}</span>
            </Link>
          </li>
        ))}
      </ol>
    </menu>
  );
}

export default SideMenu;
