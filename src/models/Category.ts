import { model, models, Schema, InferSchemaType, Types } from "mongoose";
import { ServiceType } from "./Service";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    faName: { type: String, required: true },
    // description: { type: String, required: true },
    images: [{ type: String }],
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);

type CategoryType = InferSchemaType<typeof categorySchema> & {
  _id: string | Types.ObjectId;
};
type CategoryBySubServiceType = InferSchemaType<typeof categorySchema> & {
  _id: string | Types.ObjectId;
  subServices: ServiceType[];
};

export default Category;
export type { CategoryType };
export type { CategoryBySubServiceType };
