import { capitalizeString, reverseString } from "./string_functions";

test('Expects an output of "Javascript" for an input "jAvaScripT"', ()=>{
    expect(capitalizeString("jAvaScripT")).toBe("Javascript");
});

test('Expects an output of "gnitseT" for an input "Testing"', ()=>{
    expect(reverseString("Testing")).toBe("gnitseT");
});