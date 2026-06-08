/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//variables

/****************************
main code
****************************/


function start(){

let food = [pizza1, pizza2, pizza3, pizza4]













//reciept -----------------------------------------------------------------------------------

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const ITEM_FIELD = document.getElementById("itemField")
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField")
    let money = Number(MONEY_FIELD.value);

OUTPUT.innerHTML += "<p>Your Receipt: </p>";
OUTPUT.innerHTML += "<p>Name: " + name + "</p>";
OUTPUT.innerHTML += "<p>Item: " + item + "</p>";
OUTPUT.innerHTML += "<p>Your remaining balance: " + money-item + "</p>";
}
getFormInput()



}

