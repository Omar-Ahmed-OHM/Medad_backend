import mongoose from "mongoose"

const zekrSchema = new mongoose.Schema({
   category: {
      type: String,
      enum: ["morning", "evening"],
      required: true
   },

   text: {
      type: String,
      required: true
   },

   repeat: {
      type: Number,
      default: 1
   },

   benefit: {
      type: String
   }

}, {
   timestamps: true
})

export default mongoose.model("Zekr", zekrSchema)