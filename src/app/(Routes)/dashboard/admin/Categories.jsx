import React from "react";
import Item from "./Item";

const Categories = ({ service}) => {
  return (
    <div className="flex justify-between flex-wrap">
      {service.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default Categories;
