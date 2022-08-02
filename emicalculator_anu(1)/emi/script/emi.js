function change(x){
x.style.background="skyblue";
}
function changeback(x)
{
x.style.background="white";
}
function validate(x){
if(isNaN(x.value)){
alert("Please enter value in digits!");
x.value="";
return false;
}
}
function calculate(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;
if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}

var rate=interest/12/100;
ratet=rate+1;

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div12=pow12-1;
div24=pow24-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;


E12=principle*rate*pow12/div12;
E12=Math.round(E12);
E24=(principle*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principle*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principle*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principle*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principle*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principle*rate*pow84)/(div84);
E84=Math.round(E84);
var a=document.getElementById("emi12m");
a.innerHTML="Rs."+E12+"/-";

var b=document.getElementById("emi24m");
b.innerHTML="Rs."+E24+"/-";

var c=document.getElementById("emi36m");
c.innerHTML="Rs."+E36+"/-";

var d=document.getElementById("emi48m");
d.innerHTML="Rs."+E48+"/-";

var e=document.getElementById("emi60m");
e.innerHTML="Rs."+E60+"/-";

var f=document.getElementById("emi72m");
f.innerHTML="Rs."+E72+"/-";

var g=document.getElementById("emi84m");
g.innerHTML="Rs."+E84+"/-";

}

function showChart12m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 12 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow12=Math.pow(ratet,12);

div12=pow12-1;

E12=principle*rate*pow12/div12;
E12=Math.round(E12);

interest1=(principle*interest/100)/12;
pr1=E12-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/12;
pr2=E12-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/12;
pr3=E12-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/12;
pr4=E12-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/12;
pr5=E12-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/12;
pr6=E12-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/12;
pr7=E12-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/12;
pr8=E12-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/12;
pr9=E12-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/12;
pr10=E12-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/12;
pr11=E12-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/12;
pr12=E12-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E12+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow24=Math.pow(ratet,24);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div24=pow24-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;

E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emi24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emi36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emi48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emi60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emi72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emi84").innerHTML="Rs."+E84+"/-";

}


function showChart24m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi24.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 24 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow24=Math.pow(ratet,24);

div24=pow24-1;

E24=principle*rate*pow24/div24;
E24=Math.round(E24);

interest1=(principle*interest/100)/24;
pr1=E24-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/24;
pr2=E24-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/24;
pr3=E24-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/24;
pr4=E24-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/24;
pr5=E24-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/24;
pr6=E24-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/24;
pr7=E24-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/24;
pr8=E24-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/24;
pr9=E24-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/24;
pr10=E24-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/24;
pr11=E24-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/24;
pr12=E24-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/24;
pr13=E24-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/24;
pr14=E24-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/24;
pr15=E24-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/24;
pr16=E24-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/24;
pr17=E24-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/24;
pr18=E24-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/24;
pr19=E24-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/24;
pr20=E24-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/24;
pr21=E24-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/24;
pr22=E24-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/24;
pr23=E24-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/24;
pr24=E24-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E24+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div12=pow12-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}


function showChart36m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi36.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 24 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow36=Math.pow(ratet,36);

div36=pow36-1;

E36=principle*rate*pow36/div36;
E36=Math.round(E36);

interest1=(principle*interest/100)/36;
pr1=E36-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/36;
pr2=E36-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/36;
pr3=E36-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/36;
pr4=E36-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/36;
pr5=E36-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/36;
pr6=E36-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/36;
pr7=E36-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/36;
pr8=E36-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/36;
pr9=E36-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/36;
pr10=E36-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/36;
pr11=E36-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/36;
pr12=E36-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/36;
pr13=E36-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/36;
pr14=E36-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/36;
pr15=E36-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/36;
pr16=E36-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/36;
pr17=E36-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/36;
pr18=E36-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/36;
pr19=E36-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/36;
pr20=E36-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/36;
pr21=E36-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/36;
pr22=E36-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/36;
pr23=E36-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/36;
pr24=E36-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

principle=balance24;
interest25=(principle*interest/100)/36;
pr25=E36-interest25;
balance25=principle-pr25;
totalint=totalint+interest25;

newwindow.document.getElementById("emi25").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest25").innerHTML="Rs."+Math.round(interest25);
newwindow.document.getElementById("pr25").innerHTML="Rs."+Math.round(pr25);
newwindow.document.getElementById("balance25").innerHTML="Rs."+Math.round(balance25);

principle=balance25;
interest26=(principle*interest/100)/36;
pr26=E36-interest24;
balance26=principle-pr26;
totalint=totalint+interest26;

newwindow.document.getElementById("emi26").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest26").innerHTML="Rs."+Math.round(interest26);
newwindow.document.getElementById("pr26").innerHTML="Rs."+Math.round(pr26);
newwindow.document.getElementById("balance26").innerHTML="Rs."+Math.round(balance26);

principle=balance26;
interest27=(principle*interest/100)/36;
pr27=E36-interest27;
balance27=principle-pr27;
totalint=totalint+interest27;

newwindow.document.getElementById("emi27").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest27").innerHTML="Rs."+Math.round(interest27);
newwindow.document.getElementById("pr27").innerHTML="Rs."+Math.round(pr27);
newwindow.document.getElementById("balance27").innerHTML="Rs."+Math.round(balance27);

principle=balance27;
interest28=(principle*interest/100)/36;
pr28=E36-interest28;
balance28=principle-pr28;
totalint=totalint+interest28;

newwindow.document.getElementById("emi28").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest28").innerHTML="Rs."+Math.round(interest28);
newwindow.document.getElementById("pr28").innerHTML="Rs."+Math.round(pr28);
newwindow.document.getElementById("balance28").innerHTML="Rs."+Math.round(balance28);

principle=balance28;
interest29=(principle*interest/100)/36;
pr29=E36-interest29;
balance29=principle-pr29;
totalint=totalint+interest29;

newwindow.document.getElementById("emi29").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest29").innerHTML="Rs."+Math.round(interest29);
newwindow.document.getElementById("pr29").innerHTML="Rs."+Math.round(pr29);
newwindow.document.getElementById("balance29").innerHTML="Rs."+Math.round(balance29);

principle=balance29;
interest30=(principle*interest/100)/36;
pr30=E36-interest30;
balance30=principle-pr30;
totalint=totalint+interest30;

newwindow.document.getElementById("emi30").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest30").innerHTML="Rs."+Math.round(interest30);
newwindow.document.getElementById("pr30").innerHTML="Rs."+Math.round(pr30);
newwindow.document.getElementById("balance30").innerHTML="Rs."+Math.round(balance30);

principle=balance30;
interest31=(principle*interest/100)/36;
pr31=E36-interest31;
balance31=principle-pr31;
totalint=totalint+interest31;

newwindow.document.getElementById("emi31").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest31").innerHTML="Rs."+Math.round(interest31);
newwindow.document.getElementById("pr31").innerHTML="Rs."+Math.round(pr31);
newwindow.document.getElementById("balance31").innerHTML="Rs."+Math.round(balance31);

principle=balance31;
interest32=(principle*interest/100)/36;
pr32=E36-interest32;
balance32=principle-pr32;
totalint=totalint+interest32;

newwindow.document.getElementById("emi32").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest32").innerHTML="Rs."+Math.round(interest32);
newwindow.document.getElementById("pr32").innerHTML="Rs."+Math.round(pr32);
newwindow.document.getElementById("balance32").innerHTML="Rs."+Math.round(balance32);

principle=balance32;
interest33=(principle*interest/100)/36;
pr33=E36-interest33;
balance33=principle-pr33;
totalint=totalint+interest33;

newwindow.document.getElementById("emi33").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest33").innerHTML="Rs."+Math.round(interest33);
newwindow.document.getElementById("pr33").innerHTML="Rs."+Math.round(pr33);
newwindow.document.getElementById("balance33").innerHTML="Rs."+Math.round(balance33);

principle=balance33;
interest34=(principle*interest/100)/36;
pr34=E36-interest34;
balance34=principle-pr34;
totalint=totalint+interest34;

newwindow.document.getElementById("emi34").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest34").innerHTML="Rs."+Math.round(interest34);
newwindow.document.getElementById("pr34").innerHTML="Rs."+Math.round(pr34);
newwindow.document.getElementById("balance34").innerHTML="Rs."+Math.round(balance34);

principle=balance34;
interest35=(principle*interest/100)/36;
pr35=E36-interest35;
balance35=principle-pr35;
totalint=totalint+interest35;

newwindow.document.getElementById("emi35").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest35").innerHTML="Rs."+Math.round(interest35);
newwindow.document.getElementById("pr35").innerHTML="Rs."+Math.round(pr35);
newwindow.document.getElementById("balance35").innerHTML="Rs."+Math.round(balance35);

principle=balance35;
interest36=(principle*interest/100)/36;
pr36=E36-interest36;
balance36=principle-pr36;
totalint=totalint+interest36;

newwindow.document.getElementById("emi36").innerHTML="Rs."+E36+"/-";
newwindow.document.getElementById("interest36").innerHTML="Rs."+Math.round(interest36);
newwindow.document.getElementById("pr36").innerHTML="Rs."+Math.round(pr36);
newwindow.document.getElementById("balance36").innerHTML="Rs."+Math.round(balance36);

newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div12=pow12-1;
div24=pow24-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}

function showChart48m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi48.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 48 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow48=Math.pow(ratet,48);

div48=pow48-1;

E48=principle*rate*pow48/div48;
E48=Math.round(E48);

interest1=(principle*interest/100)/48;
pr1=E48-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/48;
pr2=E48-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/48;
pr3=E48-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/48;
pr4=E48-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/48;
pr5=E48-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/48;
pr6=E48-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/48;
pr7=E48-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/48;
pr8=E48-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/48;
pr9=E48-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/48;
pr10=E48-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/48;
pr11=E48-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/48;
pr12=E48-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/48;
pr13=E48-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/48;
pr14=E48-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/48;
pr15=E48-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/48;
pr16=E48-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/48;
pr17=E48-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/48;
pr18=E48-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/48;
pr19=E48-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/48;
pr20=E48-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/48;
pr21=E48-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/48;
pr22=E48-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/48;
pr23=E48-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/48;
pr24=E48-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

principle=balance24;
interest25=(principle*interest/100)/48;
pr25=E48-interest25;
balance25=principle-pr25;
totalint=totalint+interest25;

newwindow.document.getElementById("emi25").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest25").innerHTML="Rs."+Math.round(interest25);
newwindow.document.getElementById("pr25").innerHTML="Rs."+Math.round(pr25);
newwindow.document.getElementById("balance25").innerHTML="Rs."+Math.round(balance25);

principle=balance25;
interest26=(principle*interest/100)/48;
pr26=E48-interest24;
balance26=principle-pr26;
totalint=totalint+interest26;

newwindow.document.getElementById("emi26").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest26").innerHTML="Rs."+Math.round(interest26);
newwindow.document.getElementById("pr26").innerHTML="Rs."+Math.round(pr26);
newwindow.document.getElementById("balance26").innerHTML="Rs."+Math.round(balance26);

principle=balance26;
interest27=(principle*interest/100)/48;
pr27=E48-interest27;
balance27=principle-pr27;
totalint=totalint+interest27;

newwindow.document.getElementById("emi27").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest27").innerHTML="Rs."+Math.round(interest27);
newwindow.document.getElementById("pr27").innerHTML="Rs."+Math.round(pr27);
newwindow.document.getElementById("balance27").innerHTML="Rs."+Math.round(balance27);

