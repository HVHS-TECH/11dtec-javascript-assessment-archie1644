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



function good_pizza(){
    OUTPUT.innerHTML += "<p>good pizza has been added to cart"
    cartArray.push("good pizza");
}

function tasty_pizza(){
    OUTPUT.innerHTML += "<p>tasty pizza has been added to cart"
    cartArray.push("tasty pizza");
}

function other_pizza(){
    OUTPUT.innerHTML += "<p>other pizza has been added to cart"
    cartArray.push("other pizza");

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
if (price == 0){
    OUTPUT.innerHTML += "<p>add stuff 2 cart plz";
}
else{
    OUTPUT.innerHTML += "<p>cost: $"+price+"";
    
 if (money >= price){
        OUTPUT.innerHTML += "<p>your change: $"+change+"";
    }

    else if (money == 0){
        OUTPUT.innerHTML += "<p>input money balance please";
    }

    else{
        OUTPUT.innerHTML += "<p>insufficient funds";
    }
}







console.log(change);
}
