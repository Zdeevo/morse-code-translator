"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var engToMorArr = {
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
};
var morToEngArr = {
  "/": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
}; ///////////////////////////////
// English to Morse section //
//////////////////////////////

var inputEng = document.querySelector(".inputBoxEng");
var outputMor = document.querySelector(".outputBoxMor");
var morseRaw = [];

var translateEnglish = function translateEnglish() {
  var engToConvert = document.querySelector(".inputBoxEng").value.toLowerCase();
  var inputEngArr = engToConvert.split("");
  console.log(inputEngArr);
  inputEngArr.filter(function (letter) {
    Object.entries(engToMorArr).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if (letter === key) {
        morseRaw.push(value);
      }
    });
  });
  var morseOutput = morseRaw.join(" ");
  outputMor.innerHTML = morseOutput;
};

var refreshEnglish = function refreshEnglish() {
  outputMor.innerHTML = null;
  inputEng.value = null;
  morseRaw = [];
}; /////////////////////////////
// Morse to English section//
/////////////////////////////


var inputMor = document.querySelector(".inputBoxMor");
var outputEng = document.querySelector(".outputBoxEng");
var englishRaw = [];

var translateMorse = function translateMorse() {
  var morToConvert = document.querySelector(".inputBoxMor").value.toLowerCase();
  var inputMorArr = morToConvert.split(" ");
  console.log(inputMorArr);
  inputMorArr.filter(function (letter) {
    Object.entries(morToEngArr).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      if (letter === key) {
        englishRaw.push(value);
      }
    });
  });
  var englishOutput = englishRaw.join(" ");
  outputEng.innerHTML = englishOutput;
};

var refreshMorse = function refreshMorse() {
  outputEng.innerHTML = null;
  inputMor.value = null;
  englishRaw = [];
};