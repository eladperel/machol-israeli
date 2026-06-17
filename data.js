// Default data – loaded if localStorage is empty
const DEFAULT_DATA = {"schedule":[{"id":"sun","dayName":"יום ראשון","dayShort":"ראשון","letter":"א","location":"אולם הספורט באוניברסיטת חיפה","classes":[{"name":"סדנת זוגות למשתלבים","time":"19:00","topic":"אהבה כזו"},{"name":"סדנת מעגלים","time":"19:50","topic":""},{"name":"זוגות מתקדמים","time":"20:40","topic":""},{"name":"מעגלים מתקדמים","time":"21:20","topic":""},{"name":"זוגות עד הסוף","time":"22:00","topic":""}],"paymentUrl":"https://mrng.to/3gMHHh5yZ1","paymentLabel":"רכישת כרטיס דיגיטלי מראש","subtitle":"זוגות ומעגלים באוניברסיטת חיפה"},{"id":"tue","dayName":"יום שלישי","dayShort":"שלישי","letter":"ג","location":"בית הסטודנט - אוניברסיטת חיפה","classes":[{"name":"סדנת מעגלים למתחילים","time":"19:00","topic":""},{"name":"סדנת מעגלים למשתלבים","time":"19:45","topic":""},{"name":"סדנת שורות","time":"20:30","topic":""},{"name":"מעגלים מתקדמים","time":"21:00","topic":""}],"paymentUrl":"","paymentLabel":"תשלום לשיעור","subtitle":"מעגלים ושורות באוניברסיטת חיפה"},{"id":"thu","dayName":"יום חמישי","dayShort":"חמישי","letter":"ה","location":"","classes":[{"name":"שיעור נושא – ריקוד חדש","time":"19:00","topic":""},{"name":"חזרות על ריקודים ישנים","time":"20:00","topic":""},{"name":"ריקוד חברתי פתוח לכולם","time":"21:00","topic":""}],"paymentUrl":"","paymentLabel":"תשלום לשיעור","subtitle":"זוגות ומעגלים בטכניון"}],"videos":[{"id":"v1781687465379","title":"ואי ואי ואי","youtubeId":"GlywEFewGWg","category":"beginner","danceForm":"circle"},{"id":"v1781707756797","title":"אהבה כזו","youtubeId":"v6zU84hCdv0","category":"beginner","danceForm":"couples"}],"events":[{"id":"e1","title":"הכנס שם האירוע הראשון","day":"28","month":"יוני","time":"20:00","location":"","type":"ערב ריקוד","registerUrl":""},{"id":"e2","title":"הכנס שם האירוע השני","day":"12","month":"יולי","time":"18:30","location":"","type":"סדנה מיוחדת","registerUrl":""},{"id":"e3","title":"הכנס שם האירוע השלישי","day":"3","month":"אוגוסט","time":"21:00","location":"","type":"מופע","registerUrl":""}]};

function loadData() {
  try {
    const raw = localStorage.getItem("danceData");
    return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch { return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}

function saveData(data) {
  localStorage.setItem("danceData", JSON.stringify(data));
}
