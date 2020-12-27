
let alphabet = [];
let reverseAlphabet = [];

$(document).ready(() => {
    for (let i = 0; i < 26; i++) {
        alphabet.push(String.fromCharCode(i + 97))
    }

    reverseAlphabet = [...alphabet];
    reverseAlphabet.reverse();
});

function process() {
    let action = $('input[name=actionToPerform]').val()

    if (action === "encode") {
        $("#textOutput").val(processText(alphabet, reverseAlphabet, $("#textInput").val()));
    } else if (action === "decode") {
        $("#textOutput").val(processText(reverseAlphabet, alphabet, $("#textInput").val()));
    }
}

function processText(lookUp, reference, input) {
    let result = "";

    for (let letter of input.toLowerCase()) {
        if (lookUp.includes(letter)) {
            result += reference[lookUp.indexOf(letter)]
        } else {
            result += letter;
        }
    }

    return result;
}