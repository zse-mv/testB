//бюджет на месяц
let monthBudget;
//дата в формате YYYY-MM-DD
let formatDate;

let str;
let i=1;
let appData = {  
    appMonthBudget: monthBudget, //бюджет на месяц
    appObligatoryExpenses: {}, //обязательные расходы
    appNonbidingExpenses: {},  //НЕобязательные расходы
    appIncome: [],  //
	moneyPerDay:0,//средний расход за день
    appFormatDate: formatDate,//на дату
	appMonthIncome:0,//сумма накоплений
    appSaving: false
 }
 
 //диалоговое окно для ввода бюджета
function start() {
  do { 
     monthBudget =Number(prompt("Введите число, равное Вашему месячному бюджету" , ""));
     console.log("monthBudget="+monthBudget);
     if (isNaN(monthBudget) || (monthBudget==0)) {alert("Введите число в правильном формате");}
  else {break}
}
  while (true);
 appData.appMonthBudget= monthBudget;
 alert("ввод бюджета завершён");
 formatDate = prompt("Введите дату в формате YYYY-MM-DD" , "");
 appData.appFormatDate=formatDate;
}
start();
//


 
 // Расчет бюджета на день
function detectDayBudget() { // .toFixed(n); - округление до n знаков;   .toFixed() - округление до целого                        										 
    appData.moneyPerDay = (appData.appMonthBudget / 30).toFixed();
    alert ("Бюджет на один день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


let fff=function(str1,str2){
let ar=[];
let s;
do{
 s=prompt(str1,"");
 if (s === "" ) {alert("Обозначение для обязательной статьи расходов не может быть пустым. Введите заново! "); continue;}
 if (s === null) {alert("Нельзя использовать кнопку ОТМЕНА"); continue;}
 if (s.length > 10) {alert("Значение слишком длинное. Введите заново!"); continue;}
 
  if ((s != null) && (s.length <= 10) && (s != null)) {break;}
 } while (true)
 ar[1]=s;
 do{
 s=Number(prompt(str2,""));
  if (isNaN(s) || (s==0)) {alert("Введите число в правильном формате"); continue;}
  else {break}
  } while (true)
  ar[2]=s;
  
return ar;
}

i=1;
do {
dop=(i==3)?dop="ей":dop="-ой";
let ss1="Введите обозначение для "+i+"-"+dop+" обязательной статьи расходов в этом месяце";
let ss2=" Затраты на "+i+"-ю обязательную статью расхордов"; 
let ll=fff(ss1,ss2);

appData.appObligatoryExpenses[ll[1]]=ll[2];

let com=confirm("Продолжить?");
if (com!=true) {break}
i++;
} while (true);

i=1;
do {
dop=(i==3)?dop="ей":dop="-ой";


let ss1="Введите обозначение для "+i+"-"+dop+" НЕобязательной статьи расходов в этом месяце";
let ss2=" Затраты на "+i+"-ю НЕобязательную статью расхордов"; 
let ll=fff(ss1,ss2);

appData.appNonbidingExpenses[ll[1]]=ll[2];


let com=confirm("Продолжить?");
if (com!=true) {break}
i++;
} while (true);
//

function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();


function checkSavings() {
        if (appData.appSaving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.appMonthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.appMonthIncome);
    }
}
checkSavings();