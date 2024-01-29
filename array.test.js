import { analyzeArray } from "./array";

test('Analyzes [1,2,3] to return {average: 2,min: 1,max: 3,length: 3}', ()=>{
    expect(analyzeArray([1,2,3])).toEqual({average: 2,min: 1,max: 3,length: 3});
});