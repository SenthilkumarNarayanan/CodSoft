
const userInput= document.getElementById("input");
var expression= "";

function press(num){
    expression += num;
    input.value= expression;
}

function equal(){
    input.value=eval(expression);
    expression="";

}
function clearInput(){
    expression="";
    userInput.value=expression
}
