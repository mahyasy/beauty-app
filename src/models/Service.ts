import { models, model, Schema, InferSchemaType, Types } from "mongoose";

// const typeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   faName: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//   },
//   description: String,
// });

// const subsetSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   faName: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   price: Number,
//   type: [typeSchema],
// });

// const serviceSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   faName: {
//     type: String,
//     required: true,
//   },
//   src: String,
//   image: String,
//   subset: {
//     type: [subsetSchema],
//   },
// });

const serviceSchema = new Schema(
  {
    name: { type: String, required: true },
    faName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: false },
    images: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    subServices: [{ type: Schema.Types.ObjectId, ref: "Service" }],
    duration: { type: Number, required: true }, // in minutes
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Service = models.Service || model("Service", serviceSchema);

type ServiceType = InferSchemaType<typeof serviceSchema> & {
  _id: string | Types.ObjectId;
};

export default Service;
export type { ServiceType };
