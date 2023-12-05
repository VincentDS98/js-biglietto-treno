const km = prompt('Quanti chilometri vuoi percorrere?');
const kmInNumber = parseInt(km);

console.log ('km', km, typeof km);
console.log ('kmInNumber',kmInNumber,typeof km);



const age = prompt('Quanti anni hai?');
const ageInNumber = parseInt (age);

console.log('age',age,typeof ageInNumber);
console.log('ageInNumber', ageInNumber, typeof ageInNumber);


if(ageInNumber < 18){
    const price = (kmInNumber * 0.21);
    console.log('price', price, typeof price);

    const discountedPrice = price - ((price/100) * 20);
    console.log('discountedPrice',discountedPrice, typeof discountedPrice);
    
    document.writeln('Ilprezzo del biglietto è' + discountedPrice.toFixed(2));

}

 else if(ageInNumber > 65){
    const price = (kmInNumber * 0.21);
    console.log('price', price, typeof price);

    const discountedPrice = price - ((price/100) * 40);
    console.log('discountedPrice',discountedPrice, typeof discountedPrice);
    
    document.writeln('Ilprezzo del biglietto è' + discountedPrice.toFixed(2));
}

else {
    const price = (kmInNumber * 0.21);
    console.log('price', price, typeof price);
    
    document.writeln('Ilprezzo del biglietto è' + price.toFixed(2));
}
