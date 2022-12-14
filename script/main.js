import Alphabet from "./Alphabet.js";
import {dowloadAsMarkdown} from "./Dowload.js"
console.log("le script fonctionne let's go!!!");
let alphabet = new Alphabet();
const textToTranslate = document.getElementById("textToTranslate");
const translatedText = document.getElementById("translatedText");
const randomAlphabet = document.getElementById("Alphabet");
const generateAlphabetButton = document.getElementById("generateAlphabet");
const download = document.getElementById("dowload");
init();

function init() {
  if(localStorage.getItem('Alphabet') !== null){
  alphabet.updateAlphabet(localStorage.getItem('Alphabet').split(""));
  }
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
  localStorage.setItem('Alphabet' , str );
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

  function dowloadGeneratedText(event){
    let str = document.getElementById("Titre").value;
   
    event.preventDefault();
    const object = {
        randomlyGeneratedAlphabet : randomAlphabet.value,
        textToTranslate : textToTranslate.value,
        translatedText : translatedText.value
    }
    if(str === undefined || str === null || str === "" ){
      str = object.randomlyGeneratedAlphabet;
    }
    dowloadAsMarkdown(object, str)
   
  }