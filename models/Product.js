import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  //   title: {
  //     types: String,
  //     required: true,
  //     maxlength: 60,
  //   },
  //   desc: {
  //     type: String,
  //     required: true,
  //     maxlenght: 200,
  //   },
  //   img: {
  //     type: String,
  //     required: true,
  //     maxlenght: 200,
  //   },
  //   price: {
  //     type: [Number],
  //     required: true,
  //   },
  //   extraOptions: {
  //     type: [
  //       {
  //         text: { type: String, required: true },
  //         price: { type: Number, required: true },
  //       },
  //     ],
  //   },
  // },
  // { timestamps: true }
});

export default models.Product || model("Product", ProductSchema);
