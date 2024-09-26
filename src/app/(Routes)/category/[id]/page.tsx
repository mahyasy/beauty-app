import { fetchCategoty } from "@/actions/actions";
import Card from "@/Components/modules/Card";

import Category, {
  CategoryBySubServiceType,
  CategoryType,
} from "@/models/Category";
import connectDB from "@/utils/connectDB";
import mongoose from "mongoose";
// import ServiceItem from "../../ServiceItem";

interface PropsInterface {
  params: { id: string };
}

const CategoryDetials = async ({ params: { id } }: PropsInterface) => {
  await connectDB();
  const category: CategoryBySubServiceType[] | null = await Category.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "services",
        foreignField: "category",
        localField: "_id",
        as: "subServices",
      },
    },
    {
      $lookup: {
        from: "categories",
        foreignField: "parentCategory",
        localField: "_id",
        as: "subCategories",
      },
    },
  ]);
  console.log(category);
  if (!category) return <h1>دسته بندی مورد نظر یافت نشد</h1>;

  return (
    <div className="p-4 px-10">
      {category ? (
        <div>
          <h4 className="font-bold text-xl">
            نام دسته بندی: {category[0].faName}
          </h4>
        </div>
      ) : (
        <span>در گرفتن اطلاعات دسته بندی مشکلی پیش امد</span>
      )}

      <div className="my-10">
        <h5 className="text-xl">زیر دسته :</h5>
        <div className="flex flex-wrap ">
          {category[0].subCategories.length === 0 && (
            <h5>زیر دسته ای موجود نیست</h5>
          )}
          {category[0].subCategories.map((item: CategoryType) => (
            <Card key={item._id as string} item={item} />
          ))}
        </div>

        <h5 className="text-xl">سرویس ها :</h5>
        <div className="flex flex-wrap ">
          {category[0].subServices.length === 0 && (
            <h5>سرویسی در این دسته بندی موجود نیست</h5>
          )}
          {category[0].subServices.map((item) => (
            <Card key={item._id as string} item={item} isCategory={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetials;
