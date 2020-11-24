// create a website that translates English to Morse code
// forget about the extension

//// 1. store english letters and morse code for use by the translator
//// 2. take inputed english from the input field
//// 3. event listener for the button click
// 4. do the thing:
//    a. get each letter and match to corresponding morse letter
//    b. convert all to lowercase before converting
//    c. do we need a character for spaces between words?? add a space to the arrays maybe?
// 5. output the result to the output field
// 6. somehow refresh it all

// okay, got my arrays sorted

// const englishArr = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// const morseArr = ["/", ". _", "_ . . .", "_ . _ .", "_ . .", ".", ". . _ .", "_ _ .", ". . . .", ". .", ". _ _ _", "_ . _", ". _ . .",  "_ _", "_ .", "_ _ _", ". _ _ .", "_ _ . _", ". _ .", ". . .", "_", ". . _", ". . . _", ". _ _", "_ . . _", "_ . _ _", "_ _ . .", ". _ _ _ _", ". . _ _ _", ". . . _ _", ". . . . _", ". . . . .", "_ . . . .", "_ _ . . .", "_ _ _ . .", "_ _ _ _ .", "_ _ _ _ _"];

const engToMorArr = {
  " ": "/",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
}

const morToEngArr = {
  "/":        " ",
  ".-":       "a",
    "-...":   "b",
    "-.-.":   "c",
    "-..":    "d",
    ".":      "e",
    "..-.":   "f",
    "--.":    "g",
    "....":   "h",
    "..":     "i",
    ".---":   "j",
    "-.-":    "k",
    ".-..":   "l",
    "--":     "m",
    "-.":     "n",
    "---":    "o",
    ".--.":   "p",
    "--.-":   "q",
    ".-.":    "r",
    "...":    "s",
    "-":      "t",
    "..-":    "u",
    "...-":   "v",
    ".--":    "w",
    "-..-":   "x",
    "-.--":   "y",
    "--..":   "z",
    ".----":  "1",
    "..---":  "2",
    "...--":  "3",
    "....-":  "4",
    ".....":  "5",
    "-....":  "6",
    "--...":  "7",
    "---..":  "8",
    "----.":  "9",
    "-----":  "0",
};

// import engToMorArr from './english.js';
// import morToEngArr from './morse.js';

///////////////////////////////
// English to Morse section //
//////////////////////////////

const inputEng = document.querySelector(".inputBoxEng");

const outputMor = document.querySelector(".outputBoxMor");

let morseRaw = [];

const translateEnglish = () => {
  const engToConvert = document.querySelector(".inputBoxEng").value.toLowerCase();
  const inputEngArr = engToConvert.split("");
  console.log(inputEngArr);

  inputEngArr.filter(letter => {
    Object.entries(engToMorArr).forEach(([key, value]) => {
      if (letter === key) {
        morseRaw.push(value);
      }
    })   
  })

let morseOutput = morseRaw.join(" ");

outputMor.innerHTML = morseOutput;
}

const refreshEnglish = () => {
  outputMor.innerHTML = null;
  inputEng.value = null;
}

/////////////////////////////
// Morse to English section//
/////////////////////////////

const inputMor = document.querySelector(".inputBoxMor");

const outputEng = document.querySelector(".outputBoxEng");

let englishRaw = [];

const translateMorse = () => {
  const morToConvert = document.querySelector(".inputBoxMor").value.toLowerCase();
  const inputMorArr = morToConvert.split(" ");
  console.log(inputMorArr);

  inputMorArr.filter(letter => {
    Object.entries(morToEngArr).forEach(([key, value]) => {
      if (letter === key) {
        englishRaw.push(value);
      }
    })   
  })

let englishOutput = englishRaw.join(" ");

outputEng.innerHTML = englishOutput;
}

const refreshMorse = () => {
  outputEng.innerHTML = null;
  inputMor.value = null;
}

