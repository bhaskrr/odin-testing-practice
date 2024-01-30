export function caesarCipher(str, shiftFactor){
    const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const uppercaseAlphabetArray = upperCaseAlphabet.split('');
    
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseAlphabetArray = lowerCaseAlphabet.split('');

    //makes the input string an array
    str = str.split('');

    for(let i = 0;i < str.length;i++){
        if(uppercaseAlphabetArray.includes(str[i])){
            //gets the ASCII code
            let code = str[i].charCodeAt(0);
            //wraps text from Z to A
            if(code + shiftFactor > 90){
                code = 64 + (code - 90);
            }
            //shifts the current character 
            str[i] = String.fromCharCode(code + shiftFactor);
        }

        if(lowercaseAlphabetArray.includes(str[i])){
            //gets the ASCII code
            let code = str[i].charCodeAt(0);
            //wraps text from z to a
            if(code + shiftFactor > 122){
                code = 96 + (code - 122);
            }
            //shifts the current character 
            str[i] = String.fromCharCode(code + shiftFactor);
        }
    }
    //joins the splitted string back
    return str.join('');
}