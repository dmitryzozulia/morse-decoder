const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
};

function decode(expr) {
    let decodeString = ''
    let morse = ''
    let arrayNumbers = ''
    const arr = []
    expr = expr.split('')
    while (expr.length !== 0) {
        arrayNumbers = expr.splice(0, 10).join('').match(/\d{1,2}/g)
        if (arrayNumbers) {
            for (let i = 0; i < arrayNumbers.length; i++) {
                if (arrayNumbers[i] === '10') {
                    morse += '.'
                } else if (arrayNumbers[i] === '11') {
                    morse += '-'
                }
            }
            arr.push(morse)
        } else {
            arr.push(' ')
        }
        morse = ''
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            decodeString += ' '
        } else {
            decodeString += MORSE_TABLE[arr[i]]
        }
    }
    return decodeString
}

module.exports = {
    decode
}