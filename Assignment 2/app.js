//Chapter #21-25
//Task#01
// var fname=prompt("Enter Your First Name")
// var lName=prompt("Enter Your Last Name")
// var fullName=fname+" " + lName
// document.write("Welcome "+ fullName )

//Task#02
// var mName=prompt("Enter Favourite mobile phone model");
// document.write("My Favourite phone is: "+mName+"<br>");
// document.write("Length of text is :"+mName.length)

//Task# 03
// var name="Pakistani"
// document.write("<br>text: "+name)
// document.write("<br><br> idex of 'n' is: "+name.idexOf("n"))

//Task#04
// var name="Hello World"
// document.write("<br>text: "+name)
// document.write("<br><br> idex of 'l' is: "+name.lastidexOf("l"))

//Task#05
// var name="Pakistani"
// document.write("<br>text: "+name)
// document.write("<br><br>Character at idex 3: "+name.charAt(3));

//Task#06
// var fname=prompt("Enter Your First Name")
// var lName=prompt("Enter Your Last Name")
// var fullName=fname.concat(" ",lName)
// document.write("Welcome "+ fullName )

//Task#07
// var cNAme="Hyderabad"
// document.write("<br>City: "+cNAme)
// document.write("<br><br>After Replacement: "+cNAme.replace("Hyder","Islam"))

//Task#08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<br>Message: "+message)
// var m2=message.replace(/and/g,"&");
// document.write("<br><br>After replacement: "+m2)

//Task#09
// var val="472";
// document.write("<br>Value: "+val)
// document.write("<br><br>Type: "+typeof val)
// var val=+val;
// document.write("<br><br>Value: "+val)
// document.write("<br><br>Type: "+typeof val)

//Task#10
// var inp = prompt("Enter any letter to convert it into Uppercase");
// document.write("<br>User Input: "+inp)
// document.write("<br><br>Upper case: "+inp.toUpperCase())

//Task#11
// var inp = prompt("Enter any letter to convert it into Tittlecase");
// document.write("<br>User Input: "+inp)
// var fl=inp.slice(0,1).toUpperCase();
// var remainl=inp.slice(1).toLowerCase();

// document.write("<br><br>Tittle case: "+fl+remainl)

//Task#12
// var num=35.36;
// document.write("<br>Number: "+num);
// document.write("<br><br>Result: "+num.totext().replace(".",""))

//Task#13
// var uinp=prompt("Enter your username")
// if(uinp.idexOf("@")!= -1 || uinp.idexOf(".")!= -1 || uinp.idexOf(",")!= -1 ||uinp.idexOf("!")!= -1){
//     alert("Please enter a valid username")
// }

//Task#14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var inp=prompt("Enter what do you want eat from bakery ?")
// var id=A.idexOf(inp.toLowerCase())
// if(id == -1){
//     alert("We are sorry "+inp+" is not available> in our bakery")
// }
// else{
//     alert(inp +" is availableat idex "+id+" in our bakery")
// }

//Task#15
// var password = prompt("Enter the Password");
// var pass=  /^[A-Za-z]\w{7,14}$/;
// document.write("<br><br>Enter password: "+password);
// if(password.match(pass)){
//     document.write("<br>Correct Password");
// } else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57){
//     document.write("<br>Password can not begin with number");

// }
// else{
//     document.write("<br>Password length is not valid");
// }
// document.write("<br>Please enter valid password");

//Task#16
// var university = "University of Karachi";
// var uni = university.split("")
// alert(uni);
// for( var i=0;i<uni.length; i++){
//     document.write(uni[i]+"<br>")
// }

//Task#17
// var uinp=prompt("Enter a random text to get last character");
// document.write("User Input: "+uinp);
// document.write("<br><br>Last character of input: "+uinp[uinp.length-1])

//Task#18
var text = "The quick brown fox jumps over the lazy dog";
// document.write("<br><br>Text: "+text);


// var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var ul = 0;
// var id = 0;
// while(text.indexOf("the",id) != -1){
// if(text.indexOf("the",id) != -1){
//     ul++;
//     id = text.indexOf("the",id) + 1;
// }}
// document.write("<br>There are "+ul + " occurence(s) of the word 'the'");

//Chapter #26-30
//Task#01
// var number=+prompt("Enter any positive number");
// document.write("<br> Number: "+number)
// document.write("<br><br> Round off value: "+Math.round(number));
// document.write("<br><br>Floor value: "+Math.floor(number));
// document.write("<br><br> Ceil value: "+Math.ceil(number));

//Task#02
// var number=+prompt("Enter any negative number");
// document.write("<br> Number: "+number)
// document.write("<br><br> Round off value: "+Math.round(number));
// document.write("<br><br>Floor value: "+Math.floor(number));
// document.write("<br><br> Ceil value: "+Math.ceil(number));

