

// Change first character of Name and Surname.
const nameSurname = "asik veysel";
let nameSurnameList = nameSurname.split(" ");
for (let indexOfList = 0; indexOfList < nameSurnameList.length; indexOfList++) {
    nameSurnameList[indexOfList] = nameSurnameList[indexOfList].charAt(0).toUpperCase() + nameSurnameList[indexOfList].slice(1);
}
let upperFirstLetter = nameSurnameList.join(" ");
console.log(upperFirstLetter);

// 10X10 Matris
let numberList = [];
let totalString = "";
for (let index = 1; index <= 100; index++) {
    numberList.push(index);
    if (index % 10 == 0) {
        totalString += numberList.join(",") + "\n"; 
        numberList.length = 0;
    }
}
console.log(totalString);


// Finding Prime Number
const MAX_NUMBER = 100;
for (let primeNumber = 2; primeNumber < MAX_NUMBER; primeNumber++) {
    let controlPrime = true;
    for (let divisorNumber = 2; divisorNumber < primeNumber; divisorNumber++) {
        if (primeNumber % divisorNumber == 0) {
            controlPrime = false;
            break;
        }
    }
    if (controlPrime===true) {
        console.log(primeNumber);
    }
}

// password olusturma 
const NUMBER_OF_PASSWORD = 50;
const PASSWORD_MAX = 8;
const PASSWORD_MIN = 16;
const charsetLetter = "abcdefghiklmnopqrstuvwxyz";
const charsetLetterCapital="ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const charset= ".!'^+%&/*()=?_";
const charsetNumber= "0123456789";
for (let index = 0; index < NUMBER_OF_PASSWORD; index++) {
    let passwordLength = Math.floor(Math.random() * (PASSWORD_MAX - PASSWORD_MIN)) + PASSWORD_MIN;
    let randomPassword ="";
for (let passwordIndex = 1; passwordIndex < passwordLength; passwordIndex++) {
    if (passwordIndex % 3 == 0) {
        let randomNumber = Math.floor(Math.random() * charset.length);
        randomPassword += charset.charAt(randomNumber)
    } else if (passwordIndex % 4 == 0) {
        let randomNumber = Math.floor(Math.random() * charsetLetterCapital.length);
        randomPassword += charsetLetterCapital.charAt(randomNumber)
    } else if (passwordIndex % 5 == 0) {
        let randomNumber = Math.floor(Math.random() * charsetNumber.length);
        randomPassword += charsetNumber.charAt(randomNumber)
    } else {
        let randomNumber = Math.floor(Math.random() * charsetLetter.length);
        randomPassword += charsetLetter.charAt(randomNumber)
    }
}
console.log(`Password: ${randomPassword}`);
}

// create star 
let starList = [];
const MAX_STAR = 6;
const YILDIZ = "*";
for (let startIndex = 0; startIndex < MAX_STAR; startIndex++) {
    starList.push(YILDIZ)
    console.log(starList.join(""))
}
let sifreler = [];
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const rakamlar = "0123456789"
const kareterler = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
const sifreSayisi = 50;
for (ilkDongu = 0; ilkDongu < sifreSayisi; ilkDongu++) {
    const sifreUzunlugu = Math.floor(Math.random() * 8) + 8
    let sifre = " ";
    for (index = 1; index < sifreUzunlugu; index++) {
        if (index % 3 == 0) {
            let karakterSec = Math.floor(Math.random() * buyukHarfler.length);
            sifre += buyukHarfler.charAt(karakterSec)
        } else if (index % 5 == 0) {
            let karakterSec = Math.floor(Math.random() * rakamlar.length);
            sifre += rakamlar.charAt(karakterSec)
        } else if (index % 4 == 0) {
            let karakterSec = Math.floor(Math.random() * kareterler.length);
            sifre += kareterler.charAt(karakterSec)
        } else {
            let karakterSec = Math.floor(Math.random() * kucukHarfler.length);
            sifre += kucukHarfler.charAt(karakterSec)
        }
    }
    sifreler.push(sifre)
}
console.log("50 Adet Sifre:", sifreler)
