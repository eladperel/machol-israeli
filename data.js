// Default data – loaded if localStorage is empty
const DEFAULT_DATA = {
  schedule: [
    {
      id: "sun", dayName: "יום ראשון", dayShort: "ראשון", letter: "א",
      location: "", paymentUrl: "", paymentLabel: "תשלום לשיעור",
      classes: [
        { name: "מחול ישראלי למתחילים", time: "19:00", topic: "" },
        { name: "מחול ישראלי מתקדמים", time: "20:15", topic: "" },
        { name: "ריקוד חברתי חופשי",   time: "21:30", topic: "" }
      ]
    },
    {
      id: "tue", dayName: "יום שלישי", dayShort: "שלישי", letter: "ג",
      location: "", paymentUrl: "", paymentLabel: "תשלום לשיעור",
      classes: [
        { name: "ריקודי עם – כל הרמות",  time: "19:30", topic: "" },
        { name: "מחול מזרחי ופולקלור",   time: "20:45", topic: "" },
        { name: "חזרות קבוצה מתקדמת",   time: "22:00", topic: "" }
      ]
    },
    {
      id: "thu", dayName: "יום חמישי", dayShort: "חמישי", letter: "ה",
      location: "", paymentUrl: "", paymentLabel: "תשלום לשיעור",
      classes: [
        { name: "שיעור נושא – ריקוד חדש",     time: "19:00", topic: "" },
        { name: "חזרות על ריקודים ישנים",      time: "20:00", topic: "" },
        { name: "ריקוד חברתי פתוח לכולם",     time: "21:00", topic: "" }
      ]
    }
  ],
  videos: [
    { id: "v1", title: "הכנס שם ריקוד 1", youtubeId: "dQw4w9WgXcQ", category: "beginner" },
    { id: "v2", title: "הכנס שם ריקוד 2", youtubeId: "dQw4w9WgXcQ", category: "advanced" },
    { id: "v3", title: "הכנס שם ריקוד 3", youtubeId: "dQw4w9WgXcQ", category: "folk" },
    { id: "v4", title: "הכנס שם ריקוד 4", youtubeId: "dQw4w9WgXcQ", category: "beginner" },
    { id: "v5", title: "הכנס שם ריקוד 5", youtubeId: "dQw4w9WgXcQ", category: "advanced" },
    { id: "v6", title: "הכנס שם ריקוד 6", youtubeId: "dQw4w9WgXcQ", category: "folk" }
  ],
  events: [
    { id: "e1", title: "הכנס שם האירוע הראשון",  day: "28", month: "יוני",   time: "20:00", location: "", type: "ערב ריקוד",   registerUrl: "" },
    { id: "e2", title: "הכנס שם האירוע השני",    day: "12", month: "יולי",   time: "18:30", location: "", type: "סדנה מיוחדת", registerUrl: "" },
    { id: "e3", title: "הכנס שם האירוע השלישי",  day: "3",  month: "אוגוסט", time: "21:00", location: "", type: "מופע",        registerUrl: "" }
  ]
};

function loadData() {
  try {
    const raw = localStorage.getItem("danceData");
    return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}

function saveData(data) {
  localStorage.setItem("danceData", JSON.stringify(data));
}
