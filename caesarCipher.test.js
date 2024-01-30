import { caesarCipher } from "./caesarCipher";

test('Expect caesarCipher("Javascript!", 20) to be "Dupumwlcjn!"',()=>{
    expect(caesarCipher("Javascript!", 20)).toBe("Dupumwlcjn!");
});