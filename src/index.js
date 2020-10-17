const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' ',
};

function decode(expr) {
     let newExpr = expr.match(/.{1,10}/g);
        for (let i = 0; i < newExpr.length; i++){
            if (newExpr[i] === "**********"){
                newExpr[i] = " ";
            }else{
                let newExprIndex = newExpr[i].match(/.{1,2}/g);
                for (let j = 0; j < newExprIndex.length; j++){
                    if (newExprIndex[j] === "00"){
                        newExprIndex[j] = "";
                    }else if(newExprIndex[j] === "10"){
                        newExprIndex[j] = ".";
                    }else{
                        newExprIndex[j] = "-";
                    };
                };
                newExpr[i] = MORSE_TABLE[newExprIndex.join("")];
                
            };
            
        };
        return newExpr.join("");
}

module.exports = {
    decode
}