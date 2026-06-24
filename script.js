/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
     let cartArray = [];
//variables

/****************************
main code
****************************/

displayProduct("<p>pizza: $", 10);
displayProduct("<p>pizza2: $", 20);
displayProduct("<p>pizza3: $", 30);

//reciept -----------------------------------------------------------------------------------

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    let money = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p>your name: "+name+"";
    OUTPUT.innerHTML += "<p>your money: $"+money+"";

}



function pizza(){
    OUTPUT.innerHTML += "<p>pizza has been added to cart"
    cartArray.push("pizza");
    money-10;
}

function pizza2(){
    OUTPUT.innerHTML += "<p>pizza2 has been added to cart"
    cartArray.push("pizza2");
    money-20;
}

function pizza3(){
    OUTPUT.innerHTML += "<p>pizza3 has been added to cart"
    cartArray.push("pizza3");
    money-30;

}

function start(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;


OUTPUT.innerHTML += "<h1>Your reciept:";
OUTPUT.innerHTML += "<p>Name: "+name+"";
OUTPUT.innerHTML += "<p>money: "+money+"";


for(let i = 0; i < cartArray.length; i++){
    OUTPUT.innerHTML += "item " + (i + 1) + ": " + cartArray[i] + "<br>";
}
    console.log(cartArray);
}


function calculateChange(_money, _price){
let change = _money-_price
return change;
}

function displayProduct(_item, _price){
    OUTPUT.innerHTML += _item + _price
}