principle=balance27;
interest28=(principle*interest/100)/48;
pr28=E48-interest28;
balance28=principle-pr28;
totalint=totalint+interest28;

newwindow.document.getElementById("emi28").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest28").innerHTML="Rs."+Math.round(interest28);
newwindow.document.getElementById("pr28").innerHTML="Rs."+Math.round(pr28);
newwindow.document.getElementById("balance28").innerHTML="Rs."+Math.round(balance28);

principle=balance28;
interest29=(principle*interest/100)/48;
pr29=E48-interest29;
balance29=principle-pr29;
totalint=totalint+interest29;

newwindow.document.getElementById("emi29").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest29").innerHTML="Rs."+Math.round(interest29);
newwindow.document.getElementById("pr29").innerHTML="Rs."+Math.round(pr29);
newwindow.document.getElementById("balance29").innerHTML="Rs."+Math.round(balance29);

principle=balance29;
interest30=(principle*interest/100)/48;
pr30=E48-interest30;
balance30=principle-pr30;
totalint=totalint+interest30;

newwindow.document.getElementById("emi30").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest30").innerHTML="Rs."+Math.round(interest30);
newwindow.document.getElementById("pr30").innerHTML="Rs."+Math.round(pr30);
newwindow.document.getElementById("balance30").innerHTML="Rs."+Math.round(balance30);

principle=balance30;
interest31=(principle*interest/100)/48;
pr31=E48-interest31;
balance31=principle-pr31;
totalint=totalint+interest31;

newwindow.document.getElementById("emi31").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest31").innerHTML="Rs."+Math.round(interest31);
newwindow.document.getElementById("pr31").innerHTML="Rs."+Math.round(pr31);
newwindow.document.getElementById("balance31").innerHTML="Rs."+Math.round(balance31);

principle=balance31;
interest32=(principle*interest/100)/48;
pr32=E48-interest32;
balance32=principle-pr32;
totalint=totalint+interest32;

newwindow.document.getElementById("emi32").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest32").innerHTML="Rs."+Math.round(interest32);
newwindow.document.getElementById("pr32").innerHTML="Rs."+Math.round(pr32);
newwindow.document.getElementById("balance32").innerHTML="Rs."+Math.round(balance32);

principle=balance32;
interest33=(principle*interest/100)/48;
pr33=E48-interest33;
balance33=principle-pr33;
totalint=totalint+interest33;

newwindow.document.getElementById("emi33").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest33").innerHTML="Rs."+Math.round(interest33);
newwindow.document.getElementById("pr33").innerHTML="Rs."+Math.round(pr33);
newwindow.document.getElementById("balance33").innerHTML="Rs."+Math.round(balance33);

principle=balance33;
interest34=(principle*interest/100)/48;
pr34=E48-interest34;
balance34=principle-pr34;
totalint=totalint+interest34;

newwindow.document.getElementById("emi34").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest34").innerHTML="Rs."+Math.round(interest34);
newwindow.document.getElementById("pr34").innerHTML="Rs."+Math.round(pr34);
newwindow.document.getElementById("balance34").innerHTML="Rs."+Math.round(balance34);

principle=balance34;
interest35=(principle*interest/100)/48;
pr35=E48-interest35;
balance35=principle-pr35;
totalint=totalint+interest35;

newwindow.document.getElementById("emi35").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest35").innerHTML="Rs."+Math.round(interest35);
newwindow.document.getElementById("pr35").innerHTML="Rs."+Math.round(pr35);
newwindow.document.getElementById("balance35").innerHTML="Rs."+Math.round(balance35);

principle=balance35;
interest36=(principle*interest/100)/48;
pr36=E48-interest36;
balance36=principle-pr36;
totalint=totalint+interest36;

newwindow.document.getElementById("emi36").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest36").innerHTML="Rs."+Math.round(interest36);
newwindow.document.getElementById("pr36").innerHTML="Rs."+Math.round(pr36);
newwindow.document.getElementById("balance36").innerHTML="Rs."+Math.round(balance36);

principle=balance36;
interest37=(principle*interest/100)/48;
pr37=E48-interest37;
balance37=principle-pr37;
totalint=totalint+interest37;

newwindow.document.getElementById("emi37").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest37").innerHTML="Rs."+Math.round(interest37);
newwindow.document.getElementById("pr37").innerHTML="Rs."+Math.round(pr37);
newwindow.document.getElementById("balance37").innerHTML="Rs."+Math.round(balance37);

principle=balance37;
interest38=(principle*interest/100)/48;
pr38=E48-interest38;
balance38=principle-pr38;
totalint=totalint+interest38;

newwindow.document.getElementById("emi38").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest38").innerHTML="Rs."+Math.round(interest38);
newwindow.document.getElementById("pr38").innerHTML="Rs."+Math.round(pr38);
newwindow.document.getElementById("balance38").innerHTML="Rs."+Math.round(balance38);

principle=balance38;
interest39=(principle*interest/100)/48;
pr39=E48-interest39;
balance39=principle-pr39;
totalint=totalint+interest39;

newwindow.document.getElementById("emi39").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest39").innerHTML="Rs."+Math.round(interest39);
newwindow.document.getElementById("pr39").innerHTML="Rs."+Math.round(pr39);
newwindow.document.getElementById("balance39").innerHTML="Rs."+Math.round(balance39);

principle=balance39;
interest40=(principle*interest/100)/48;
pr40=E48-interest36;
balance40=principle-pr40;
totalint=totalint+interest40;

newwindow.document.getElementById("emi40").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest40").innerHTML="Rs."+Math.round(interest40);
newwindow.document.getElementById("pr40").innerHTML="Rs."+Math.round(pr40);
newwindow.document.getElementById("balance40").innerHTML="Rs."+Math.round(balance40);

principle=balance40;
interest41=(principle*interest/100)/48;
pr41=E48-interest41;
balance41=principle-pr41;
totalint=totalint+interest41;

newwindow.document.getElementById("emi41").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest41").innerHTML="Rs."+Math.round(interest41);
newwindow.document.getElementById("pr41").innerHTML="Rs."+Math.round(pr41);
newwindow.document.getElementById("balance41").innerHTML="Rs."+Math.round(balance41);

principle=balance41;
interest42=(principle*interest/100)/48;
pr42=E48-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest42=(principle*interest/100)/48;
pr42=E48-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest43=(principle*interest/100)/48;
pr43=E48-interest43;
balance43=principle-pr43;
totalint=totalint+interest43;

newwindow.document.getElementById("emi43").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest43").innerHTML="Rs."+Math.round(interest43);
newwindow.document.getElementById("pr43").innerHTML="Rs."+Math.round(pr43);
newwindow.document.getElementById("balance43").innerHTML="Rs."+Math.round(balance43);

principle=balance43;
interest44=(principle*interest/100)/48;
pr44=E48-interest44;
balance44=principle-pr44;
totalint=totalint+interest44;

newwindow.document.getElementById("emi44").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest44").innerHTML="Rs."+Math.round(interest44);
newwindow.document.getElementById("pr44").innerHTML="Rs."+Math.round(pr44);
newwindow.document.getElementById("balance44").innerHTML="Rs."+Math.round(balance44);

principle=balance44;
interest45=(principle*interest/100)/48;
pr45=E48-interest45;
balance45=principle-pr45;
totalint=totalint+interest45;

newwindow.document.getElementById("emi45").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest45").innerHTML="Rs."+Math.round(interest45);
newwindow.document.getElementById("pr45").innerHTML="Rs."+Math.round(pr45);
newwindow.document.getElementById("balance45").innerHTML="Rs."+Math.round(balance45);
principle=balance45;
interest46=(principle*interest/100)/48;
pr46=E48-interest46;
balance46=principle-pr46;
totalint=totalint+interest46;

newwindow.document.getElementById("emi46").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest46").innerHTML="Rs."+Math.round(interest46);
newwindow.document.getElementById("pr46").innerHTML="Rs."+Math.round(pr46);
newwindow.document.getElementById("balance46").innerHTML="Rs."+Math.round(balance46);

principle=balance45;
interest47=(principle*interest/100)/48;
pr47=E48-interest36;
balance47=principle-pr47;
totalint=totalint+interest47;

newwindow.document.getElementById("emi47").innerHTML="Rs."+E48+"/-";
newwindow.document.getElementById("interest47").innerHTML="Rs."+Math.round(interest47);
newwindow.document.getElementById("pr47").innerHTML="Rs."+Math.round(pr47);
newwindow.document.getElementById("balance47").innerHTML="Rs."+Math.round(balance47);


newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow48=Math.pow(ratet,36);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div12=pow12-1;
div24=pow24-1;
div36=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}

function showChart60m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi60.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 60 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow60=Math.pow(ratet,60);

div60=pow60-1;

E60=principle*rate*pow60/div60;
E60=Math.round(E60);

interest1=(principle*interest/100)/60;
pr1=E60-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/60;
pr2=E60-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/60;
pr3=E60-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/60;
pr4=E60-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/60;
pr5=E60-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/60;
pr6=E60-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/60;
pr7=E60-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/60;
pr8=E60-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/60;
pr9=E60-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/60;
pr10=E60-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/60;
pr11=E60-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/60;
pr12=E60-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/60;
pr13=E60-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/60;
pr14=E60-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/60;
pr15=E60-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/60;
pr16=E60-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/60;
pr17=E60-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/60;
pr18=E60-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/60;
pr19=E60-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/60;
pr20=E60-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/60;
pr21=E60-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/60;
pr22=E60-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/60;
pr23=E60-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/60;
pr24=E60-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

principle=balance24;
interest25=(principle*interest/100)/60;
pr25=E60-interest25;
balance25=principle-pr25;
totalint=totalint+interest25;

newwindow.document.getElementById("emi25").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest25").innerHTML="Rs."+Math.round(interest25);
newwindow.document.getElementById("pr25").innerHTML="Rs."+Math.round(pr25);
newwindow.document.getElementById("balance25").innerHTML="Rs."+Math.round(balance25);

principle=balance25;
interest26=(principle*interest/100)/60;
pr26=E60-interest24;
balance26=principle-pr26;
totalint=totalint+interest26;

newwindow.document.getElementById("emi26").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest26").innerHTML="Rs."+Math.round(interest26);
newwindow.document.getElementById("pr26").innerHTML="Rs."+Math.round(pr26);
newwindow.document.getElementById("balance26").innerHTML="Rs."+Math.round(balance26);

principle=balance26;
interest27=(principle*interest/100)/60;
pr27=E60-interest27;
balance27=principle-pr27;
totalint=totalint+interest27;

newwindow.document.getElementById("emi27").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest27").innerHTML="Rs."+Math.round(interest27);
newwindow.document.getElementById("pr27").innerHTML="Rs."+Math.round(pr27);
newwindow.document.getElementById("balance27").innerHTML="Rs."+Math.round(balance27);

principle=balance27;
interest28=(principle*interest/100)/60;
pr28=E60-interest28;
balance28=principle-pr28;
totalint=totalint+interest28;

newwindow.document.getElementById("emi28").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest28").innerHTML="Rs."+Math.round(interest28);
newwindow.document.getElementById("pr28").innerHTML="Rs."+Math.round(pr28);
newwindow.document.getElementById("balance28").innerHTML="Rs."+Math.round(balance28);

principle=balance28;
interest29=(principle*interest/100)/60;
pr29=E60-interest29;
balance29=principle-pr29;
totalint=totalint+interest29;

