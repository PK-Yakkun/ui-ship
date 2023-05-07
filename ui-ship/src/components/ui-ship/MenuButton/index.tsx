import MenuIcon from "../Icons/MenuIcon";

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
  return (
    <button
      className=" p-2 rounded-md border solid border-tertiary"
      onClick={() => setIsOpen(!isOpen)}
    >
      <MenuIcon />
    </button>
  );
}

export default MenuButton;