//Task#03
// var number=+prompt("Enter any number for absolute value"); 
// document.write("<br><br> The absolute value of  "+number+" is "+Math.abs(number));

//Task#04
// document.write("<br>Random dice value : " +(Math.round(Math.random()*5)+1));
// document.write("<br>Random dice value : " +(Math.round(Math.random()*5)+1));

//Task#05
// var random  = +Math.round((Math.random())+1)
// document.write("<br><br> "+random);
// if(random % 2 == 0){
//     document.write("<br>random coin value: Heads");
// }
// else{
//     document.write("<br>random coin value: Tails");
// }

//Task#06
// document.write("random number between 1 and 100: "+(Math.round(Math.random()*99)+1));

//Task#07
// var weight = prompt("Enter your weight in kilograms ");
// document.write("<br><br>The weight of user is "+parseFloat(weight) + " kilograms");

//Task#08
// var sec=+(Math.round(Math.random()*9)+1);
// var uinp=+prompt("Enter the number between 1 1nd 10")
// if(uinp === sec){
//         alert("Congratulation");
//     }
//     else{
//         alert("Try Again!");
//     }

//Chapter 31-34
//Task#01
// var now=new Date();
// document.write(now)

//Task#02
// var month = ["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// alert("Current month: "+month[now.getDay()]);

//Task#03
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is "+nameOfToday);

//Task#04
// var now = new Date();
// var theDay = now.getDay();
// if(theDay === 6 || theDay === 0 ){
//         document.write("<br><br>It's Fun day");
//     }

//Task#05
// var now = new Date();
// if(now.getDate <16){
//     document.write("<br><br>First fifteen days of the month");
// }
// else{
//         document.write("<br><br>Last days of the month");
//     }

//Task#06
// var now=new Date();
// var sec=now.getTime();
// var min=sec / 60000;
// document.write("<br><br>Current Date: "+now);
// document.write("<br><br>Elapsed milliseconds since Janurary 1, 1970: "+sec);
// document.write("<br><br>Elapsed minutes since Janurary 1, 1970: "+min);

//Task#07
// var now = new Date();
// if(now.getHours()<12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//Task#08
// var laterdate= new Date("December 31, 2020");
// document.write("Later date: "+laterdate);

//Task#09
// var now=new Date();
// var ramadan=new Date("June 18, 2015");
// var milli=now.getTime()-ramadan.getTime();
// alert(parseInt(milli/(1000*60*60*24)) +" days passed since 1st ramadan, 2015");

//Task#10
// var begginning = new Date("Janurary 01, 2015 ");
// var refernce = new Date("December 05, 2015 22:50:16");
// document.write("<br><br>Our rerfernce date: "+refernce);
// document.write("<br>"+ (Math.ceil(( refernce.getTime() - begginning.getTime()) / 60000 )) +" seconds had passed since beginning of 2015");

// // Task#11
// var now = new Date();
// var hour = now.getHours();
// hour--;
// var time = now.toString();
// now.setHours(hour) ;
// document.write("<br><br>current date: "+time);
// document.write("<br>1 hour ago, it was "+now);

// // Task#12
// var now = new Date();
// var year = now.getFullYear();
// year -= 100;
// var time = now.toString();
// now.setFullYear(year) ;
// alert("current date: "+time);
// alert("100 years back, it was "+now);

// // Task#13
// var age = +prompt("Enter your age till december 31:") ;
// var now = new Date();
// var year = now.getFullYear();
// year -= age;
// now.setFullYear(year) ;
// document.write("<br><br>Your age is "+age);
// document.write("<br> Your birth year is "+now.getFullYear())

// // Task#14
// var month = ["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"];
// var customer_name = prompt("Enter the customer name");
// var curr = new Date();
// var no_units = 410;
// var charges = 16;
// var late = charges*no_units + 350;
// var normal = charges*no_units
// document.write("<br><br><h1>K-Electric Bill</h1><br>");
// document.write("<br>Customer Name: "+customer_name);
// document.write("<br>Month: "+ month[curr.getMonth()]);
// document.write("<br>Number of units: "+no_units);
// document.write("<br>Charges per unit: "+charges);

// document.write("<br><br>Net Amount Payable(within Due Date): "+normal);
// document.write("<br>Late payment Surcharge: 350");
// document.write("<br>Gross Amount Payable(after Due Date): "+late);

//Chapter#35-38

// // Task#01
// function current_time(){
//     var curr_time = new Date();
//     document.write("<br><br> "+curr_time);
// }

// current_time();

// // Task#02
// function greetings(first,last){
//     alert("Hello "+ first+" "+last);
// }

