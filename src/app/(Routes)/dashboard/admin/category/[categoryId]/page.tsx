import { fetchCategoty } from "@/actions/actions";

import Item from "../../Item";
import Category, {
  CategoryBySubServiceType,
  CategoryType,
} from "@/models/Category";
import connectDB from "@/utils/connectDB";
import ServiceItem from "../../ServiceItem";

interface PropsInterface {
  params: { categoryId: string };
}

const Categorydetials = async ({ params }: PropsInterface) => {
  await connectDB();
  const category = await Category.findById(params.categoryId);
  if (!category) return <h1>دسته بندی مورد نظر یافت نشد</h1>;

  const bySubServices: CategoryBySubServiceType[] | null =
    await Category.aggregate([
      { $match: { _id: category?._id } },
      {
        $lookup: {
          from: "services",
          foreignField: "category",
          localField: "_id",
          as: "subServices",
        },
      },
    ]);

  const { data, error }: { data?: CategoryType[]; error?: string } =
    await fetchCategoty(params.categoryId);

  if (error) return <h5>مشکلی در سرور رخ داد</h5>;
  return (
    <div className="p-4 px-10">
      {category ? (
        <div>
          <h4 className="font-bold text-xl">
            نام دسته بندی: {category.faName}
          </h4>
        </div>
      ) : (
        <span>در گرفتن اطلاعات دسته بندی مشکلی پیش امد</span>
      )}

      <div className="my-10">
        <h5 className="text-xl">زیر دسته :</h5>
        <div className="flex flex-wrap ">
          {data.length === 0 && <h5>زیر دسته ای موجود نیست</h5>}
          {data.map((item: CategoryType) => (
            <Item key={item._id as string} item={item} />
          ))}
        </div>

        <h5 className="text-xl">سرویس ها :</h5>
        <div className="flex flex-wrap ">
          {bySubServices[0].subServices.length === 0 && (
            <h5>سرویسی در این دسته بندی موجود نیست</h5>
          )}
          {bySubServices[0].subServices.map((item) => (
            <ServiceItem key={item._id as string} item={item} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorydetials;
