import { fetchCategoty } from "@/actions/actions";

import Item from "../../../../../../Components/modules/Card";
import Category, {
  CategoryBySubServiceType,
  CategoryType,
} from "@/models/Category";
import connectDB from "@/utils/connectDB";
import Service from "@/models/Service";

interface PropsInterface {
  params: { serviceId: string };
}

const Servicedetials = async ({ params }: PropsInterface) => {
  await connectDB();
  const service = await Service.findById(params.serviceId);
  if (!service) return <h1>سرویس مورد نظر یافت نشد</h1>;

  return (
    <div className="p-4 px-10">
      {service ? (
        <div>
          <h4 className="font-bold text-xl">نام سرویس: {service.faName}</h4>
        </div>
      ) : (
        <span>در گرفتن اطلاعات سرویس مشکلی پیش امد</span>
      )}
    </div>
  );
};

export default Servicedetials;
