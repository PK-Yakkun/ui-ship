import CloseIcon from "../Icons/CloseIcon";

interface CloseButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function CloseButton({ isOpen, setIsOpen }: CloseButtonProps) {
  return (
    <button
      className="p-2 rounded-md border solid border-[#fff]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
