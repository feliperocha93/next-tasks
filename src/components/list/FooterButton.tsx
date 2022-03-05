import { MouseEventHandler } from "react";

interface FooterButtonProps {
  isSelected?: boolean;
  className?: string;
  children: any;
  onClick: (event: any) => void;
}

function FooterButton(props: FooterButtonProps) {
  const border = props.isSelected ? 'border-b-4 border-purple-400' : '';

  return (
    <button
      onClick={props.onClick}
      className={`
        text-gray-500 font-semibold hover:text-black
        focus-outline-none
        ${border}
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}

export default FooterButton;
