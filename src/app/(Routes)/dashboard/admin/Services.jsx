import React from "react";
import Item from "./Item";

const Services = ({ service, setService }) => {
  console.log(service.data, "gets in second page");
  return (
    <div className="flex justify-between flex-wrap">
      {service.data?.map((item, index) => (
        <Item key={index} item={item} setService={setService} />
      ))}
    </div>
  );
};

export default Services;
