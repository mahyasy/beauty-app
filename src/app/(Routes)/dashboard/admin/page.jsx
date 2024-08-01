"use client";

import { useState, useEffect } from "react";
import Forms from "./Forms";
import Services from "./Services";
import DetailFrom from "./DetailFrom";

export default function Admin() {
  const [service, setservice] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setservice(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row-reverse justify-around md:items-start">
      <DetailFrom service={service} />
      <Services service={service} setService={setservice} />
    </div>
  );
}
