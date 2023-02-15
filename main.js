var n1 = 2
var n2 = 2

if (n1 == n2){
console.log("boom")
}
else{
    console.log("pew")
}

console.log(n1+n2)

console.log(n1*2,n2*5)


var שבת = 7

if(7){

console.log("happy week end")
}
else{
    console.log("lorem")
}

var sunday = 31.7
if(31.7-20.7){
    console.log("boom boom")
}
else if(2-10){
    console.log("asd")
}
else{
    console.log("pyyyk")
}
// 6. כתבו משתנה שמכיל שם של חג כ string
// אם השם הוא purim – אני אדפיס : happy purim
// אם השם הוא passover- אני אדפיס : clear home
// אם השם הוא shavoout – אני אדפיס – eat milk
// אם השם הוא suckot – אני אדפיס build sucka

let hag ="purim"

if("purim"){
    console.log("happy purim")
}
if("pesah"){
    console.log("happy pesah")

}
if("shavoout"){
    console.log("happy shavuot")


}
else if("suckot"){
    console.log("build sucka")
}
// 7. בתחרות זריקת כדור המנצח הוא מי שזורק כדור למרחק הגדול ביותר.
// הגדירו 2 שחקנים, לכל שחקן יש שם של משתנה שמכיל את שמו ושם של משתנה שמכיל את התוצאה, למשל :
// player1_name = 'shlomi'
// player1_score = 60;

// לבסוף הדפיסו את שם השחקן שזרק למרחק הגדול ביותר, ואת המרחק אליו הוא זרק.

let player1 = "shlomi "
var player1_score = 60

let player2 = "shlomir "
var player2_score = 80

if(player1_score > player2_score){
    console.log(player1 + player1_score)
}
else if(player2_score > player1_score){
    console.log(player2  +  "wins " + player2_score)
}

// 8. כתבו משתנה שמכיל מספר, והדפיסו האם הערך במשתנה הוא מספר זוגי או לא.

var BooleanResoult = 2 ? true: false;

console.log( BooleanResoult)


// 9. הגדירו 2 משתנים שבשניהם יש מספר, והדפיסו את המספר הגדול יותר מבינהם.

var n1 = 2
var n1 = 3

if(n1 > n2){
    console.log( n1 +">"+  n2)
}
else if(n2 > n1){
    console.log( n2 +">"+  n1)

}

// 10 : חישוב ממוצע:
// הגדירו 7 משתנים, לכל אחד מהם יש מספר כלשהו.
// לבסוף הדפיסו לקונסול את הממוצע של כל המספרים.

var n1 = 1,n2 = 1,n3 = 1,n4 =1,n5 =1,n6 =1,n7 = 1
console.log(n1+n2+n3+n4+n5+n6+n7)

// 11: מדד כושר:
// הגדירו אדם באמצעות 3 משתנים. משתנה אחד מכיל את שם הבן אדם, משתנה שני מכיל את גילו
// משתנה שלישי מכיל את המספר ק"מ שהוא רץ
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 30 ל 50 ק"מ – יודפס לי "אתה בכושר מעולה + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 10 ל 30 ק"מ – יודפס לי "אתה בכושר טוב + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 0 ל 10 ק"מ – יודפס לי "חייב להשתפר + השם שלי + הגיל שלי ".
// אם הגיל שלי הוא בין 18-30 ורצתי בין 25-50 ק"מ – יודפס לי " אתה בכושר מעולה + השם שלי + הגיל שלי "
// אם הגיל שלי הוא בין 18-30 ורצתי פחות מ 25 ק"מ – יודפס לי " יש מקום לשיפור + השם שלי + הגיל שלי ".

let shem = "arzi"
var age = 32
var kilometraz = 50
if((age >= 30 || age <=50) && (kilometraz >=30 || kilometraz > 50)) {
    console.log("אתה בכושר מעולה"+ " " + shem  +" "+ age)


}

// switch (age && kilometraz) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

// 12. צרו משתנה שמכיל שעה בין 5 ל 24
// בין השעות 5 בבוקר ל 11 בבוקר כולל יודפס לי "בוקר טוב".
// ביום השעות 12 בצהרים עד 17 (כולל) יודפס לי "צהרים טובים"
// בין השעות 18:00 ל 23 יודפס לי "ערב טוב".


let time = "11:00"

if(time>= "11:00" || "time == 16:00"){
    console.log("good evening")
}
