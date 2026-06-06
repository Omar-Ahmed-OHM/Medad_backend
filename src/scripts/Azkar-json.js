import dotenv from 'dotenv';
import dbconnection from '../config/db.js';
import Zekr from '../models/Zekr.js';
dotenv.config();
await dbconnection();
const azkar =[
  {
    "id": "m1",
    "category": "morning",
    "text": "أصبحنا وأصبح الملك لله والحمد لله لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
    "repeat": 1,
    "benefit": "ذكر التوحيد والشكر"
  },
  {
    "id": "m2",
    "category": "morning",
    "text": "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور",
    "repeat": 1,
    "benefit": "التوكل على الله"
  },
  {
    "id": "m3",
    "category": "morning",
    "text": "أصبحنا على فطرة الإسلام وعلى كلمة الإخلاص وعلى دين نبينا محمد ﷺ",
    "repeat": 1,
    "benefit": "تثبيت الفطرة"
  },
  {
    "id": "m4",
    "category": "morning",
    "text": "رضيت بالله رباً وبالإسلام ديناً وبمحمد ﷺ نبياً",
    "repeat": 3,
    "benefit": "سبب لدخول الجنة"
  },
  {
    "id": "m5",
    "category": "morning",
    "text": "اللهم إني أصبحت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك",
    "repeat": 4,
    "benefit": "شهادة التوحيد"
  },
  {
    "id": "m6",
    "category": "morning",
    "text": "اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر",
    "repeat": 1,
    "benefit": "شكر النعم"
  },
  {
    "id": "m7",
    "category": "morning",
    "text": "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم",
    "repeat": 7,
    "benefit": "كفاية العبد"
  },
  {
    "id": "m8",
    "category": "morning",
    "text": "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
    "repeat": 3,
    "benefit": "الحفظ من الأذى"
  },
  {
    "id": "m9",
    "category": "morning",
    "text": "أعوذ بكلمات الله التامات من شر ما خلق",
    "repeat": 3,
    "benefit": "تحصين"
  },
  {
    "id": "m10",
    "category": "morning",
    "text": "أستغفر الله وأتوب إليه",
    "repeat": 100,
    "benefit": "مغفرة الذنوب"
  },
  {
    "id": "m11",
    "category": "morning",
    "text": "سبحان الله وبحمده",
    "repeat": 100,
    "benefit": "مغفرة الذنوب"
  },
  {
    "id": "m12",
    "category": "morning",
    "text": "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    "repeat": 33,
    "benefit": "أفضل الذكر"
  },
  {
    "id": "m13",
    "category": "morning",
    "text": "اللهم صل وسلم على نبينا محمد",
    "repeat": 10,
    "benefit": "الشفاعة"
  },
  {
    "id": "m14",
    "category": "morning",
    "text": "اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً",
    "repeat": 1,
    "benefit": "بركة اليوم"
  },
  {
    "id": "m15",
    "category": "morning",
    "text": "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين",
    "repeat": 1,
    "benefit": "تفريج الهم"
  },

  {
    "id": "e1",
    "category": "evening",
    "text": "أمسينا وأمسى الملك لله والحمد لله لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
    "repeat": 1,
    "benefit": "ذكر المساء"
  },
  {
    "id": "e2",
    "category": "evening",
    "text": "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",
    "repeat": 1,
    "benefit": "التوكل"
  },
  {
    "id": "e3",
    "category": "evening",
    "text": "أمسينا على فطرة الإسلام وعلى كلمة الإخلاص وعلى دين نبينا محمد ﷺ",
    "repeat": 1,
    "benefit": "تثبيت الإيمان"
  },
  {
    "id": "e4",
    "category": "evening",
    "text": "رضيت بالله رباً وبالإسلام ديناً وبمحمد ﷺ نبياً",
    "repeat": 3,
    "benefit": "رضا الإيمان"
  },
  {
    "id": "e5",
    "category": "evening",
    "text": "اللهم إني أمسيت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك",
    "repeat": 4,
    "benefit": "التوحيد"
  },
  {
    "id": "e6",
    "category": "evening",
    "text": "اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر",
    "repeat": 1,
    "benefit": "شكر النعم"
  },
  {
    "id": "e7",
    "category": "evening",
    "text": "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم",
    "repeat": 7,
    "benefit": "الكفاية"
  },
  {
    "id": "e8",
    "category": "evening",
    "text": "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
    "repeat": 3,
    "benefit": "الحفظ"
  },
  {
    "id": "e9",
    "category": "evening",
    "text": "أعوذ بكلمات الله التامات من شر ما خلق",
    "repeat": 3,
    "benefit": "تحصين"
  },
  {
    "id": "e10",
    "category": "evening",
    "text": "أستغفر الله وأتوب إليه",
    "repeat": 100,
    "benefit": "مغفرة"
  },
  {
    "id": "e11",
    "category": "evening",
    "text": "سبحان الله وبحمده",
    "repeat": 100,
    "benefit": "مغفرة الذنوب"
  },
  {
    "id": "e12",
    "category": "evening",
    "text": "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    "repeat": 33,
    "benefit": "أفضل الذكر"
  },
  {
    "id": "e13",
    "category": "evening",
    "text": "اللهم صل وسلم على نبينا محمد",
    "repeat": 10,
    "benefit": "الشفاعة"
  },
  {
    "id": "e14",
    "category": "evening",
    "text": "اللهم إني أسألك خير هذه الليلة وخير ما بعدها وأعوذ بك من شرها وشر ما بعدها",
    "repeat": 1,
    "benefit": "حفظ الليل"
  },
  {
    "id": "e15",
    "category": "evening",
    "text": "اللهم قني عذابك يوم تبعث عبادك",
    "repeat": 1,
    "benefit": "الأمان من العذاب"
  }
]

await Zekr.insertMany(azkar);
process.exit();