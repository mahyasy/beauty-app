
import Categories from "./Categories";
import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";
import FormSection from "./FormSection";



export default async function Admin() {
  await connectDB();
  const categories = await Category.find();
  const filtered = categories.filter(item => !item.parentCategory)

  return (
    <div>
      <FormSection categories={JSON.parse(JSON.stringify(filtered))} />
      <div className="w-1/2">
        <Categories service={JSON.parse(JSON.stringify(categories))} />
      </div>
    </div>
  );
}
