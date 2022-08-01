// // ilk yöntem
// // const button =document.querySelector('button');
// // ikinci yöntem
// // id ile de çekebiliyoruz
// // const button =document.querySelector(#buttonId);
// // üçüncü yöntem
// // class ile çekicez
// // const button =document.querySelector('.buttonClass');
// // get element by id ile çekme
// // const button =document.getElementById('buttonId');
// // class name olarak çekme // array olarak dönüyor
// const button = document.getElementsByClassName("buttonClass");
// // ilk yöntem tetikleme
// // button.addEventListener('click',() => {
// //     console.log('tıklandı');
// // })

// // ikinci yöntem
// // function add() {
// //   console.log("tıklandı");
// // }
// console.log(button);

// const liElemanları = document.querySelectorAll("li");
// console.log(liElemanları);

// liElemanları.forEach((eleman) => {
//   eleman.addEventListener("click", (e) => {
//     //  console.log('tıklandı');
//     //  eventin targetini bastırıyoruz
//     //  console.log(e.target);
//     // e.target.style.color='blue'
//   });
// });

// const ulDegerlerim = document.querySelector('ul');
// console.log(ulDegerlerim);
// // ulDegerlerim.remove();
// liElemanları.forEach((eleman) => {
//     eleman.addEventListener("click", (e) => {
      
//       e.target.remove();
//     });
//   });
//   const liElemanım= document.createElement('li');
//  liElemanım.textContent='JavaScript';


//  button.addEventListener('click',() =>{
//     const liElemanim = document.createElement('li');
// liElemanim.textContent = 'Javascript';
//   ulDegerlerim.prepend(liElemanim);
// // ulDegerlerim.append(liElemanim);

// })


 

// //  const liElemanım= document.createElement('li');
// //  liElemanım.textContent='JavaScript';

// // button.addEventListener("click",() => {
// //     const liElemanım= document.createElement('li');
// //  liElemanım.textContent='JavaScript';
// //  ulDegerlerim.append(liElemanım);

// //  })

// //  append sona eleman ekler
// // prepend başa eleman ekler

// // STEP ONE
// // UL i seç
// // li olusturup yazısını verdik
// // butona tıkladığımda ekleyeceğiz





// const button = document.querySelector('button');
// const button = document.querySelector('#buttonId');
//const button = document.querySelector('.buttonClass');
const button = document.getElementById('buttonId');
//const button = document.getElementsByClassName('buttonClass')[0];


//İlk Yöntem
// button.addEventListener('click',() =>{
//     console.log("Tıklandı");
// })

//İkinci Yöntem

// function add(){
//     console.log('Tıklandı');
// }

console.log(button);


const liElemanlari=document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
        // console.log("Tıklandı");
       
        // console.log(e);
        //console.log(e.target);
        e.target.style.color='blue';
    })
})


const ulDegerlerim =document.querySelector('ul');
console.log(ulDegerlerim);

// ulDegerlerim.remove();

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
      
        e.target.remove();
    })
})
const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
// append // sona eleman ekler
// prepend // başa eleman ekler


// STEP 1

// UL etiketini seç

// li oluşturduk

// STEP 3

// BUTONA TIKLADIĞIMDA EKLE

button.addEventListener('click',() =>{
    const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
  ulDegerlerim.prepend(liElemanim);
// ulDegerlerim.append(liElemanim);

})



