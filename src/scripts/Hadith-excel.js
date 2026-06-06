import xlsx from "xlsx";
import dbconnection from "../config/db.js"
import Hadith from "../models/Hadith.js" 
import dotenv from "dotenv";
dotenv.config();
await dbconnection();

// read excel
const filePath = "C:\\Users\\omar.ahmed\\Downloads\\HadeethEnc.com_ar-v1.7.0.xlsx";

const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data = xlsx.utils.sheet_to_json(sheet, {
  defval: "",
  header: 1
});

// clean
const cleaned = data
  .slice(1)
  .filter(row => typeof row[0] === "number")
  .map((row) => 
    ({
    id: row[0],
    title: row[1],
    text: row[2],
    explanation: row[3],
    benefits: row[4],
    grade: row[5],
    takhrij: row[6],
    link: row[7],
  }));
// insert into DB
await Hadith.insertMany(cleaned);

process.exit();