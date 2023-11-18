const playWithAsterik = (num: number): string | void => {
  for (let utama = 0; utama < num; utama++) {
    let string: string = "";

    for (let spasi = 0; spasi < num - utama; spasi++) {
      string += " ";
    }

    for (let asterix = 0; asterix <= utama; asterix++) {
      string += " *";
    }
    console.log(string);
  }
};

playWithAsterik(5);
