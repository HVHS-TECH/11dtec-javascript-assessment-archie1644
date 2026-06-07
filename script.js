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
    const ITEM_FIELD = document.getElementById("itemField")
    let item = ITEM_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField")
    let money = MONEY_FIELD.value;


    OUTPUT.innerHTML += "<p>name: ">name<"";
    OUTPUT.innerHTML += "<p>name: ">item<"";
    OUTPUT.innerHTML += "<p>name: ">money<"";
}
