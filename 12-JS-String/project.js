let email="m.g.fedai@gmail.com";
console.log(email);


// birlestirme

let ad ="mgf"
let soyad="fedai göbek"
let adSAOYAD =ad+" "+soyad;
console.log(adSAOYAD);
console.log(adSAOYAD[1]);

// KAÇ KARAKTER
console.log(adSAOYAD.length);


// STRİNG METHODLARI
console.log(adSAOYAD.toUpperCase());
let kucukAdSoyad = adSAOYAD.toLowerCase();
console.log(kucukAdSoyad);

// kaçıncı index
let index = adSAOYAD.indexOf('a');
let indexLast = adSAOYAD.lastIndexOf('a');
console.log(index);
console.log(indexLast);

// Slice Kullanımı
let ilkIsim=adSAOYAD.slice(0,8);
console.log(ilkIsim);


// replace
//  asagıdaki ilk gördüğünü değiştiriyor
let yerdegistir = adSAOYAD.replace(" ","")
console.log(yerdegistir);
// replaceAll
let yerdegistirtam = adSAOYAD.replaceAll(" ","")
console.log(yerdegistirtam);
