let num="";

function print(val){
    num=num+val;
    document.getElementById("input").value=num;
}
function answer(){
let ans=eval(num);
num=" ";
document.getElementById("input").value=ans;
}
function clea(){
num="0";
document.getElementById("input").value=num;
num=" ";
}