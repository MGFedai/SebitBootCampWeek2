const notlar =[12,55,89,6,21,48,65,44,];

for(let i=0;i<notlar.length;i++){
    if(notlar[i]===32){
continue;
    }
    console.log(notlar[i]);
    if(notlar[i]===100)
    {
        console.log('Bravo En Yüksek Notu Sen ALdın');
        break;
    }
}
