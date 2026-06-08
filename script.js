/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//variables

/****************************
main code
****************************/


function start(){
















//reciept -----------------------------------------------------------------------------------
function calculateChange(_money, _price){
let change = _money - _price
return change;

}
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const ITEM_FIELD = document.getElementById("itemField")
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField")
    let money = Number(MONEY_FIELD.value);

    let itemArray = ["pizza1", "pizza2", "pizza3", "pizza4"];

OUTPUT.innerHTML += "<p>Your Receipt: </p>";
OUTPUT.innerHTML += "<p>Name: " + name + "</p>";
OUTPUT.innerHTML += "food: "+itemArray[item]+"";
OUTPUT.innerHTML += "<p>Your remaining balance: " +  + "</p>";
}
getFormInput()



}