newwindow.document.getElementById("emi29").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest29").innerHTML="Rs."+Math.round(interest29);
newwindow.document.getElementById("pr29").innerHTML="Rs."+Math.round(pr29);
newwindow.document.getElementById("balance29").innerHTML="Rs."+Math.round(balance29);

principle=balance29;
interest30=(principle*interest/100)/60;
pr30=E60-interest30;
balance30=principle-pr30;
totalint=totalint+interest30;

newwindow.document.getElementById("emi30").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest30").innerHTML="Rs."+Math.round(interest30);
newwindow.document.getElementById("pr30").innerHTML="Rs."+Math.round(pr30);
newwindow.document.getElementById("balance30").innerHTML="Rs."+Math.round(balance30);

principle=balance30;
interest31=(principle*interest/100)/60;
pr31=E60-interest31;
balance31=principle-pr31;
totalint=totalint+interest31;

newwindow.document.getElementById("emi31").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest31").innerHTML="Rs."+Math.round(interest31);
newwindow.document.getElementById("pr31").innerHTML="Rs."+Math.round(pr31);
newwindow.document.getElementById("balance31").innerHTML="Rs."+Math.round(balance31);

principle=balance31;
interest32=(principle*interest/100)/60;
pr32=E60-interest32;
balance32=principle-pr32;
totalint=totalint+interest32;

newwindow.document.getElementById("emi32").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest32").innerHTML="Rs."+Math.round(interest32);
newwindow.document.getElementById("pr32").innerHTML="Rs."+Math.round(pr32);
newwindow.document.getElementById("balance32").innerHTML="Rs."+Math.round(balance32);

principle=balance32;
interest33=(principle*interest/100)/60;
pr33=E60-interest33;
balance33=principle-pr33;
totalint=totalint+interest33;

newwindow.document.getElementById("emi33").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest33").innerHTML="Rs."+Math.round(interest33);
newwindow.document.getElementById("pr33").innerHTML="Rs."+Math.round(pr33);
newwindow.document.getElementById("balance33").innerHTML="Rs."+Math.round(balance33);

principle=balance33;
interest34=(principle*interest/100)/60;
pr34=E60-interest34;
balance34=principle-pr34;
totalint=totalint+interest34;

newwindow.document.getElementById("emi34").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest34").innerHTML="Rs."+Math.round(interest34);
newwindow.document.getElementById("pr34").innerHTML="Rs."+Math.round(pr34);
newwindow.document.getElementById("balance34").innerHTML="Rs."+Math.round(balance34);

principle=balance34;
interest35=(principle*interest/100)/60;
pr35=E60-interest35;
balance35=principle-pr35;
totalint=totalint+interest35;

newwindow.document.getElementById("emi35").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest35").innerHTML="Rs."+Math.round(interest35);
newwindow.document.getElementById("pr35").innerHTML="Rs."+Math.round(pr35);
newwindow.document.getElementById("balance35").innerHTML="Rs."+Math.round(balance35);

principle=balance35;
interest36=(principle*interest/100)/60;
pr36=E60-interest36;
balance36=principle-pr36;
totalint=totalint+interest36;

newwindow.document.getElementById("emi36").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest36").innerHTML="Rs."+Math.round(interest36);
newwindow.document.getElementById("pr36").innerHTML="Rs."+Math.round(pr36);
newwindow.document.getElementById("balance36").innerHTML="Rs."+Math.round(balance36);

principle=balance36;
interest37=(principle*interest/100)/60;
pr37=E60-interest37;
balance37=principle-pr37;
totalint=totalint+interest37;

newwindow.document.getElementById("emi37").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest37").innerHTML="Rs."+Math.round(interest37);
newwindow.document.getElementById("pr37").innerHTML="Rs."+Math.round(pr37);
newwindow.document.getElementById("balance37").innerHTML="Rs."+Math.round(balance37);

principle=balance37;
interest38=(principle*interest/100)/60;
pr38=E60-interest38;
balance38=principle-pr38;
totalint=totalint+interest38;

newwindow.document.getElementById("emi38").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest38").innerHTML="Rs."+Math.round(interest38);
newwindow.document.getElementById("pr38").innerHTML="Rs."+Math.round(pr38);
newwindow.document.getElementById("balance38").innerHTML="Rs."+Math.round(balance38);

principle=balance38;
interest39=(principle*interest/100)/60;
pr39=E60-interest39;
balance39=principle-pr39;
totalint=totalint+interest39;

newwindow.document.getElementById("emi39").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest39").innerHTML="Rs."+Math.round(interest39);
newwindow.document.getElementById("pr39").innerHTML="Rs."+Math.round(pr39);
newwindow.document.getElementById("balance39").innerHTML="Rs."+Math.round(balance39);

principle=balance39;
interest40=(principle*interest/100)/60;
pr40=E60-interest40;
balance40=principle-pr40;
totalint=totalint+interest40;

newwindow.document.getElementById("emi40").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest40").innerHTML="Rs."+Math.round(interest40);
newwindow.document.getElementById("pr40").innerHTML="Rs."+Math.round(pr40);
newwindow.document.getElementById("balance40").innerHTML="Rs."+Math.round(balance40);

principle=balance40;
interest41=(principle*interest/100)/60;
pr41=E60-interest41;
balance41=principle-pr41;
totalint=totalint+interest41;

newwindow.document.getElementById("emi41").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest41").innerHTML="Rs."+Math.round(interest41);
newwindow.document.getElementById("pr41").innerHTML="Rs."+Math.round(pr41);
newwindow.document.getElementById("balance41").innerHTML="Rs."+Math.round(balance41);

principle=balance41;
interest42=(principle*interest/100)/60;
pr42=E60-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest42=(principle*interest/100)/60;
pr42=E60-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest43=(principle*interest/100)/60;
pr43=E60-interest43;
balance43=principle-pr43;
totalint=totalint+interest43;

newwindow.document.getElementById("emi43").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest43").innerHTML="Rs."+Math.round(interest43);
newwindow.document.getElementById("pr43").innerHTML="Rs."+Math.round(pr43);
newwindow.document.getElementById("balance43").innerHTML="Rs."+Math.round(balance43);

principle=balance43;
interest44=(principle*interest/100)/60;
pr44=E60-interest44;
balance44=principle-pr44;
totalint=totalint+interest44;

newwindow.document.getElementById("emi44").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest44").innerHTML="Rs."+Math.round(interest44);
newwindow.document.getElementById("pr44").innerHTML="Rs."+Math.round(pr44);
newwindow.document.getElementById("balance44").innerHTML="Rs."+Math.round(balance44);

principle=balance44;
interest45=(principle*interest/100)/60;
pr45=E60-interest45;
balance45=principle-pr45;
totalint=totalint+interest45;

newwindow.document.getElementById("emi45").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest45").innerHTML="Rs."+Math.round(interest45);
newwindow.document.getElementById("pr45").innerHTML="Rs."+Math.round(pr45);
newwindow.document.getElementById("balance45").innerHTML="Rs."+Math.round(balance45);
principle=balance45;
interest46=(principle*interest/100)/60;
pr46=E60-interest46;
balance46=principle-pr46;
totalint=totalint+interest46;

newwindow.document.getElementById("emi46").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest46").innerHTML="Rs."+Math.round(interest46);
newwindow.document.getElementById("pr46").innerHTML="Rs."+Math.round(pr46);
newwindow.document.getElementById("balance46").innerHTML="Rs."+Math.round(balance46);

principle=balance45;
interest47=(principle*interest/100)/60;
pr47=E60-interest47;
balance47=principle-pr47;
totalint=totalint+interest47;

newwindow.document.getElementById("emi47").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest47").innerHTML="Rs."+Math.round(interest47);
newwindow.document.getElementById("pr47").innerHTML="Rs."+Math.round(pr47);
newwindow.document.getElementById("balance47").innerHTML="Rs."+Math.round(balance47);

principle=balance47;
interest48=(principle*interest/100)/60;
pr48=E60-interest48;
balance48=principle-pr48;
totalint=totalint+interest48;

newwindow.document.getElementById("emi48").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest48").innerHTML="Rs."+Math.round(interest48);
newwindow.document.getElementById("pr48").innerHTML="Rs."+Math.round(pr48);
newwindow.document.getElementById("balance48").innerHTML="Rs."+Math.round(balance48);

principle=balance48;
interest49=(principle*interest/100)/60;
pr49=E60-interest49;
balance49=principle-pr49;
totalint=totalint+interest49;

newwindow.document.getElementById("emi49").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest49").innerHTML="Rs."+Math.round(interest49);
newwindow.document.getElementById("pr49").innerHTML="Rs."+Math.round(pr49);
newwindow.document.getElementById("balance49").innerHTML="Rs."+Math.round(balance49);

principle=balance49;
interest50=(principle*interest/100)/60;
pr50=E60-interest50;
balance50=principle-pr50;
totalint=totalint+interest50;

newwindow.document.getElementById("emi50").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest50").innerHTML="Rs."+Math.round(interest50);
newwindow.document.getElementById("pr50").innerHTML="Rs."+Math.round(pr50);
newwindow.document.getElementById("balance50").innerHTML="Rs."+Math.round(balance50);

principle=balance50;
interest51=(principle*interest/100)/60;
pr51=E60-interest51;
balance51=principle-pr51;
totalint=totalint+interest51;

newwindow.document.getElementById("emi51").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest51").innerHTML="Rs."+Math.round(interest51);
newwindow.document.getElementById("pr51").innerHTML="Rs."+Math.round(pr51);
newwindow.document.getElementById("balance51").innerHTML="Rs."+Math.round(balance51);

principle=balance51;
interest52=(principle*interest/100)/60;
pr52=E60-interest52;
balance52=principle-pr52;
totalint=totalint+interest52;

newwindow.document.getElementById("emi52").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest52").innerHTML="Rs."+Math.round(interest52);
newwindow.document.getElementById("pr52").innerHTML="Rs."+Math.round(pr52);
newwindow.document.getElementById("balance52").innerHTML="Rs."+Math.round(balance52);

principle=balance52;
interest53=(principle*interest/100)/60;
pr53=E60-interest53;
balance53=principle-pr53;
totalint=totalint+interest53;

newwindow.document.getElementById("emi53").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest53").innerHTML="Rs."+Math.round(interest53);
newwindow.document.getElementById("pr53").innerHTML="Rs."+Math.round(pr53);
newwindow.document.getElementById("balance53").innerHTML="Rs."+Math.round(balance53);

principle=balance53;
interest54=(principle*interest/100)/60;
pr54=E60-interest54;
balance54=principle-pr54;
totalint=totalint+interest54;

newwindow.document.getElementById("emi54").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest54").innerHTML="Rs."+Math.round(interest54);
newwindow.document.getElementById("pr54").innerHTML="Rs."+Math.round(pr54);
newwindow.document.getElementById("balance54").innerHTML="Rs."+Math.round(balance54);

principle=balance54;
interest55=(principle*interest/100)/60;
pr55=E60-interest55;
balance55=principle-pr55;
totalint=totalint+interest55;

newwindow.document.getElementById("emi55").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest55").innerHTML="Rs."+Math.round(interest55);
newwindow.document.getElementById("pr55").innerHTML="Rs."+Math.round(pr55);
newwindow.document.getElementById("balance55").innerHTML="Rs."+Math.round(balance55);

