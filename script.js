/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//variables

/****************************
main code
****************************/
OUTPUT.innerHTML +=  "<h1>pizza place</h1>"

function start(){

    const NAME_FIELD = document.getElementById("nameField")
    let name = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>name: ">name<"";

    const ITEM_FIELD = document.getElementById("itemField")
    let item = ITEM_FIELD.value;
        OUTPUT.innerHTML += "<p>item: ">item<"";

    const MONEY_FIELD = document.getElementById("moneyField")
    let money = MONEY_FIELD.value;
    OUTPUT.innerHTML += "<p>money: ">money<"";



}
