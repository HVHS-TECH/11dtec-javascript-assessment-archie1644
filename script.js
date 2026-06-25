/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
     let cartArray = [];
//variables

/****************************
main code
****************************/

displayProduct("<p>pizza: $", 30);
displayProduct("<p>pizza2: $", 30);
displayProduct("<p>pizza3: $", 30);

//reciept -----------------------------------------------------------------------------------

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    let money = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<h1>Order Information:"
    OUTPUT.innerHTML += "<p>your name: "+name+"";
    OUTPUT.innerHTML += "<p>Your money: $"+money+"";
}



function pizza(){
    OUTPUT.innerHTML += "<p>pizza has been added to cart"
    cartArray.push("pizza");
}

function pizza2(){
    OUTPUT.innerHTML += "<p>pizza2 has been added to cart"
    cartArray.push("pizza2");
}

function pizza3(){
    OUTPUT.innerHTML += "<p>pizza3 has been added to cart"
    cartArray.push("pizza3");

}

function start(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    let money = Number(MONEY_FIELD.value);

OUTPUT.innerHTML += "<h1>Your reciept:";
OUTPUT.innerHTML += "<p>Name: "+name+"";


for(let i = 0; i < cartArray.length; i++){
    OUTPUT.innerHTML += "item " + (i + 1) + ": " + cartArray[i] + "<br>";
}
    console.log(cartArray);

let price = cartArray.length*30;
let change = money-price;
OUTPUT.innerHTML += "<p>price: $"+price+"";


OUTPUT.innerHTML += "<p>your change: $"+change+"";

console.log(change);
}

function displayProduct(_item, _price){
    OUTPUT.innerHTML += _item + _price
}