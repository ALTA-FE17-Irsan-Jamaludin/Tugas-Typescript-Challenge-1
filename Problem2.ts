const ubahHuruf = (nama: string): string => {
  const normalAlphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const upNormalAlphabet: string[] = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let result = "";

  for (let i = 0; i < nama.length; i++) {
    const searchLetter = nama[i];

    if (searchLetter === " ") {
      result += " ";
    } else {
      const indexOfLetter = normalAlphabet.indexOf(searchLetter);
      if (indexOfLetter !== -1) {
        let data = upNormalAlphabet[indexOfLetter];
        result += data;
      }
    }
  }
  return result;
};

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWO
