export function capitalizeString(str){
    return str[0].toUpperCase().concat(str.slice(1).toLowerCase());
}

export function reverseString(str){
    return str.split('').reverse().join('');
}