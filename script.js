/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//variables

/****************************
main code
****************************/


displayProduct("<p>pizza1: ", 0)
displayProduct("<p>pizza2: ", 1)
displayProduct("<p>pizza3: ", 2)
displayProduct("<p>pizza4: ", 3)

//reciept -----------------------------------------------------------------------------------

    function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
     let money = Number(MONEY_FIELD.value);
    }
//functions

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}

function startCart(){
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    OUTPUT.innerHTML += "your item is: "+item+". ";
}