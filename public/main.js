
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
  morseRaw = [];
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
  englishRaw = [];
}

