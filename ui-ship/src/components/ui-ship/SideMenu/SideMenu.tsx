import Link from "next/link";

interface sideMenuItem {
  component: string;
}

const sideMenuItems: sideMenuItem[] = [
  {
    component: "sample",
  },
  {
    component: "button",
  },
  {
    component: "menu",
  },
  {
    component: "sample",
  },
  {
    component: "sample",
  },
  {
    component: "sample",
  },
];

function SideMenu() {
  return (
    <menu className="w-72 min-h-screen bg-primary p-3">
      <h1 className="p-3 mb-3">UI Ship</h1>
      <ol>
        {sideMenuItems.map((item, index) => (
          <li key={index} className="rounded-md overflow-hidden">
            <Link href={item.component} passHref>
              <span className="block py-1 px-3">{item.component}</span>
            </Link>
          </li>
        ))}
      </ol>
    </menu>
  );
}

export default SideMenu;
