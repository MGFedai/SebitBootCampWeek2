let yaricap = 15;
const PiSayisi = 3.14;

let daireAlani = PiSayisi* yaricap**2;
console.log(daireAlani);

// bölümden kalan bulma
let kalan = yaricap%4;
console.log(kalan);

let sonuc = 6*(15-4)**2;
console.log(sonuc);



// sayi arttırma
let sayi =13;

// sayi=sayi+1;
// console.log(sayi);


// sayi++;
// console.log(sayi);

let sayim = sayi++;
console.log("sayim",sayim);
let yenisayim= ++sayi;
console.log("sayimYeni",yenisayim);



// NAN KULLANIMI not a number
console.log(15/4);
console.log(15/"mgf");
console.log(15*"mggf");

let birlestirme = "dersi"+sayi+"kere tekrar ettin";
console.log(birlestirme);