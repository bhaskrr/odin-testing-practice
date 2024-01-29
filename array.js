export function analyzeArray(arr){
    const objectProperties = {
        "average" : arr.reduce((prev,cur)=>{return prev+cur},0)/arr.length,
        "min" : Math.min(...arr),
        "max" : Math.max(...arr),
        "length" : arr.length
    };

    return objectProperties;
}