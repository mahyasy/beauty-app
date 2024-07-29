"use client";

import { useState, useEffect } from "react";
import Forms from "./Forms";
import Services from "./Services";

export default function Admin() {
  const [service, setservice] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/category")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setservice(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row-reverse justify-around">
      <Forms  service={service} setService={setservice} />
      {service ? <Services service={service} setService={setservice} /> : <h2>Loading...</h2>}
    </div>
  );
}
