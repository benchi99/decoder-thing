var orderedAlphabet;
var reversedAlphabet;

$(document).ready(() => {
    setupArrays();
});

function process() {
    let action = $('input[name=actionToPerform]').val();

    if (action === "encode") {
        $("#textOutput").val(processText(orderedAlphabet, reversedAlphabet, $("#textInput").val()));
    } else if (action === "decode") {
        $("#textOutput").val(processText(reversedAlphabet, orderedAlphabet, $("#textInput").val()));
    }
}

function processText(lookUp, reference, input) {
    let result = "";

    for (let letter of input) {
        if (lookUp.includes(letter)) {
            result += reference[lookUp.indexOf(letter)];
        } else {
            result += letter;
        }
    }

    return result;
}

function setupArrays() {
    let alphabet = [];
    let upperCaseAlphabet = [];
    let reverseAlphabet = [];
    let reverseUpperCaseAlphabet = [];
    
    for (let i = 0; i < 26; i++) {
        alphabet.push(String.fromCharCode(i + 97));
        upperCaseAlphabet.push(String.fromCharCode(i + 65));
    }

    reverseAlphabet = [...alphabet];
    reverseUpperCaseAlphabet = [...upperCaseAlphabet];
    reverseAlphabet.reverse();
    reverseUpperCaseAlphabet.reverse();

    orderedAlphabet = alphabet.concat(upperCaseAlphabet);
    reversedAlphabet = reverseAlphabet.concat(reverseUpperCaseAlphabet);

}