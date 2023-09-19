import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Live",
  "Soccer",
  "Cricket",
  "Gaming",
  "Songs",
  "News",
  "Cooking",
  "Valentines",
  "Vastu",
  "Mixes",
  "Javascript",
  "Sales",
  "Drama",
];
const ButtonList = () => {
  return (
    <div className="flex w-[75rem] no-scrollbar overflow-x-auto whitespace-nowrap">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