principle=balance55;
interest56=(principle*interest/100)/60;
pr56=E60-interest56;
balance56=principle-pr56;
totalint=totalint+interest56;

newwindow.document.getElementById("emi56").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest56").innerHTML="Rs."+Math.round(interest56);
newwindow.document.getElementById("pr56").innerHTML="Rs."+Math.round(pr56);
newwindow.document.getElementById("balance56").innerHTML="Rs."+Math.round(balance56);

principle=balance56;
interest57=(principle*interest/100)/60;
pr57=E60-interest57;
balance57=principle-pr57;
totalint=totalint+interest57;

newwindow.document.getElementById("emi57").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest57").innerHTML="Rs."+Math.round(interest57);
newwindow.document.getElementById("pr57").innerHTML="Rs."+Math.round(pr57);
newwindow.document.getElementById("balance57").innerHTML="Rs."+Math.round(balance57);
principle=balance57;
interest58=(principle*interest/100)/60;
pr58=E60-interest58;
balance58=principle-pr58;
totalint=totalint+interest58;

newwindow.document.getElementById("emi58").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest58").innerHTML="Rs."+Math.round(interest58);
newwindow.document.getElementById("pr58").innerHTML="Rs."+Math.round(pr58);
newwindow.document.getElementById("balance58").innerHTML="Rs."+Math.round(balance58);

principle=balance58;
interest59=(principle*interest/100)/60;
pr59=E60-interest59;
balance59=principle-pr59;
totalint=totalint+interest59;

newwindow.document.getElementById("emi59").innerHTML="Rs."+E60+"/-";
newwindow.document.getElementById("interest59").innerHTML="Rs."+Math.round(interest59);
newwindow.document.getElementById("pr59").innerHTML="Rs."+Math.round(pr59);
newwindow.document.getElementById("balance59").innerHTML="Rs."+Math.round(balance59);


newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);
pow84=Math.pow(ratet,84);

div12=pow12-1;
div24=pow24-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;
div84=pow84-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}

function showChart72m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi72.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 72 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow72=Math.pow(ratet,72);

div72=pow72-1;

E72=principle*rate*pow60/div72;
E72=Math.round(E72);

interest1=(principle*interest/100)/72;
pr1=E72-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/72;
pr2=E72-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/72;
pr3=E72-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/72;
pr4=E72-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/72;
pr5=E72-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/72;
pr6=E72-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/72;
pr7=E72-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/72;
pr8=E72-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/72;
pr9=E72-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/72;
pr10=E72-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/72;
pr11=E72-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/72;
pr12=E72-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/72;
pr13=E72-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/72;
pr14=E72-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/72;
pr15=E72-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/72;
pr16=E72-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/72;
pr17=E72-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/72;
pr18=E72-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/72;
pr19=E72-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/72;
pr20=E72-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/72;
pr21=E72-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/72;
pr22=E72-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/72;
pr23=E72-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/72;
pr24=E72-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

principle=balance24;
interest25=(principle*interest/100)/72;
pr25=E72-interest25;
balance25=principle-pr25;
totalint=totalint+interest25;

newwindow.document.getElementById("emi25").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest25").innerHTML="Rs."+Math.round(interest25);
newwindow.document.getElementById("pr25").innerHTML="Rs."+Math.round(pr25);
newwindow.document.getElementById("balance25").innerHTML="Rs."+Math.round(balance25);

principle=balance25;
interest26=(principle*interest/100)/72;
pr26=E72-interest24;
balance26=principle-pr26;
totalint=totalint+interest26;

newwindow.document.getElementById("emi26").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest26").innerHTML="Rs."+Math.round(interest26);
newwindow.document.getElementById("pr26").innerHTML="Rs."+Math.round(pr26);
newwindow.document.getElementById("balance26").innerHTML="Rs."+Math.round(balance26);

principle=balance26;
interest27=(principle*interest/100)/72;
pr27=E72-interest27;
balance27=principle-pr27;
totalint=totalint+interest27;

newwindow.document.getElementById("emi27").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest27").innerHTML="Rs."+Math.round(interest27);
newwindow.document.getElementById("pr27").innerHTML="Rs."+Math.round(pr27);
newwindow.document.getElementById("balance27").innerHTML="Rs."+Math.round(balance27);

principle=balance27;
interest28=(principle*interest/100)/72;
pr28=E72-interest28;
balance28=principle-pr28;
totalint=totalint+interest28;

newwindow.document.getElementById("emi28").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest28").innerHTML="Rs."+Math.round(interest28);
newwindow.document.getElementById("pr28").innerHTML="Rs."+Math.round(pr28);
newwindow.document.getElementById("balance28").innerHTML="Rs."+Math.round(balance28);

principle=balance28;
interest29=(principle*interest/100)/72;
pr29=E72-interest29;
balance29=principle-pr29;
totalint=totalint+interest29;

newwindow.document.getElementById("emi29").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest29").innerHTML="Rs."+Math.round(interest29);
newwindow.document.getElementById("pr29").innerHTML="Rs."+Math.round(pr29);
newwindow.document.getElementById("balance29").innerHTML="Rs."+Math.round(balance29);

principle=balance29;
interest30=(principle*interest/100)/72;
pr30=E72-interest30;
balance30=principle-pr30;
totalint=totalint+interest30;

newwindow.document.getElementById("emi30").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest30").innerHTML="Rs."+Math.round(interest30);
newwindow.document.getElementById("pr30").innerHTML="Rs."+Math.round(pr30);
newwindow.document.getElementById("balance30").innerHTML="Rs."+Math.round(balance30);

principle=balance30;
interest31=(principle*interest/100)/72;
pr31=E72-interest31;
balance31=principle-pr31;
totalint=totalint+interest31;

newwindow.document.getElementById("emi31").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest31").innerHTML="Rs."+Math.round(interest31);
newwindow.document.getElementById("pr31").innerHTML="Rs."+Math.round(pr31);
newwindow.document.getElementById("balance31").innerHTML="Rs."+Math.round(balance31);

principle=balance31;
interest32=(principle*interest/100)/72;
pr32=E72-interest32;
balance32=principle-pr32;
totalint=totalint+interest32;

newwindow.document.getElementById("emi32").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest32").innerHTML="Rs."+Math.round(interest32);
newwindow.document.getElementById("pr32").innerHTML="Rs."+Math.round(pr32);
newwindow.document.getElementById("balance32").innerHTML="Rs."+Math.round(balance32);

principle=balance32;
interest33=(principle*interest/100)/72;
pr33=E72-interest33;
balance33=principle-pr33;
totalint=totalint+interest33;

newwindow.document.getElementById("emi33").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest33").innerHTML="Rs."+Math.round(interest33);
newwindow.document.getElementById("pr33").innerHTML="Rs."+Math.round(pr33);
newwindow.document.getElementById("balance33").innerHTML="Rs."+Math.round(balance33);

principle=balance33;
interest34=(principle*interest/100)/72;
pr34=E72-interest34;
balance34=principle-pr34;
totalint=totalint+interest34;

newwindow.document.getElementById("emi34").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest34").innerHTML="Rs."+Math.round(interest34);
newwindow.document.getElementById("pr34").innerHTML="Rs."+Math.round(pr34);
newwindow.document.getElementById("balance34").innerHTML="Rs."+Math.round(balance34);

principle=balance34;
interest35=(principle*interest/100)/72;
pr35=E72-interest35;
balance35=principle-pr35;
totalint=totalint+interest35;

newwindow.document.getElementById("emi35").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest35").innerHTML="Rs."+Math.round(interest35);
newwindow.document.getElementById("pr35").innerHTML="Rs."+Math.round(pr35);
newwindow.document.getElementById("balance35").innerHTML="Rs."+Math.round(balance35);

principle=balance35;
interest36=(principle*interest/100)/72;
pr36=E72-interest36;
balance36=principle-pr36;
totalint=totalint+interest36;

newwindow.document.getElementById("emi36").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest36").innerHTML="Rs."+Math.round(interest36);
newwindow.document.getElementById("pr36").innerHTML="Rs."+Math.round(pr36);
newwindow.document.getElementById("balance36").innerHTML="Rs."+Math.round(balance36);

principle=balance36;
interest37=(principle*interest/100)/72;
pr37=E72-interest37;
balance37=principle-pr37;
totalint=totalint+interest37;

newwindow.document.getElementById("emi37").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest37").innerHTML="Rs."+Math.round(interest37);
newwindow.document.getElementById("pr37").innerHTML="Rs."+Math.round(pr37);
newwindow.document.getElementById("balance37").innerHTML="Rs."+Math.round(balance37);

principle=balance37;
interest38=(principle*interest/100)/72;
pr38=E72-interest38;
balance38=principle-pr38;
totalint=totalint+interest38;

newwindow.document.getElementById("emi38").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest38").innerHTML="Rs."+Math.round(interest38);
newwindow.document.getElementById("pr38").innerHTML="Rs."+Math.round(pr38);
newwindow.document.getElementById("balance38").innerHTML="Rs."+Math.round(balance38);

principle=balance38;
interest39=(principle*interest/100)/72;
pr39=E72-interest39;
balance39=principle-pr39;
totalint=totalint+interest39;

newwindow.document.getElementById("emi39").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest39").innerHTML="Rs."+Math.round(interest39);
newwindow.document.getElementById("pr39").innerHTML="Rs."+Math.round(pr39);
newwindow.document.getElementById("balance39").innerHTML="Rs."+Math.round(balance39);

principle=balance39;
interest40=(principle*interest/100)/72;
pr40=E72-interest40;
balance40=principle-pr40;
totalint=totalint+interest40;

newwindow.document.getElementById("emi40").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest40").innerHTML="Rs."+Math.round(interest40);
newwindow.document.getElementById("pr40").innerHTML="Rs."+Math.round(pr40);
newwindow.document.getElementById("balance40").innerHTML="Rs."+Math.round(balance40);

principle=balance40;
interest41=(principle*interest/100)/72;
pr41=E72-interest41;
balance41=principle-pr41;
totalint=totalint+interest41;

newwindow.document.getElementById("emi41").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest41").innerHTML="Rs."+Math.round(interest41);
newwindow.document.getElementById("pr41").innerHTML="Rs."+Math.round(pr41);
newwindow.document.getElementById("balance41").innerHTML="Rs."+Math.round(balance41);

principle=balance41;
interest42=(principle*interest/100)/72;
pr42=E72-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest42=(principle*interest/100)/72;
pr42=E72-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest43=(principle*interest/100)/72;
pr43=E72-interest43;
balance43=principle-pr43;
totalint=totalint+interest43;

newwindow.document.getElementById("emi43").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest43").innerHTML="Rs."+Math.round(interest43);
newwindow.document.getElementById("pr43").innerHTML="Rs."+Math.round(pr43);
newwindow.document.getElementById("balance43").innerHTML="Rs."+Math.round(balance43);

principle=balance43;
interest44=(principle*interest/100)/72;
pr44=E72-interest44;
balance44=principle-pr44;
totalint=totalint+interest44;

newwindow.document.getElementById("emi44").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest44").innerHTML="Rs."+Math.round(interest44);
newwindow.document.getElementById("pr44").innerHTML="Rs."+Math.round(pr44);
newwindow.document.getElementById("balance44").innerHTML="Rs."+Math.round(balance44);

principle=balance44;
interest45=(principle*interest/100)/72;
pr45=E72-interest45;
balance45=principle-pr45;
totalint=totalint+interest45;

