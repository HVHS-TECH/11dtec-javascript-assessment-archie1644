/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//variables

/****************************
main code
****************************/

//reciept -----------------------------------------------------------------------------------

    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
     let money = Number(MONEY_FIELD.value);
     let cartArray2 = [];

function pizza(){
    OUTPUT.innerHTML += "<p>pizza has been added to cart"
    cartArray2.push("pizza")
}

function pizza2(){
    OUTPUT.innerHTML += "<p>pizza2 has been added to cart"
    cartArray2.push("pizza2")
}

function pizza3(){
    OUTPUT.innerHTML += "<p>pizza3 has been added to cart"
    cartArray2.push("pizza3")
}

function start(){
    OUTPUT.innerHTML += cartArray2;
}
