var inputText = document.querySelector("textarea");
var outputText = document.querySelector(".ta");
var btn = document.querySelector(".btn");
var url = "https://api.funtranslations.com/translate/minion.json";
function UrlConvertor(inputText) {

    return url + "?" + "text=" + inputText;
}

function errorMessage(error) {
    console.error("error: ", error);
}

function clickHandler() {
    var it = inputText.value;
    fetch(UrlConvertor(it)).then(response => response.json()).then(json => {
        outputText.innerText = json.contents.translated;
    }).catch(errorMessage())
};
btn.addEventListener("click", clickHandler);