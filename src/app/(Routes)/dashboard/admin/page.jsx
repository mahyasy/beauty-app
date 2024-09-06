import Categories from "./Categories";
import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";
import FormSection from "./FormSection";

export default async function Admin() {
  await connectDB();
  const categories = await Category.find();
  const filtered = categories.filter((item) => !item.parentCategory);

  return (
    <div className="flex flex-col items-center md:flex-row-reverse justify-around md:items-start" >
      <FormSection categories={JSON.parse(JSON.stringify(filtered))} allCategories={JSON.parse(JSON.stringify(categories))} />
      <div className="w-1/2">
        <div>
          <h5 className="px-4 pr-10 font-bold text-xl">دسته بندی ها:</h5>
          <Categories service={JSON.parse(JSON.stringify(filtered))} />
        </div>
      </div>
    </div>
  );
}
