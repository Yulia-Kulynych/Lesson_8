/* 1.
let Admin = 'admin';
let MyName = 'Yulia';

let Copy = Admin;

Admin=MyName;
MyName=Copy;

alert(Admin);
*/

/*2.
const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы? - можно, так как это константа
const AGE = someCode(BIRTHDAY); // а здесь? - и здесь
*/

/*3.
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya
*/

/*4.
console.log("" + 1 + 0);//=10, но не то же, что (1 + 0 + "")

console.log("" - 1 + 0);//=-1
console.log(true + false);//=1,  так как 1 + 0
console.log(6 / "3");//=2, так как "3"=>3
console.log("2" * "3");//6, так как "2"=>2 и"3"=>3
console.log(4 + 5 + "px"); //9px, так как сумма и конкатенация
console.log("$" + 4 + 5);//=$45
console.log("4" - 2);//=2, так как "4"=>4
console.log("4px" - 2);//=NaN - вычислительная ошибка (строка-число)
console.log(7 / 0);//=Infinity - число/0
console.log(" -9 " + 5);//= -9 5 
console.log(" -9 " - 5);//-14
console.log(null + 1);//=1 (null =>0)
console.log(undefined + 1);//NaN
*/

/*5.
let a = 1, b = 1;
let c = ++a; // 2 - результат после увеличения
let d = b++; // 1 - результат до увеличения
*/
/*6.
let a = 2;
let x = 1 + (a *= 2);//=5; a=4, та как  а уже присвоили a*2=4
*/
/*7.
console.log(5 > 4);//true
console.log("ананас" > "яблоко");//false
console.log("2" > "12");//true, считала, что false, так как считала, что идет неявное преобразование в числа
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(null == "\n0\n");//false
console.log(null === +"\n0\n");//false
*/

/*8.
let YourName=prompt("Ваше имя?");
alert("Ваше имя: " + YourName);
*/

/*9.
if ("0") {
    alert( 'Привет' );
   }//выведется, так как "0" - строка, а значит true
*/

/*10.
let NameJavaScript = prompt("Каково «официальное» название JavaScript?");
if (NameJavaScript=="ECMAScript"){
    alert("Верно!")
    }
else {
    alert("Не знаете? ECMAScript!")
}*/
/* 11.
 let InputNumber=prompt("Введите число.")

 if (InputNumber>0){
     alert(1)
 }
else if (InputNumber<0){
    alert(-1)
} 
else if (InputNumber==0){
    alert(0)
}*/

/*12.
let a= +prompt ("Введите значение a");
let b= +prompt ("Введите значение b");
let result=a + b<4?"Мало":"Много";
alert(result);
*/

/*13.
let login=prompt("Ведите login")
message=(login == 'Сотрудник')?"Привет":
(login == 'Директор')?"Здравствуйте":
(login == '')?"Нет логина":"" ;
alert(message)
*/

/* 14.
alert( null || 2 || undefined ); //2, так как оператор ИЛИ возвращает true 
*/

