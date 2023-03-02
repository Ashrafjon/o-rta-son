// var text = 'salom'

// console.log(text);

// var num = 123
// var num2 = 555

// var javob  = num + num2
// var text = 'misolni javobi '
// var text2 = ' teng'
// console.log(text + javob + text2);


// console.log(12 + 12);
// console.log(12 / 12);
// console.log(12 - 12);
// console.log(123 % 12);
// // console.log(123 * 12);
// console.log(--num);

// var rost = true
// console.log(rost);

// var str = 'szcenzy'
// var raqam = 123456
// var bool = true

// console.log( typeof str);
// console.log( typeof raqam);
// console.log( typeof bool);

// console.log(10 <= 10);
// console.log(11 >= 15);


// var text1 = '123'
// var text2 = 123

// console.log(text1 - text2);

// var rost = true
// var yolgon = false

// console.log(10 - true);

// var ism = prompt('ismingiz nima')
// var familiya = prompt('familiyangiz nima')

// var info = 'xush kelibsiz ' + ism + " " + familiya +  " " + yosh + ' yoshda'

// console.log(info);




// var yosh = +prompt('yoshingiz necchi')

// console.log(yosh);



// var ism = prompt('ismingiz nima')
// var yil = prompt('hozirgi yil nechhi')
// var tugulgan = prompt('tugulgan yilingiz')

// var info = yil - tugulgan

// console.log('sizning ismingiz ' + ism +  " " + info + ' yoshda' );

//  let chiqish = confirm('siz rostdan ham tark etishni xoxlaysizmi')

//  console.log(chiqish);


//  if else

// let user = prompt('usernameingizni kiriting')
// let parol = prompt('parolingizni kiriting')


// if (parol.toLowerCase() === 'admin') {
//     console.log('ruxsat');
// }else{
//     console.log('parol xato');
// }


// let ism = prompt('ismingizni kiriting')

// if (ism.toLowerCase() === 'proweb' || ism.toLowerCase() === 'dastur') {
//     alert('salom')
// }else{
//     alert('xayr')
// }

// let son = prompt('son kiriting')

// if (son <16 && son > 7) {
//     alert('siz oqishingiz kerak')
// }else if (son < 50 && son > 16) {
//     alert('siz ishlashingiz kerak')
// }else if (son < 110 && son > 50) {
//     alert('siz damolishingiz kerak')
// }else{
//     alert('xatolik yuz berdi')
// }


// console.log(13 / 5);

// let son = +prompt('son kiriting')
 
// let javob = son % 2

// if (javob == 0) {
//     alert('juft')
// }else{
//     alert('toq')
// }

// orta son

let son1 = prompt('1-son kiriting')
let son2 = prompt('2-son kiriting')
let son3 = prompt('3-son kiriting')

if (son1 > son2 || son1 > son3) {
    console.log('orta son ' + son1);
} else if (son2 > son1  || son2 > son3) {
    console.log('orta son ' + son2);
}else if (son3 > son1  || son3 > son2) {
    console.log('orta son ' + son3);
}