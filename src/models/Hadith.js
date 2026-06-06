import mongoose from 'mongoose';
const HadithSchema = new mongoose.Schema({

    id: Number,
    title: {
        type: String,
        required: true
    },
    text: String,
    explanation: String,
    benefits: String,
    grade: String,
    takhrij: String,
    link: String
}, {
    timestamps: true
});
HadithSchema.index({
  title: "text",
  text: "text",
  explanation: "text",
  benefits: "text",
  takhrij: "text"
});
export default mongoose.model('Hadith', HadithSchema);