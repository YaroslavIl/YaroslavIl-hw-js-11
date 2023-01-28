

// 1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
// CountLowrercase("abc"); ===> 0

// CountLowrercase("abcABC123"); ===> 3

// CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

let str = 'qweqQQ';
let regular = /[A-Z]/g;
let newStr = '';
// console.log(str.match(regular));



function showStr(a) {

    let res = a.match(regular);
    if (res == null) {
        // console.log('Немає великих літер');
        console.log(res = 0);
    }
    else {
        newStr = res.length;
        console.log(newStr);
    }
    
}
showStr(str);



// 2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його
// fclearString("hell5o wor6ld") ======> 56

let strNum = 'p3p33p888';
let reg = /[0-9]/g;
let newNum = '';

function showStrNum(b) {

    let resuslt = b.match(reg);
    for (let i = 0; i < resuslt.length; i++){
        newNum += resuslt[i];
    }
    let number = Number(newNum);
    console.log(number);
    console.log(typeof number);
}
showStrNum(strNum);

// 3) Створити інпут який отримує пін код(це 4 цифрових значення).За допомогою регулярки перевітити чи валідний пін код ввів користувач
// "1234"   -- > true
// "12345"  -- > false
// "a234"   -- > false

let input = document.querySelector('input');
let regPass = /\b\d{4}\b/;

input.addEventListener('change', examination);
function examination(e) {

    if (regPass.test(e.target.value) == true) {
        alert('Вітаємо пароль вірний');
    }

    else {
        input.style.borderColor = 'red';
        alert('Пароль введено невірно')
    }
};


// 4) Створити регулярку яка отримує адресс сторінки і повертає тільки адресс
// "https://prog.academy/?page=1" -- > "https://prog.academy/"

let site = 'https://prog.academy/?page=1';
let regSite = /\w{5}\:\S{2}\S+\//;
let showSite = '';
function showReg(e) {
    let modReg = e.match(regSite)
    for (let i = 0; i < modReg.length; i++){
        showSite += modReg[i];
    }
    console.log(showSite);
};
showReg(site);


// 5) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів.Приклад: validateUsr('a') => false,
//     validateUsr('p1pp1') => true, validateUsr('asd43_34') => true

let nameReg = /\b[a-z_0-9-]{4,10}\b/ig;
let userName = 'Davi_007-q'; // 10 символів
let userName1 = 'Davi_007-qq'; // 11 символів
let userName2 = 'Dav'; // 3 символів
function validate(e) {
    console.log(nameReg.test(e));
}
validate(userName);
validate(userName1);
validate(userName2);