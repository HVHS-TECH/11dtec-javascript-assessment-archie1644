/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//variables

/****************************
main code
****************************/
displayProduct("<p>pizza1: ", 10);
displayProduct("<p>pizza2: " , 20);
displayProduct("<p>pizza3: ", 30);
displayProduct("<p>pizza4: ", 40);



//reciept -----------------------------------------------------------------------------------
function start(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
     let money = Number(MONEY_FIELD.value);


     let cartArray = [];
     cartArray.push(item)
OUTPUT.innerHTML += "<p>Name: "+name+"";
OUTPUT.innerHTML += "<p>Your items: "+cartArray+"";
OUTPUT.innerHTML += "<p>Your change: "+calculateChange(money-item)+"";
}

//functions

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}

function calculateChange(_money, _price){
let change = _money - _price
return change;
}