import React from "react";
import './Buton.css';


interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <>
      <button className="custom-css" onClick={parentMethod}>
        {label}
      </button>
    </>
  );
};

