import React, { useState } from "react";

type DropdownProps = {
  title: string;
  items: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen(!open)} className="font-bold">
        {title} &#9662;
      </button>
      {open && (
        <ul className="absolute bg-white shadow-lg rounded-lg py-2 w-40">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-200">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;