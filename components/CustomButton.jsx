import Link from "next/link";
import React from "react";

const CustomButton = ({ className, text, link = "#" }) => {
  return (
    <Link href={link} className="w-fit">
      <button
        className={`${className} py-4 px-8 bg-dark text-white rounded-full`}
      >
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