newwindow.document.getElementById("emi45").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest45").innerHTML="Rs."+Math.round(interest45);
newwindow.document.getElementById("pr45").innerHTML="Rs."+Math.round(pr45);
newwindow.document.getElementById("balance45").innerHTML="Rs."+Math.round(balance45);
principle=balance45;
interest46=(principle*interest/100)/72;
pr46=E72-interest46;
balance46=principle-pr46;
totalint=totalint+interest46;

newwindow.document.getElementById("emi46").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest46").innerHTML="Rs."+Math.round(interest46);
newwindow.document.getElementById("pr46").innerHTML="Rs."+Math.round(pr46);
newwindow.document.getElementById("balance46").innerHTML="Rs."+Math.round(balance46);

principle=balance45;
interest47=(principle*interest/100)/72;
pr47=E72-interest47;
balance47=principle-pr47;
totalint=totalint+interest47;

newwindow.document.getElementById("emi47").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest47").innerHTML="Rs."+Math.round(interest47);
newwindow.document.getElementById("pr47").innerHTML="Rs."+Math.round(pr47);
newwindow.document.getElementById("balance47").innerHTML="Rs."+Math.round(balance47);

principle=balance47;
interest48=(principle*interest/100)/72;
pr48=E72-interest48;
balance48=principle-pr48;
totalint=totalint+interest48;

newwindow.document.getElementById("emi48").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest48").innerHTML="Rs."+Math.round(interest48);
newwindow.document.getElementById("pr48").innerHTML="Rs."+Math.round(pr48);
newwindow.document.getElementById("balance48").innerHTML="Rs."+Math.round(balance48);

principle=balance48;
interest49=(principle*interest/100)/72;
pr49=E72-interest49;
balance49=principle-pr49;
totalint=totalint+interest49;

newwindow.document.getElementById("emi49").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest49").innerHTML="Rs."+Math.round(interest49);
newwindow.document.getElementById("pr49").innerHTML="Rs."+Math.round(pr49);
newwindow.document.getElementById("balance49").innerHTML="Rs."+Math.round(balance49);

principle=balance49;
interest50=(principle*interest/100)/72;
pr50=E72-interest50;
balance50=principle-pr50;
totalint=totalint+interest50;

newwindow.document.getElementById("emi50").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest50").innerHTML="Rs."+Math.round(interest50);
newwindow.document.getElementById("pr50").innerHTML="Rs."+Math.round(pr50);
newwindow.document.getElementById("balance50").innerHTML="Rs."+Math.round(balance50);

principle=balance50;
interest51=(principle*interest/100)/72;
pr51=E72-interest51;
balance51=principle-pr51;
totalint=totalint+interest51;

newwindow.document.getElementById("emi51").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest51").innerHTML="Rs."+Math.round(interest51);
newwindow.document.getElementById("pr51").innerHTML="Rs."+Math.round(pr51);
newwindow.document.getElementById("balance51").innerHTML="Rs."+Math.round(balance51);

principle=balance51;
interest52=(principle*interest/100)/72;
pr52=E72-interest52;
balance52=principle-pr52;
totalint=totalint+interest52;

newwindow.document.getElementById("emi52").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest52").innerHTML="Rs."+Math.round(interest52);
newwindow.document.getElementById("pr52").innerHTML="Rs."+Math.round(pr52);
newwindow.document.getElementById("balance52").innerHTML="Rs."+Math.round(balance52);

principle=balance52;
interest53=(principle*interest/100)/72;
pr53=E72-interest53;
balance53=principle-pr53;
totalint=totalint+interest53;

newwindow.document.getElementById("emi53").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest53").innerHTML="Rs."+Math.round(interest53);
newwindow.document.getElementById("pr53").innerHTML="Rs."+Math.round(pr53);
newwindow.document.getElementById("balance53").innerHTML="Rs."+Math.round(balance53);

principle=balance53;
interest54=(principle*interest/100)/72;
pr54=E72-interest54;
balance54=principle-pr54;
totalint=totalint+interest54;

newwindow.document.getElementById("emi54").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest54").innerHTML="Rs."+Math.round(interest54);
newwindow.document.getElementById("pr54").innerHTML="Rs."+Math.round(pr54);
newwindow.document.getElementById("balance54").innerHTML="Rs."+Math.round(balance54);

principle=balance54;
interest55=(principle*interest/100)/72;
pr55=E72-interest55;
balance55=principle-pr55;
totalint=totalint+interest55;

newwindow.document.getElementById("emi55").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest55").innerHTML="Rs."+Math.round(interest55);
newwindow.document.getElementById("pr55").innerHTML="Rs."+Math.round(pr55);
newwindow.document.getElementById("balance55").innerHTML="Rs."+Math.round(balance55);

principle=balance55;
interest56=(principle*interest/100)/72;
pr56=E72-interest56;
balance56=principle-pr56;
totalint=totalint+interest56;

newwindow.document.getElementById("emi56").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest56").innerHTML="Rs."+Math.round(interest56);
newwindow.document.getElementById("pr56").innerHTML="Rs."+Math.round(pr56);
newwindow.document.getElementById("balance56").innerHTML="Rs."+Math.round(balance56);

principle=balance56;
interest57=(principle*interest/100)/72;
pr57=E72-interest57;
balance57=principle-pr57;
totalint=totalint+interest57;

newwindow.document.getElementById("emi57").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest57").innerHTML="Rs."+Math.round(interest57);
newwindow.document.getElementById("pr57").innerHTML="Rs."+Math.round(pr57);
newwindow.document.getElementById("balance57").innerHTML="Rs."+Math.round(balance57);
principle=balance57;
interest58=(principle*interest/100)/72;
pr58=E72-interest58;
balance58=principle-pr58;
totalint=totalint+interest58;

newwindow.document.getElementById("emi58").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest58").innerHTML="Rs."+Math.round(interest58);
newwindow.document.getElementById("pr58").innerHTML="Rs."+Math.round(pr58);
newwindow.document.getElementById("balance58").innerHTML="Rs."+Math.round(balance58);

principle=balance58;
interest59=(principle*interest/100)/72;
pr59=E72-interest59;
balance59=principle-pr59;
totalint=totalint+interest59;

newwindow.document.getElementById("emi59").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest59").innerHTML="Rs."+Math.round(interest59);
newwindow.document.getElementById("pr59").innerHTML="Rs."+Math.round(pr59);
newwindow.document.getElementById("balance59").innerHTML="Rs."+Math.round(balance59);

principle=balance59;
interest60=(principle*interest/100)/72;
pr60=E72-interest60;
balance59=principle-pr60;
totalint=totalint+interest60;

newwindow.document.getElementById("emi60").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest60").innerHTML="Rs."+Math.round(interest60);
newwindow.document.getElementById("pr60").innerHTML="Rs."+Math.round(pr60);
newwindow.document.getElementById("balance60").innerHTML="Rs."+Math.round(balance60);

principle=balance60;
interest61=(principle*interest/100)/72;
pr61=E72-interest61;
balance61=principle-pr61;
totalint=totalint+interest61;

newwindow.document.getElementById("emi61").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest61").innerHTML="Rs."+Math.round(interest61);
newwindow.document.getElementById("pr61").innerHTML="Rs."+Math.round(pr61);
newwindow.document.getElementById("balance61").innerHTML="Rs."+Math.round(balance61);

principle=balance61;
interest62=(principle*interest/100)/72;
pr62=E72-interest62;
balance62=principle-pr62;
totalint=totalint+interest62;

newwindow.document.getElementById("emi62").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest62").innerHTML="Rs."+Math.round(interest62);
newwindow.document.getElementById("pr62").innerHTML="Rs."+Math.round(pr62);
newwindow.document.getElementById("balance62").innerHTML="Rs."+Math.round(balance62);

principle=balance62;
interest63=(principle*interest/100)/72;
pr63=E72-interest63;
balance63=principle-pr63;
totalint=totalint+interest63;

newwindow.document.getElementById("emi63").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest63").innerHTML="Rs."+Math.round(interest63);
newwindow.document.getElementById("pr63").innerHTML="Rs."+Math.round(pr63);
newwindow.document.getElementById("balance63").innerHTML="Rs."+Math.round(balance63);

principle=balance63;
interest64=(principle*interest/100)/72;
pr64=E72-interest64;
balance64=principle-pr64;
totalint=totalint+interest64;

newwindow.document.getElementById("emi64").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest64").innerHTML="Rs."+Math.round(interest64);
newwindow.document.getElementById("pr64").innerHTML="Rs."+Math.round(pr64);
newwindow.document.getElementById("balance64").innerHTML="Rs."+Math.round(balance64);

principle=balance64;
interest65=(principle*interest/100)/72;
pr65=E72-interest65;
balance65=principle-pr65;
totalint=totalint+interest65;

newwindow.document.getElementById("emi65").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest65").innerHTML="Rs."+Math.round(interest65);
newwindow.document.getElementById("pr65").innerHTML="Rs."+Math.round(pr65);
newwindow.document.getElementById("balance65").innerHTML="Rs."+Math.round(balance65);
principle=balance66;
interest66=(principle*interest/100)/72;
pr66=E72-interest66;
balance66=principle-pr66;
totalint=totalint+interest66;

newwindow.document.getElementById("emi66").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest66").innerHTML="Rs."+Math.round(interest66);
newwindow.document.getElementById("pr66").innerHTML="Rs."+Math.round(pr66);
newwindow.document.getElementById("balance66").innerHTML="Rs."+Math.round(balance66);

principle=balance66;
interest67=(principle*interest/100)/72;
pr67=E72-interest67;
balance67=principle-pr67;
totalint=totalint+interest67;

newwindow.document.getElementById("emi67").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest67").innerHTML="Rs."+Math.round(interest67);
newwindow.document.getElementById("pr67").innerHTML="Rs."+Math.round(pr67);
newwindow.document.getElementById("balance67").innerHTML="Rs."+Math.round(balance67);

principle=balance67;
interest68=(principle*interest/100)/72;
pr68=E72-interest68;
balance68=principle-pr68;
totalint=totalint+interest68;

newwindow.document.getElementById("emi68").innerHTML="Rs."+E72+"/-";
newwindow.document.getElementById("interest68").innerHTML="Rs."+Math.round(interest68);
newwindow.document.getElementById("pr68").innerHTML="Rs."+Math.round(pr68);
newwindow.document.getElementById("balance68").innerHTML="Rs."+Math.round(balance68);


newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);

pow84=Math.pow(ratet,84);

div12=pow12-1;
div24=pow24-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div84=pow84-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E84=(principlem*rate*pow84)/(div84);
E84=Math.round(E84);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}

