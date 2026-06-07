/****************************
javascript
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//variables









/****************************
main code
****************************/
OUTPUT.innerHTML +=  "<h1>pizza place</h1>"
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += userName;
}
