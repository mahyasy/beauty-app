"use client";

import { useState } from "react";
import CategoryForm from "./CategoryForm";
import ServicesForm from "./ServicesForm";

type State = "category" | "service";

const FormSection = ({ categories, allCategories }) => {
  const [state, setState] = useState<State>("category");

  const handler = (type: "category" | "service") => {
    console.log(type);
    if (type === "category") {
      setState("category");
    } else {
      setState("service");
    }
  };

  return (
    <div className="px-3">
      <div className="py-4 flex justify-center items-center">
        <button
          onClick={() => handler("category")}
          className={`py-1 px-2 rounded-md mx-3 hover:border-blue-400 border-2 border-transparent transition-all  ${
            state === "category" ? "bg-blue-400 text-white" : "bg-white"
          }`}
        >
          فرم دسته بندی
        </button>
        <button
          onClick={() => handler("service")}
          className={`py-1 px-2 rounded-md  mx-3 hover:border-blue-400 border-2 border-white border-transparent transition-all ${
            state === "service" ? "bg-blue-400 text-white" : "bg-white"
          }`}
        >
          فرم سرویس
        </button>
      </div>
      <div className="flex justify-center items-center">
        {state === "category" && (
          <CategoryForm category={JSON.parse(JSON.stringify(categories))} />
        )}
        {state === "service" && (
          <ServicesForm category={JSON.parse(JSON.stringify(allCategories))} />
        )}
      </div>
    </div>
  );
};

export default FormSection;
