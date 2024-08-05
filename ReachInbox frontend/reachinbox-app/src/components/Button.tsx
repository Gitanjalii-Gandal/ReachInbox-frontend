import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