/*15.
alert( alert(1) || 2 || alert(3) );//считала, что только 1. Но сначало 1, так как выполнение идет слева на право,
//дальше 2, так как значение первой переменной alert(1) - undefined- то есть false
*/
/* 16.
alert( 1 && null && 2 );// null - операор И возвращает перрвое false
*/
/*17.
alert( alert(1) && alert(2) );//сначало 1, так как выполнение идет слева на право, то есть выполнит alert
//дальше undefined - значение первого false (то есть самой первой переменной)
/*18.
alert( null || 2 && 3 || 4 );//3 
*/
/*19.
let age =14;
if ((age>=14)&&(age<=90)){
    alert ("в диапазоне")
}
else {
    alert("вне диапазона")
}
*/
/*20.1
let age =10;
if (!(age>=14)&&(age<=90)){
    alert (" НЕ находится в диапазоне 14-90")
}
else {
    alert("находится в диапазоне 14-90")
}*/
/*20.1
let age =10;
if ((age<=14)||(age>=90)){
    alert (" НЕ находится в диапазоне 14-90")
}
else {
    alert("находится в диапазоне 14-90")
}
*/
/*21.
if (-1 || 0) alert( 'first' );// значение -1
if (-1 && 0) alert( 'second' );// 0
if (null || -1 && 1) alert( 'third' );//-1
*/
/*22.
let login=prompt("Введите Login.")

if (login=="Admin"){
   let password=prompt("Ведите пароль.")
        
    if (password=="Я главный"){
            alert ("Здравствуйте!")}
    else if (password==""){
        alert ("Отменено")
        }
    else if (password==null){
        alert ("Отменено")
        }
    else{
        alert ("Неверный пароль")
        }
}

else if (login==""){
    alert ("Отменено")
    }
else if (login==null){
    alert ("Отменено")
    }
else {
    alert ("I don't know")
}
*/
/*23.
let browser=prompt("Ведите название браузера(Edge, Chrome, Firefox, Safari, Opera)")
if (browser=="Edge"){
    alert( "You've got the Edge!" );
}
else if (browser=="Chrome"||"Firefox"||"Safari"||"Opera"){
    alert( 'Okay we support these browsers too' ); 
}
else{
    alert( 'We hope that this page looks ok!' )
}*/
/*24.
let a = +prompt('a?', "");
switch (a) {
    case 0:
    alert(0);
    break;

    case 1:
    alert(1);
    break;

    case 2:
    case 3:
    alert('2,3');
    break;

    }
*/
/*26.
let number=-2;
if (number>0){
    ++number
    //console.log(number)
}
else {
    alert (number)
}
*/
/*27.
let number=10;
if (number>0){
    ++number;
    alert(number)
}
else if (number<0){
    number=number-2;
    alert(number)
}
else if (number==0){
    number=10;
    alert (number)
}
*/
/*28.
let number1=10;
let number2=-10;
let number3=1;
let i=0

if (number1>0){
    ++i;
    console.log(i)
}
else {
    i=i
}

if (number2>0){
    ++i;
    console.log(i)
}
else {
    i=i
}

if (number3>0){
    ++i;
    console.log(i)
}
else {
    i=i
}
alert (i);
*/
/*29.
let number1=10;
let number2=-10;
let number3=1;
let paired=0;
let unpaired=0;

if (number1>0){
    ++paired;
    
}
else {
    ++unpaired
}

if (number2>0){
    ++paired;
}
else {
    ++unpaired
}

if (number3>0){
    ++paired;
}
else {
    ++unpaired
}

alert ("Парных: "+paired+"; непарных: "+unpaired);
*/
/*30.
let number1=10;
let number2=15;

if (number1>number2){
    alert ("Большее первое: "+ number1);
}
else {
    alert ("Большее второе: " + number2);
}
*/
/*31.
let number1=20;
let number2=15;

if (number1<number2){
    alert ("Порядковый номер меньшего - 1");
}
else {
    alert ("Порядковый номер меньшего - 2");
}
*/
/*32.
let number1=20;
let number2=35;

if (number1>number2){
    alert ("Большее: "+ number1);
    alert ("Меньшее: "+ number2);
}

else {
    alert ("Большее: "+ number2);
    alert ("Меньшее: "+ number1);
}
*/
/*33.
let A=50;
let B=5;

let C=0

if (A > B){
    C=A;
    A=B;
    B=C;
    alert ("A="+A + "; B=" +B)
}
else {
    alert ("A="+A + "; B=" +B)
}
*/
/*35.
let A=55;
let B=55;

let C=A+B

if (A != B){
    
    A=C;
    B=C;
    alert ("A="+A + "; B=" +B)
}
else {
    A=0;
    B=0
    alert ("A="+A + "; B=" +B)
}
*/
/*36
let A=100;
let B=60;
let C=20;

if((A<B) && (A<C)){
    
    alert("Минимальное: " + A)
}
else if ((B<A) && (B<C)){
    
    alert ("Минимальное: " + B)
}
else{
    
    alert ("Минимальное: " + C)
}
*/
/*37
let A=100;
let B=60;
let C=80;

if((A<B) && (A>C)){
    
    alert("Среднее: " + A)
}
else if ((B<A) && (B>C)){
    
    alert ("Среднее: " + B)
}
else{
    
    alert ("Среднее: " + C)
}*/

/*38.
let A=100;
let B=60;
let C=80;

if((A<B) && (A<C)){
    
    alert("Минимальное: " + A)
}
else if ((B<A) && (B<C)){
    
    alert("Минимальное: " + B)
}
else{
    
    alert ("Минимальное: "  + C)
}

if((A>B) && (A>C)){
    
    alert("Максимальное: " + A)
}
else if ((B>A) && (B>C)){
        
    alert("Максимальное: " + B)
}
else{
        
    alert ("Максимальное: "  + C)
}
*/
/*39.
let A=100;
let B=60;
let C=10;

if((A<B) && (A<C)){
    
    alert("Сумма больших: " + (B+C))
}
else if ((B<A) && (B<C)){
    
    alert("Сумма больших: " + (A+C))
}
else{
    
    alert ("Сумма больших: " + (A+B))
}
*/
let A=200;
let B=10;
let C=10;

if((A==B) && (C!==A)){
    
    alert("Отличное третье число: " +C)
}
else if ((B==C) && (A!==B)){
    
    alert("Отличное первое число: " +A)
}
else {
    
    alert("Отличное второе число: " +B)
}