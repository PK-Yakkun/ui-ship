import Link from "next/link";
import { useState } from "react";

interface sideMenuItem {
  component: string;
}

const sideMenuItems: sideMenuItem[] = [
  {
    component: "Button",
  },
  {
    component: "ScrollLine",
  },
  {
    component: "SvgIcon",
  },
];

function SideMenu() {
  const [selectedName, setSelectedName] = useState<string>("");

  return (
    <menu className="w-72 min-h-screen bg-primary p-3">
      <h1 className="p-3 mb-3">UI Ship</h1>
      <ol>
        {sideMenuItems.map((item, index) => (
          <li
            key={index}
            className={`rounded-md overflow-hidden transition duration-300 ${
              item.component === selectedName ? "bg-tertiary" : ""
            } hover:opacity-70`}
            onClick={() => setSelectedName(item.component)}
          >
            <Link href={`/components/${item.component}`} passHref>
              <span className="block py-1 px-3">{item.component}</span>
            </Link>
          </li>
        ))}
      </ol>
    </menu>
  );
}

export default SideMenu;