function showChart84m(){

var principle=document.getElementById("amount").value;
var interest=document.getElementById("interest").value;

if(principle=="" || principle==null)
{
alert("Please enter Loan Amount!");
document.getElementById("amount").focus();
return false;
}

if(interest=="" || interest==null)
{
alert("Please enter Rate of Interest!");
document.getElementById("interest").focus();
return false;
}
var newwindow=window.open("calcemi84.html");

newwindow.document.getElementById("head").innerHTML="Following Schedule is For : "+principle+" to repay in 72 months"+"<br>All calculations are based on EMI in Advance.";
principlem=principle;
var rate=interest/12/100;
ratet=rate+1;

pow84=Math.pow(ratet,84);

div84=pow84-1;

E84=principle*rate*pow84/div84;
E84=Math.round(E84);

interest1=(principle*interest/100)/84;
pr1=E84-interest1;
balance1=principle-pr1;
totalint=interest1;


newwindow.document.getElementById("emi1").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest1").innerHTML="Rs."+Math.round(interest1);
newwindow.document.getElementById("pr1").innerHTML="Rs."+Math.round(pr1);
newwindow.document.getElementById("balance1").innerHTML="Rs."+Math.round(balance1);

principle=balance1;
interest2=(principle*interest/100)/84;
pr2=E84-interest2;
balance2=principle-pr2;
totalint=totalint+interest2;

newwindow.document.getElementById("emi2").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest2").innerHTML="Rs."+Math.round(interest2);
newwindow.document.getElementById("pr2").innerHTML="Rs."+Math.round(pr2);
newwindow.document.getElementById("balance2").innerHTML="Rs."+Math.round(balance2);

principle=balance2;
interest3=(principle*interest/100)/84;
pr3=E84-interest3;
balance3=principle-pr3;
totalint=totalint+interest3;

newwindow.document.getElementById("emi3").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest3").innerHTML="Rs."+Math.round(interest3);
newwindow.document.getElementById("pr3").innerHTML="Rs."+Math.round(pr3);
newwindow.document.getElementById("balance3").innerHTML="Rs."+Math.round(balance3);

principle=balance3;
interest4=(principle*interest/100)/84;
pr4=E84-interest4;
balance4=principle-pr4;
totalint=totalint+interest4;

newwindow.document.getElementById("emi4").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest4").innerHTML="Rs."+Math.round(interest4);
newwindow.document.getElementById("pr4").innerHTML="Rs."+Math.round(pr4);
newwindow.document.getElementById("balance4").innerHTML="Rs."+Math.round(balance4);

principle=balance4;
interest5=(principle*interest/100)/84;
pr5=E84-interest5;
balance5=principle-pr5;
totalint=totalint+interest5;

newwindow.document.getElementById("emi5").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest5").innerHTML="Rs."+Math.round(interest5);
newwindow.document.getElementById("pr5").innerHTML="Rs."+Math.round(pr5);
newwindow.document.getElementById("balance5").innerHTML="Rs."+Math.round(balance5);

principle=balance5;
interest6=(principle*interest/100)/84;
pr6=E84-interest6;
balance6=principle-pr6;
totalint=totalint+interest6;

newwindow.document.getElementById("emi6").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest6").innerHTML="Rs."+Math.round(interest6);
newwindow.document.getElementById("pr6").innerHTML="Rs."+Math.round(pr6);
newwindow.document.getElementById("balance6").innerHTML="Rs."+Math.round(balance6);

principle=balance6;
interest7=(principle*interest/100)/84;
pr7=E84-interest7;
balance7=principle-pr7;
totalint=totalint+interest7;

newwindow.document.getElementById("emi7").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest7").innerHTML="Rs."+Math.round(interest7);
newwindow.document.getElementById("pr7").innerHTML="Rs."+Math.round(pr7);
newwindow.document.getElementById("balance7").innerHTML="Rs."+Math.round(balance7);

principle=balance7;
interest8=(principle*interest/100)/84;
pr8=E84-interest8;
balance8=principle-pr8;
totalint=totalint+interest8;

newwindow.document.getElementById("emi8").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest8").innerHTML="Rs."+Math.round(interest8);
newwindow.document.getElementById("pr8").innerHTML="Rs."+Math.round(pr8);
newwindow.document.getElementById("balance8").innerHTML="Rs."+Math.round(balance8);

principle=balance8;
interest9=(principle*interest/100)/84;
pr9=E84-interest9;
balance9=principle-pr9;
totalint=totalint+interest9;

newwindow.document.getElementById("emi9").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest9").innerHTML="Rs."+Math.round(interest9);
newwindow.document.getElementById("pr9").innerHTML="Rs."+Math.round(pr9);
newwindow.document.getElementById("balance9").innerHTML="Rs."+Math.round(balance9);

principle=balance9;
interest10=(principle*interest/100)/84;
pr10=E84-interest10;
balance10=principle-pr10;
totalint=totalint+interest10;

newwindow.document.getElementById("emi10").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest10").innerHTML="Rs."+Math.round(interest10);
newwindow.document.getElementById("pr10").innerHTML="Rs."+Math.round(pr10);
newwindow.document.getElementById("balance10").innerHTML="Rs."+Math.round(balance10);

principle=balance10;
interest11=(principle*interest/100)/84;
pr11=E84-interest11;
balance11=principle-pr11;
totalint=totalint+interest11;

newwindow.document.getElementById("emi11").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest11").innerHTML="Rs."+Math.round(interest11);
newwindow.document.getElementById("pr11").innerHTML="Rs."+Math.round(pr11);
newwindow.document.getElementById("balance11").innerHTML="Rs."+Math.round(balance11);

principle=balance11;
interest12=(principle*interest/100)/84;
pr12=E84-interest12;
balance12=principle-pr12;
totalint=totalint+interest12;

newwindow.document.getElementById("emi12").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest12").innerHTML="Rs."+Math.round(interest12);
newwindow.document.getElementById("pr12").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance12").innerHTML="Rs."+Math.round(balance12);

principle=balance12;
interest13=(principle*interest/100)/84;
pr13=E84-interest13;
balance13=principle-pr13;
totalint=totalint+interest13;

newwindow.document.getElementById("emi13").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest13").innerHTML="Rs."+Math.round(interest13);
newwindow.document.getElementById("pr13").innerHTML="Rs."+Math.round(pr13);
newwindow.document.getElementById("balance13").innerHTML="Rs."+Math.round(balance13);

principle=balance13;
interest14=(principle*interest/100)/84;
pr14=E84-interest14;
balance14=principle-pr14;
totalint=totalint+interest14;

newwindow.document.getElementById("emi14").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest14").innerHTML="Rs."+Math.round(interest14);
newwindow.document.getElementById("pr14").innerHTML="Rs."+Math.round(pr14);
newwindow.document.getElementById("balance14").innerHTML="Rs."+Math.round(balance14);

principle=balance14;
interest15=(principle*interest/100)/84;
pr15=E84-interest15;
balance15=principle-pr15;
totalint=totalint+interest15;

newwindow.document.getElementById("emi15").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest15").innerHTML="Rs."+Math.round(interest15);
newwindow.document.getElementById("pr15").innerHTML="Rs."+Math.round(pr15);
newwindow.document.getElementById("balance15").innerHTML="Rs."+Math.round(balance15);

principle=balance15;
interest16=(principle*interest/100)/84;
pr16=E84-interest16;
balance16=principle-pr16;
totalint=totalint+interest16;

newwindow.document.getElementById("emi16").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest16").innerHTML="Rs."+Math.round(interest16);
newwindow.document.getElementById("pr16").innerHTML="Rs."+Math.round(pr12);
newwindow.document.getElementById("balance16").innerHTML="Rs."+Math.round(balance16);

principle=balance16;
interest17=(principle*interest/100)/84;
pr17=E84-interest17;
balance17=principle-pr17;
totalint=totalint+interest17;

newwindow.document.getElementById("emi17").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest17").innerHTML="Rs."+Math.round(interest17);
newwindow.document.getElementById("pr17").innerHTML="Rs."+Math.round(pr17);
newwindow.document.getElementById("balance17").innerHTML="Rs."+Math.round(balance17);

principle=balance17;
interest18=(principle*interest/100)/84;
pr18=E84-interest18;
balance18=principle-pr18;
totalint=totalint+interest18;

newwindow.document.getElementById("emi18").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest18").innerHTML="Rs."+Math.round(interest18);
newwindow.document.getElementById("pr18").innerHTML="Rs."+Math.round(pr18);
newwindow.document.getElementById("balance18").innerHTML="Rs."+Math.round(balance18);

principle=balance18;
interest19=(principle*interest/100)/84;
pr19=E84-interest19;
balance19=principle-pr19;
totalint=totalint+interest19;

newwindow.document.getElementById("emi19").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest19").innerHTML="Rs."+Math.round(interest19);
newwindow.document.getElementById("pr19").innerHTML="Rs."+Math.round(pr19);
newwindow.document.getElementById("balance19").innerHTML="Rs."+Math.round(balance19);

principle=balance19;
interest20=(principle*interest/100)/84;
pr20=E84-interest20;
balance20=principle-pr20;
totalint=totalint+interest20;

newwindow.document.getElementById("emi20").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest20").innerHTML="Rs."+Math.round(interest20);
newwindow.document.getElementById("pr20").innerHTML="Rs."+Math.round(pr20);
newwindow.document.getElementById("balance20").innerHTML="Rs."+Math.round(balance20);

principle=balance20;
interest21=(principle*interest/100)/84;
pr21=E84-interest21;
balance21=principle-pr21;
totalint=totalint+interest21;

newwindow.document.getElementById("emi21").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest21").innerHTML="Rs."+Math.round(interest21);
newwindow.document.getElementById("pr21").innerHTML="Rs."+Math.round(pr21);
newwindow.document.getElementById("balance21").innerHTML="Rs."+Math.round(balance21);

principle=balance21;
interest22=(principle*interest/100)/84;
pr22=E84-interest22;
balance22=principle-pr22;
totalint=totalint+interest22;

newwindow.document.getElementById("emi22").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest22").innerHTML="Rs."+Math.round(interest22);
newwindow.document.getElementById("pr22").innerHTML="Rs."+Math.round(pr22);
newwindow.document.getElementById("balance22").innerHTML="Rs."+Math.round(balance22);

principle=balance22;
interest23=(principle*interest/100)/84;
pr23=E84-interest23;
balance23=principle-pr23;
totalint=totalint+interest23;

newwindow.document.getElementById("emi23").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest23").innerHTML="Rs."+Math.round(interest23);
newwindow.document.getElementById("pr23").innerHTML="Rs."+Math.round(pr23);
newwindow.document.getElementById("balance23").innerHTML="Rs."+Math.round(balance23);

principle=balance23;
interest24=(principle*interest/100)/84;
pr24=E84-interest24;
balance24=principle-pr24;
totalint=totalint+interest24;

newwindow.document.getElementById("emi24").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest24").innerHTML="Rs."+Math.round(interest24);
newwindow.document.getElementById("pr24").innerHTML="Rs."+Math.round(pr24);
newwindow.document.getElementById("balance24").innerHTML="Rs."+Math.round(balance24);

principle=balance24;
interest25=(principle*interest/100)/84;
pr25=E84-interest25;
balance25=principle-pr25;
totalint=totalint+interest25;

newwindow.document.getElementById("emi25").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest25").innerHTML="Rs."+Math.round(interest25);
newwindow.document.getElementById("pr25").innerHTML="Rs."+Math.round(pr25);
newwindow.document.getElementById("balance25").innerHTML="Rs."+Math.round(balance25);

principle=balance25;
interest26=(principle*interest/100)/84;
pr26=E84-interest24;
balance26=principle-pr26;
totalint=totalint+interest26;

newwindow.document.getElementById("emi26").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest26").innerHTML="Rs."+Math.round(interest26);
newwindow.document.getElementById("pr26").innerHTML="Rs."+Math.round(pr26);
newwindow.document.getElementById("balance26").innerHTML="Rs."+Math.round(balance26);

principle=balance26;
interest27=(principle*interest/100)/84;
pr27=E84-interest27;
balance27=principle-pr27;
totalint=totalint+interest27;

newwindow.document.getElementById("emi27").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest27").innerHTML="Rs."+Math.round(interest27);
newwindow.document.getElementById("pr27").innerHTML="Rs."+Math.round(pr27);
newwindow.document.getElementById("balance27").innerHTML="Rs."+Math.round(balance27);

principle=balance27;
interest28=(principle*interest/100)/84;
pr28=E84-interest28;
balance28=principle-pr28;
totalint=totalint+interest28;

newwindow.document.getElementById("emi28").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest28").innerHTML="Rs."+Math.round(interest28);
newwindow.document.getElementById("pr28").innerHTML="Rs."+Math.round(pr28);
newwindow.document.getElementById("balance28").innerHTML="Rs."+Math.round(balance28);

principle=balance28;
interest29=(principle*interest/100)/84;
pr29=E84-interest29;
balance29=principle-pr29;
totalint=totalint+interest29;

newwindow.document.getElementById("emi29").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest29").innerHTML="Rs."+Math.round(interest29);
newwindow.document.getElementById("pr29").innerHTML="Rs."+Math.round(pr29);
newwindow.document.getElementById("balance29").innerHTML="Rs."+Math.round(balance29);

principle=balance29;
interest30=(principle*interest/100)/84;
pr30=E84-interest30;
balance30=principle-pr30;
totalint=totalint+interest30;

newwindow.document.getElementById("emi30").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest30").innerHTML="Rs."+Math.round(interest30);
newwindow.document.getElementById("pr30").innerHTML="Rs."+Math.round(pr30);
newwindow.document.getElementById("balance30").innerHTML="Rs."+Math.round(balance30);

principle=balance30;
interest31=(principle*interest/100)/84;
pr31=E84-interest31;
balance31=principle-pr31;
totalint=totalint+interest31;

newwindow.document.getElementById("emi31").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest31").innerHTML="Rs."+Math.round(interest31);
newwindow.document.getElementById("pr31").innerHTML="Rs."+Math.round(pr31);
newwindow.document.getElementById("balance31").innerHTML="Rs."+Math.round(balance31);

principle=balance31;
interest32=(principle*interest/100)/84;
pr32=E84-interest32;
balance32=principle-pr32;
totalint=totalint+interest32;

newwindow.document.getElementById("emi32").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest32").innerHTML="Rs."+Math.round(interest32);
newwindow.document.getElementById("pr32").innerHTML="Rs."+Math.round(pr32);
newwindow.document.getElementById("balance32").innerHTML="Rs."+Math.round(balance32);

principle=balance32;
interest33=(principle*interest/100)/84;
pr33=E84-interest33;
balance33=principle-pr33;
totalint=totalint+interest33;

newwindow.document.getElementById("emi33").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest33").innerHTML="Rs."+Math.round(interest33);
newwindow.document.getElementById("pr33").innerHTML="Rs."+Math.round(pr33);
newwindow.document.getElementById("balance33").innerHTML="Rs."+Math.round(balance33);

principle=balance33;
interest34=(principle*interest/100)/84;
pr34=E84-interest34;
balance34=principle-pr34;
totalint=totalint+interest34;

newwindow.document.getElementById("emi34").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest34").innerHTML="Rs."+Math.round(interest34);
newwindow.document.getElementById("pr34").innerHTML="Rs."+Math.round(pr34);
newwindow.document.getElementById("balance34").innerHTML="Rs."+Math.round(balance34);

principle=balance34;
interest35=(principle*interest/100)/84;
pr35=E84-interest35;
balance35=principle-pr35;
totalint=totalint+interest35;

newwindow.document.getElementById("emi35").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest35").innerHTML="Rs."+Math.round(interest35);
newwindow.document.getElementById("pr35").innerHTML="Rs."+Math.round(pr35);
newwindow.document.getElementById("balance35").innerHTML="Rs."+Math.round(balance35);

principle=balance35;
interest36=(principle*interest/100)/84;
pr36=E84-interest36;
balance36=principle-pr36;
totalint=totalint+interest36;

newwindow.document.getElementById("emi36").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest36").innerHTML="Rs."+Math.round(interest36);
newwindow.document.getElementById("pr36").innerHTML="Rs."+Math.round(pr36);
newwindow.document.getElementById("balance36").innerHTML="Rs."+Math.round(balance36);

principle=balance36;
interest37=(principle*interest/100)/84;
pr37=E84-interest37;
balance37=principle-pr37;
totalint=totalint+interest37;

newwindow.document.getElementById("emi37").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest37").innerHTML="Rs."+Math.round(interest37);
newwindow.document.getElementById("pr37").innerHTML="Rs."+Math.round(pr37);
newwindow.document.getElementById("balance37").innerHTML="Rs."+Math.round(balance37);

principle=balance37;
interest38=(principle*interest/100)/84;
pr38=E84-interest38;
balance38=principle-pr38;
totalint=totalint+interest38;

newwindow.document.getElementById("emi38").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest38").innerHTML="Rs."+Math.round(interest38);
newwindow.document.getElementById("pr38").innerHTML="Rs."+Math.round(pr38);
newwindow.document.getElementById("balance38").innerHTML="Rs."+Math.round(balance38);

principle=balance38;
interest39=(principle*interest/100)/84;
pr39=E84-interest39;
balance39=principle-pr39;
totalint=totalint+interest39;

newwindow.document.getElementById("emi39").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest39").innerHTML="Rs."+Math.round(interest39);
newwindow.document.getElementById("pr39").innerHTML="Rs."+Math.round(pr39);
newwindow.document.getElementById("balance39").innerHTML="Rs."+Math.round(balance39);

principle=balance39;
interest40=(principle*interest/100)/84;
pr40=E84-interest40;
balance40=principle-pr40;
totalint=totalint+interest40;

newwindow.document.getElementById("emi40").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest40").innerHTML="Rs."+Math.round(interest40);
newwindow.document.getElementById("pr40").innerHTML="Rs."+Math.round(pr40);
newwindow.document.getElementById("balance40").innerHTML="Rs."+Math.round(balance40);

principle=balance40;
interest41=(principle*interest/100)/84;
pr41=E84-interest41;
balance41=principle-pr41;
totalint=totalint+interest41;

newwindow.document.getElementById("emi41").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest41").innerHTML="Rs."+Math.round(interest41);
newwindow.document.getElementById("pr41").innerHTML="Rs."+Math.round(pr41);
newwindow.document.getElementById("balance41").innerHTML="Rs."+Math.round(balance41);

principle=balance41;
interest42=(principle*interest/100)/84;
pr42=E84-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest42=(principle*interest/100)/84;
pr42=E84-interest42;
balance42=principle-pr42;
totalint=totalint+interest42;

newwindow.document.getElementById("emi42").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest42").innerHTML="Rs."+Math.round(interest42);
newwindow.document.getElementById("pr42").innerHTML="Rs."+Math.round(pr42);
newwindow.document.getElementById("balance42").innerHTML="Rs."+Math.round(balance42);

principle=balance42;
interest43=(principle*interest/100)/84;
pr43=E84-interest43;
balance43=principle-pr43;
totalint=totalint+interest43;

newwindow.document.getElementById("emi43").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest43").innerHTML="Rs."+Math.round(interest43);
newwindow.document.getElementById("pr43").innerHTML="Rs."+Math.round(pr43);
newwindow.document.getElementById("balance43").innerHTML="Rs."+Math.round(balance43);

principle=balance43;
interest44=(principle*interest/100)/84;
pr44=E84-interest44;
balance44=principle-pr44;
totalint=totalint+interest44;

newwindow.document.getElementById("emi44").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest44").innerHTML="Rs."+Math.round(interest44);
newwindow.document.getElementById("pr44").innerHTML="Rs."+Math.round(pr44);
newwindow.document.getElementById("balance44").innerHTML="Rs."+Math.round(balance44);

principle=balance44;
interest45=(principle*interest/100)/84;
pr45=E84-interest45;
balance45=principle-pr45;
totalint=totalint+interest45;

newwindow.document.getElementById("emi45").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest45").innerHTML="Rs."+Math.round(interest45);
newwindow.document.getElementById("pr45").innerHTML="Rs."+Math.round(pr45);
newwindow.document.getElementById("balance45").innerHTML="Rs."+Math.round(balance45);
principle=balance45;
interest46=(principle*interest/100)/84;
pr46=E84-interest46;
balance46=principle-pr46;
totalint=totalint+interest46;

newwindow.document.getElementById("emi46").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest46").innerHTML="Rs."+Math.round(interest46);
newwindow.document.getElementById("pr46").innerHTML="Rs."+Math.round(pr46);
newwindow.document.getElementById("balance46").innerHTML="Rs."+Math.round(balance46);

principle=balance45;
interest47=(principle*interest/100)/84;
pr47=E84-interest47;
balance47=principle-pr47;
totalint=totalint+interest47;

newwindow.document.getElementById("emi47").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest47").innerHTML="Rs."+Math.round(interest47);
newwindow.document.getElementById("pr47").innerHTML="Rs."+Math.round(pr47);
newwindow.document.getElementById("balance47").innerHTML="Rs."+Math.round(balance47);

principle=balance47;
interest48=(principle*interest/100)/84;
pr48=E84-interest48;
balance48=principle-pr48;
totalint=totalint+interest48;

newwindow.document.getElementById("emi48").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest48").innerHTML="Rs."+Math.round(interest48);
newwindow.document.getElementById("pr48").innerHTML="Rs."+Math.round(pr48);
newwindow.document.getElementById("balance48").innerHTML="Rs."+Math.round(balance48);

principle=balance48;
interest49=(principle*interest/100)/84;
pr49=E84-interest49;
balance49=principle-pr49;
totalint=totalint+interest49;

newwindow.document.getElementById("emi49").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest49").innerHTML="Rs."+Math.round(interest49);
newwindow.document.getElementById("pr49").innerHTML="Rs."+Math.round(pr49);
newwindow.document.getElementById("balance49").innerHTML="Rs."+Math.round(balance49);

principle=balance49;
interest50=(principle*interest/100)/84;
pr50=E84-interest50;
balance50=principle-pr50;
totalint=totalint+interest50;

newwindow.document.getElementById("emi50").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest50").innerHTML="Rs."+Math.round(interest50);
newwindow.document.getElementById("pr50").innerHTML="Rs."+Math.round(pr50);
newwindow.document.getElementById("balance50").innerHTML="Rs."+Math.round(balance50);

principle=balance50;
interest51=(principle*interest/100)/84;
pr51=E84-interest51;
balance51=principle-pr51;
totalint=totalint+interest51;

newwindow.document.getElementById("emi51").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest51").innerHTML="Rs."+Math.round(interest51);
newwindow.document.getElementById("pr51").innerHTML="Rs."+Math.round(pr51);
newwindow.document.getElementById("balance51").innerHTML="Rs."+Math.round(balance51);

principle=balance51;
interest52=(principle*interest/100)/84;
pr52=E84-interest52;
balance52=principle-pr52;
totalint=totalint+interest52;

newwindow.document.getElementById("emi52").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest52").innerHTML="Rs."+Math.round(interest52);
newwindow.document.getElementById("pr52").innerHTML="Rs."+Math.round(pr52);
newwindow.document.getElementById("balance52").innerHTML="Rs."+Math.round(balance52);

principle=balance52;
interest53=(principle*interest/100)/84;
pr53=E84-interest53;
balance53=principle-pr53;
totalint=totalint+interest53;

newwindow.document.getElementById("emi53").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest53").innerHTML="Rs."+Math.round(interest53);
newwindow.document.getElementById("pr53").innerHTML="Rs."+Math.round(pr53);
newwindow.document.getElementById("balance53").innerHTML="Rs."+Math.round(balance53);

principle=balance53;
interest54=(principle*interest/100)/84;
pr54=E84-interest54;
balance54=principle-pr54;
totalint=totalint+interest54;

newwindow.document.getElementById("emi54").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest54").innerHTML="Rs."+Math.round(interest54);
newwindow.document.getElementById("pr54").innerHTML="Rs."+Math.round(pr54);
newwindow.document.getElementById("balance54").innerHTML="Rs."+Math.round(balance54);

principle=balance54;
interest55=(principle*interest/100)/84;
pr55=E84-interest55;
balance55=principle-pr55;
totalint=totalint+interest55;

newwindow.document.getElementById("emi55").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest55").innerHTML="Rs."+Math.round(interest55);
newwindow.document.getElementById("pr55").innerHTML="Rs."+Math.round(pr55);
newwindow.document.getElementById("balance55").innerHTML="Rs."+Math.round(balance55);

principle=balance55;
interest56=(principle*interest/100)/84;
pr56=E84-interest56;
balance56=principle-pr56;
totalint=totalint+interest56;

newwindow.document.getElementById("emi56").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest56").innerHTML="Rs."+Math.round(interest56);
newwindow.document.getElementById("pr56").innerHTML="Rs."+Math.round(pr56);
newwindow.document.getElementById("balance56").innerHTML="Rs."+Math.round(balance56);

principle=balance56;
interest57=(principle*interest/100)/84;
pr57=E84-interest57;
balance57=principle-pr57;
totalint=totalint+interest57;

newwindow.document.getElementById("emi57").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest57").innerHTML="Rs."+Math.round(interest57);
newwindow.document.getElementById("pr57").innerHTML="Rs."+Math.round(pr57);
newwindow.document.getElementById("balance57").innerHTML="Rs."+Math.round(balance57);
principle=balance57;
interest58=(principle*interest/100)/84;
pr58=E84-interest58;
balance58=principle-pr58;
totalint=totalint+interest58;

newwindow.document.getElementById("emi58").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest58").innerHTML="Rs."+Math.round(interest58);
newwindow.document.getElementById("pr58").innerHTML="Rs."+Math.round(pr58);
newwindow.document.getElementById("balance58").innerHTML="Rs."+Math.round(balance58);

principle=balance58;
interest59=(principle*interest/100)/84;
pr59=E84-interest59;
balance59=principle-pr59;
totalint=totalint+interest59;

newwindow.document.getElementById("emi59").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest59").innerHTML="Rs."+Math.round(interest59);
newwindow.document.getElementById("pr59").innerHTML="Rs."+Math.round(pr59);
newwindow.document.getElementById("balance59").innerHTML="Rs."+Math.round(balance59);

principle=balance59;
interest60=(principle*interest/100)/84;
pr60=E84-interest60;
balance59=principle-pr60;
totalint=totalint+interest60;

newwindow.document.getElementById("emi60").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest60").innerHTML="Rs."+Math.round(interest60);
newwindow.document.getElementById("pr60").innerHTML="Rs."+Math.round(pr60);
newwindow.document.getElementById("balance60").innerHTML="Rs."+Math.round(balance60);

principle=balance60;
interest61=(principle*interest/100)/84;
pr61=E84-interest61;
balance61=principle-pr61;
totalint=totalint+interest61;

newwindow.document.getElementById("emi61").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest61").innerHTML="Rs."+Math.round(interest61);
newwindow.document.getElementById("pr61").innerHTML="Rs."+Math.round(pr61);
newwindow.document.getElementById("balance61").innerHTML="Rs."+Math.round(balance61);

principle=balance61;
interest62=(principle*interest/100)/84;
pr62=E84-interest62;
balance62=principle-pr62;
totalint=totalint+interest62;

newwindow.document.getElementById("emi62").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest62").innerHTML="Rs."+Math.round(interest62);
newwindow.document.getElementById("pr62").innerHTML="Rs."+Math.round(pr62);
newwindow.document.getElementById("balance62").innerHTML="Rs."+Math.round(balance62);

principle=balance62;
interest63=(principle*interest/100)/84;
pr63=E84-interest63;
balance63=principle-pr63;
totalint=totalint+interest63;

newwindow.document.getElementById("emi63").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest63").innerHTML="Rs."+Math.round(interest63);
newwindow.document.getElementById("pr63").innerHTML="Rs."+Math.round(pr63);
newwindow.document.getElementById("balance63").innerHTML="Rs."+Math.round(balance63);

principle=balance63;
interest64=(principle*interest/100)/84;
pr64=E84-interest64;
balance64=principle-pr64;
totalint=totalint+interest64;

newwindow.document.getElementById("emi64").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest64").innerHTML="Rs."+Math.round(interest64);
newwindow.document.getElementById("pr64").innerHTML="Rs."+Math.round(pr64);
newwindow.document.getElementById("balance64").innerHTML="Rs."+Math.round(balance64);

principle=balance64;
interest65=(principle*interest/100)/84;
pr65=E84-interest65;
balance65=principle-pr65;
totalint=totalint+interest65;

newwindow.document.getElementById("emi65").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest65").innerHTML="Rs."+Math.round(interest65);
newwindow.document.getElementById("pr65").innerHTML="Rs."+Math.round(pr65);
newwindow.document.getElementById("balance65").innerHTML="Rs."+Math.round(balance65);
principle=balance66;
interest66=(principle*interest/100)/84;
pr66=E84-interest66;
balance66=principle-pr66;
totalint=totalint+interest66;

newwindow.document.getElementById("emi66").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest66").innerHTML="Rs."+Math.round(interest66);
newwindow.document.getElementById("pr66").innerHTML="Rs."+Math.round(pr66);
newwindow.document.getElementById("balance66").innerHTML="Rs."+Math.round(balance66);

principle=balance66;
interest67=(principle*interest/100)/84;
pr67=E84-interest67;
balance67=principle-pr67;
totalint=totalint+interest67;

newwindow.document.getElementById("emi67").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest67").innerHTML="Rs."+Math.round(interest67);
newwindow.document.getElementById("pr67").innerHTML="Rs."+Math.round(pr67);
newwindow.document.getElementById("balance67").innerHTML="Rs."+Math.round(balance67);

principle=balance67;
interest68=(principle*interest/100)/84;
pr68=E84-interest68;
balance68=principle-pr68;
totalint=totalint+interest68;

newwindow.document.getElementById("emi68").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest68").innerHTML="Rs."+Math.round(interest68);
newwindow.document.getElementById("pr68").innerHTML="Rs."+Math.round(pr68);
newwindow.document.getElementById("balance68").innerHTML="Rs."+Math.round(balance68);

principle=balance68;
interest69=(principle*interest/100)/84;
pr69=E84-interest69;
balance69=principle-pr69;
totalint=totalint+interest69;

newwindow.document.getElementById("emi69").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest69").innerHTML="Rs."+Math.round(interest69);
newwindow.document.getElementById("pr69").innerHTML="Rs."+Math.round(pr69);
newwindow.document.getElementById("balance69").innerHTML="Rs."+Math.round(balance69);

principle=balance69;
interest70=(principle*interest/100)/84;
pr70=E84-interest70;
balance70=principle-pr70;
totalint=totalint+interest70;

newwindow.document.getElementById("emi70").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest70").innerHTML="Rs."+Math.round(interest70);
newwindow.document.getElementById("pr70").innerHTML="Rs."+Math.round(pr70);
newwindow.document.getElementById("balance70").innerHTML="Rs."+Math.round(balance70);

principle=balance70;
interest71=(principle*interest/100)/84;
pr71=E84-interest71;
balance71=principle-pr71;
totalint=totalint+interest71;

newwindow.document.getElementById("emi71").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest71").innerHTML="Rs."+Math.round(interest71);
newwindow.document.getElementById("pr71").innerHTML="Rs."+Math.round(pr71);
newwindow.document.getElementById("balance71").innerHTML="Rs."+Math.round(balance71);

principle=balance71;
interest72=(principle*interest/100)/84;
pr72=E84-interest72;
balance72=principle-pr72;
totalint=totalint+interest72;

newwindow.document.getElementById("emi72").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest72").innerHTML="Rs."+Math.round(interest72);
newwindow.document.getElementById("pr72").innerHTML="Rs."+Math.round(pr72);
newwindow.document.getElementById("balance72").innerHTML="Rs."+Math.round(balance72);

principle=balance72;
interest73=(principle*interest/100)/84;
pr73=E84-interest73;
balance73=principle-pr73;
totalint=totalint+interest73;

newwindow.document.getElementById("emi73").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest73").innerHTML="Rs."+Math.round(interest73);
newwindow.document.getElementById("pr73").innerHTML="Rs."+Math.round(pr73);
newwindow.document.getElementById("balance73").innerHTML="Rs."+Math.round(balance73);

principle=balance73;
interest74=(principle*interest/100)/84;
pr74=E84-interest74;
balance74=principle-pr74;
totalint=totalint+interest74;

newwindow.document.getElementById("emi74").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest74").innerHTML="Rs."+Math.round(interest74);
newwindow.document.getElementById("pr74").innerHTML="Rs."+Math.round(pr74);
newwindow.document.getElementById("balance74").innerHTML="Rs."+Math.round(balance74);

principle=balance74;
interest75=(principle*interest/100)/84;
pr75=E84-interest75;
balance75=principle-pr75;
totalint=totalint+interest75;

newwindow.document.getElementById("emi75").innerHTML="Rs."+E84+"/-";
newwindow.document.getElementById("interest75").innerHTML="Rs."+Math.round(interest75);
newwindow.document.getElementById("pr75").innerHTML="Rs."+Math.round(pr75);
newwindow.document.getElementById("balance75").innerHTML="Rs."+Math.round(balance75);


newwindow.document.getElementById("totalint").innerHTML="Total Interest is Rs."+Math.round(totalint)+"<br><br><br><br>"+"Complete EMI List";

pow12=Math.pow(ratet,12);
pow24=Math.pow(ratet,24);
pow36=Math.pow(ratet,36);
pow48=Math.pow(ratet,48);
pow60=Math.pow(ratet,60);
pow72=Math.pow(ratet,72);

div12=pow12-1;
div24=pow24-1;
div36=pow36-1;
div48=pow48-1;
div60=pow60-1;
div72=pow72-1;

E12=(principlem*rate*pow12)/(div12);
E12=Math.round(E12);
E24=(principlem*rate*pow24)/(div24);
E24=Math.round(E24);
E36=(principlem*rate*pow36)/(div36);
E36=Math.round(E36);
E48=(principlem*rate*pow48)/(div48);
E48=Math.round(E48);
E60=(principlem*rate*pow60)/(div60);
E60=Math.round(E60);
E72=(principlem*rate*pow72)/(div72);
E72=Math.round(E72);

newwindow.document.getElementById("emii12").innerHTML="Rs."+E12+"/-";

newwindow.document.getElementById("emii24").innerHTML="Rs."+E24+"/-";

newwindow.document.getElementById("emii36").innerHTML="Rs."+E36+"/-";

newwindow.document.getElementById("emii48").innerHTML="Rs."+E48+"/-";

newwindow.document.getElementById("emii60").innerHTML="Rs."+E60+"/-";

newwindow.document.getElementById("emii72").innerHTML="Rs."+E72+"/-";

newwindow.document.getElementById("emii84").innerHTML="Rs."+E84+"/-";

}