// greetings("Sarim","Ali");

// // Task#03
// function sum(num1 , num2){
//     return num1+num2;
// }
// var number_1 = +prompt("Enter first number for addition");
// var number_2 = +prompt("Enter second number for addition");
// document.write("<br><br>Addition of "+number_1+" and "+number_2+ " is "+sum(number_1,number_2))

// // Task#04
// function calculator(num1, num2, operator){
// if(operator == "+"){
//     document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber+secNumber))
// }
// else if(operator == "-"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber-secNumber))
// }
// else if(operator == "*"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber*secNumber))
// }
// else if(operator == "/"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber/secNumber))
// }
// else if(operator == "%"){
//      document.write("<br><br>")
//     document.write(firstNumber+ operator + secNumber + " = "+(firstNumber%secNumber))
// }
// else{
//      document.write("<br><br>")
//     document.write("Invalid Choice")
// }
// }
// var firstNumber = +prompt("Enter first number");
// var secNumber = +prompt("Enter second number");
// var operator = prompt("Enter operator +,-,*,/ or %");
// calculator(firstNumber,secNumber, operator);

// // Task#05
// function square(a){
//  return a*a ;
// }
// var sq = +prompt("Enter number for square");
// document.write("<br><br> Square of "+sq + " is "+square(sq));

// // Task#06
// function factorial(b){
//     if(b == 0 || b === 1){
//         return 1
//     }
//     return b * factorial(b-1);
// }
// var fact = +prompt("Enter number for Factorial");
// document.write("<br><br> Factorial of "+fact + " is "+factorial(fact));

// // Task#07
// function count(start, end){
// document.write("<br><br>")
//     for(var i = start; i<= end; i++){
//         document.write(i+"<br>");
//     }
// }
// var st = +prompt("Enter number of start of counting");
// var en = +prompt("Enter number of end of counting");
// count(st, en);

// // Task#08
// function calculateHypotenuse(prepen, base){
//     function calculateSquare(c){
//         return c*c;
//     }
//     return calculateSquare(prepen) + calculateSquare(base);
// }
// document.write("Hypotenuse is "+ calculateHypotenuse(2,2));

// // Task#09
// function area_rectangle(width, height){
//     document.write("<br><br>Area of rectangle at widht: "+width+ " and height: "+height+ " is "+width*height);
// }
// var w = +prompt("Enter width for Area of rectangle");
// var h = +prompt("Enter height for Area of rectangle");
// area_rectangle(2,2);
// area_rectangle(w,h);

// // Task#10
// function check_palindrome(string){
//     var rev_string = string.split("");
//     rev_string = rev_string.reverse();
//     rev_string = rev_string.join("");
//     if(string === rev_string){
//         document.write("<br><br> "+string+" is palindrome");
//     }
//     else{
//         document.write("<br><br> "+string+" is not palindrome");
        
//     }
// }
// check_palindrome("madam")

// // Task#11
// function first_capital(string_1){
//    var string_2 =  string_1.split(" ");
//    for (var i =0; i< string_2.length; i++){
//    var ran = string_2[i].slice(0,1);
// var dom = string_2[i].slice(1);
// string_2[i] = ran.toUpperCase()+dom.toLowerCase()
// }
// return string_2.join(" ");
// }
// var example = "the quick brown fox";
// document.write("<br><br> EXAMPLE STRING: " +example);
// document.write("<br><br> EXPECTED OUTPUT: " + first_capital(example));

// // Task#12
// function longest(string_1){
//    var string_2 =  string_1.split(" ");
//    for (var i =0; i< string_2.length -1; i++){
//     longest = string_2[i];
//     if(string_2[i].length < string_2[i+1].length){
//         longest = string_2[i+1];
//     }
// }
// return longest;
// }
// var eg = "Web Development Tutorial";
// document.write("<br><br> EXAMPLE STRING: " +eg);
// document.write("<br><br> EXPECTED OUTPUT: " + longest(eg));

// // Task#13
// function count_letter(string, letter){
// var flg = 0;
// var ind = 0;
// while(string.indexOf(letter,ind) != -1){
// if(string.indexOf(letter,ind) != -1){
//     flg++;
//     ind = string.indexOf(letter,ind) + 1;
// }}
// return flg;
// }
// var stg = "JSResourceS.com";
// var lett = '0'
// document.write("<br><br>Occurence of  "+lett+ " in "+stg+" is "+count_letter("JSResourceS.com","o"));

// // Task#14
// function calcCircumference( r){
// document.write("<br><br>The circumference is: "+ 2*3.142*r) ;
// }

// function area(r){
//     document.write("<br><br>The area is: "+ r*3.142*r) ;
// }
// area(1);








