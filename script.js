/****************************
javascript
****************************/
console.log("running the pizza place")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
     let cartArray = [];
//variables

/****************************
main code
****************************/



//reciept -----------------------------------------------------------------------------------

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    let money = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<h1>Order Information:"

if (name == 0){
    OUTPUT.innerHTML += "<p>please input a name";
}
    else{
        OUTPUT.innerHTML += "<p>Your name: "+name+"";
    }
    OUTPUT.innerHTML += "<p>Your money: $"+money+"";
}



function pizza(){
    OUTPUT.innerHTML += "<p>pizza has been added to cart"
    cartArray.push("pizza");
}

function pizza2(){
    OUTPUT.innerHTML += "<p>pizza 2 has been added to cart"
    cartArray.push("pizza2");
}

function pizza3(){
    OUTPUT.innerHTML += "<p>pizza 3 has been added to cart"
    cartArray.push("pizza3");

}

function start(){
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    let money = Number(MONEY_FIELD.value);

OUTPUT.innerHTML += "<h1>Your reciept:";
if (name == 0){
    OUTPUT.innerHTML += "<p>please input a name";
}
    else{
        OUTPUT.innerHTML += "<p>Name: "+name+"";
    }


for(let i = 0; i < cartArray.length; i++){
    OUTPUT.innerHTML += "item " + (i + 1) + ": " + cartArray[i] + "<br>";
}
    console.log(cartArray);

let price = cartArray.length*599.22;
let change = money-price;
OUTPUT.innerHTML += "<p>cost: $"+price+"";
 if (money >= price){
        OUTPUT.innerHTML += "<p>your change: $"+change+"";
    }

    else if (money == 0){
        OUTPUT.innerHTML += "<p>Input money balance";
    }

    else{
        OUTPUT.innerHTML += "<p>insufficient funds";
    }