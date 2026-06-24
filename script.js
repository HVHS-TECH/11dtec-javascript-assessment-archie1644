/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
     let cartArray = [];
//variables

/****************************
main code
****************************/

//reciept -----------------------------------------------------------------------------------





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
    const 

OUTPUT.innerHTML += "<p>Name: "+name+"";

for(let i = 0; i < cartArray.length; i++){
    OUTPUT.innerHTML += "item " + (i + 1) + ": " + cartArray[i] + "<br>";
}
    console.log(cartArray);
}
