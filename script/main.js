import Alphabet from "./Alphabet.js";
console.log("le script fonctionne let's go!!!");
let alphabet = new Alphabet();
const textToTranslate = document.getElementById("textToTranslate");
const translatedText = document.getElementById("translatedText");
const randomAlphabet = document.getElementById("Alphabet");
const generateAlphabetButton = document.getElementById("generateAlphabet");
const download = document.getElementById("dowload");
init();

function init() {
  setALphabet();
  const translated = textToTranslate.value.split("");
  translatedText.value = alphabet.translate(translated);
  generateAlphabetButton.addEventListener("click", (e) => generateRandomAlphabet(e));
  randomAlphabet.addEventListener("keyup", (e) => generateCustomAlphabet(e));
  translatedText.addEventListener("keyup", (e) => reverseTranslate(e));
  textToTranslate.addEventListener("keyup", (e) => translate(e));
  download.addEventListener("click" , (e) => dowloadGeneratedText(e));
}

function generateCustomAlphabet(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    testAlphabetGenerator();
  }
}

function testAlphabetGenerator() {
  let string = randomAlphabet.value;
  console.log(string.length);
  if (string.length == 26) {
    let array = string.split("");
    array.forEach(e=> string += (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()));
    console.log(string.length);
  } if (string.length != 52) {
    let validate = confirm(
      "l'alphabet que vous avez saisis est invalide voulez vous le regenerer ?"
    );
    console.log(validate);
    if (validate) {
      alphabet.updateAlphabet();
      setALphabet();
      const translated = textToTranslate.value.split("");
      translatedText.value = alphabet.translate(translated);
    }
  } else {
    alphabet.updateAlphabet(string.split(""));
    setALphabet();
    const translated = textToTranslate.value.split("");
    translatedText.value = alphabet.translate(translated);
  }
}

function setALphabet() {
  let str = "";
  alphabet.RandomALphabet.forEach((e) => (str += e));
  randomAlphabet.value = str;
  
}

function translate(event) {
  event.preventDefault();
 testAlphabetGenerator();
  const translated = textToTranslate.value.split("");
  translatedText.value = alphabet.translate(translated);
}
function reverseTranslate(event) {
  event.preventDefault()
  textToTranslate.value = alphabet.reverseTranslate(
    translatedText.value.split("")
  );
}
function generateRandomAlphabet(event) {
  event.preventDefault();
  alphabet.updateAlphabet();
  const translated = textToTranslate.value.split("");
  translatedText.value = alphabet.translate(translated);
  setALphabet();
}

function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  function dowloadGeneratedText(event){
    event.preventDefault();
    const object = {
        randomlyGeneratedAlphabet : randomAlphabet.value,
        textToTranslate : textToTranslate.value,
        translatedText : translatedText.value
    }
    downloadObjectAsJson(object , object.randomlyGeneratedAlphabet)
  }