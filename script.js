/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//variables

/****************************
main code
****************************/

//reciept -----------------------------------------------------------------------------------



    const MONEY_FIELD = document.getElementById("moneyField");
     let money = Number(MONEY_FIELD.value);


     let cartArray = [];

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

OUTPUT.innerHTML += "<p>Name: "+name+"";

    for(let i = 0; i < cartArray.length; i++){
        OUTPUT.innerHTML += "item "+ i +": "+cartArray[i]+"<br>";
    }
    console.log(cartArray);
}
