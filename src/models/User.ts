import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    mobile: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
      reqired: true,
    },
    fullName: String,
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: { type: Number }, //GEN Code
    verificationCodeExpiresAt: { type: Date }, // new Date(Date.now() + 10 * 60 * 1000), => for 10 min
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
