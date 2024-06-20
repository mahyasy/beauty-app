import { model, models, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    faName: { type: String, required: true },
    description: { type: String, required: true },
    images: [{type: String}],
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);
export default Category;
