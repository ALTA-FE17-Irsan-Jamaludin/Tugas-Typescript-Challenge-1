const caesarCipher = (offset: number, inputString: string) => {
  let totalAlphabet = 26;
  offset = offset % totalAlphabet;
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const karakter = inputString[i];

    if (karakter === " ") {
      result += " ";
    } else {
      let charCode = karakter.charCodeAt(0);
      charCode = ((charCode - 97 + offset) % totalAlphabet) + 97;
      result += String.fromCharCode(charCode);
    }
  }
  return result;
};

console.log(caesarCipher(3, "abc")); // Output: def
// console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // Output: bcdefghijklmnopqrstuvwxyza
// console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // Output: mnopqrstuvwxyzabcdefghijkl
