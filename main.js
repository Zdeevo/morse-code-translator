// create a website that translates English to Morse code
// forget about the extension

// 1. store english letters and morse code for use by the translator
// 2. take inputed english from the input field
// 3. event listener for the button click
// 4. do the thing:
//    a. get each letter and match to corresponding morse letter
//    b. convert all to lowercase before converting
//    c. do we need a character for spaces between words?? add a space to the arrays maybe?
// 5. output the result to the output field
// 6. somehow refresh it all

const arrayEnglish = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

const arrayMorse = ["/", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___"];


const textInput = document.querySelector('input');
const morseOutput = "";

function translateFunction() {
  const textConvert = textInput.value.toLowerCase();
}

