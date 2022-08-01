// function hello(){
//     console.log("hello");
// }

// hello();
// hello();
// hello();



// //Fonksiyonlara Parametre Gönderme
// const mgf = function(ad='NURSEL',soyad='Davarcıoglu'){
// console.log(`ad Soyad ${ad}${soyad}`);
// }
// mgf('Muarrem','LALE')
// mgf();

// const karealani = function(kenar){
//     return kenar*kenar
// }


// let sonuc =karealani(6)
// console.log(sonuc);

//Eski tipten Arrow Function'a hafif geçiş

// const karealani = function(kenar){
//     return kenar * kenar;
// }

// arrow ilk fonksyion
// const karealanim= kenar =>{
//     return kenar**2;
// }

// tek parametre ise 
// const karealanim=(kenar)=>{a
//     return kenar**2;
// }
// let sonuc = karealani(6);
// console.log(sonuc);


// const karealanim=kenar=>kenar**2;
// console.log(karealanim(7));



// UYGULAMA
// ürünlerin ham fiyatlarını verip vergili halinin toplamını bulan bir hesaplama yapın

// const urunSatis=function(urunler,vergi){
//     let toplam=0;
//     for(let i=0;i<urunler.length;i++){
//         toplam+=urunler[i]+urunler[i]*vergi;
//     }
//     return toplam;
// }
// console.log(urunSatis([10,20,30],0.25));

let urunsatisArrow =((urunler,vergi)=>{
    let toplam=0;
    for(let i=0;i<urunler.length;i++){
        toplam+=urunler[i]+urunler[i]*vergi;
    }
    return toplam;

})
console.log(urunsatisArrow([10,20,30],0.25));
