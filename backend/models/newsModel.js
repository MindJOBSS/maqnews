import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true
    },
    count: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    }
  },
  { timestamps: true }
);

export const News = mongoose.model("news" , newsSchema);
