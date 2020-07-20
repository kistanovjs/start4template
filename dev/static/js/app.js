"use strict";

// (function(){
// 	console.log('app');
// })();
// var javascript = "Я Javascript";
// alert(javascript)
// let admin;
// let name
// name = "Джон";
// admin = name;
// alert(admin);

// let planetEarth;
// let userName;

// userName = prompt('Какое твое имя?', "Леша")
// alert(userName)
// let NameIsRight = confirm("Ты " + userName + "?")
// alert(NameIsRight)

// let question = prompt("Какое официальное название JavaScript", "")

// if(question == "ECMAscript") {
// 	alert("Ты прав!");
// 	question
// } else {
// 	alert("Подумай еще раз");
	
// }

// while(question == 0 || question != "ECMAScript") {
//     alert("Ты не задал данные");
//     question = prompt("Какое официальное название JavaScript", "")
// }

// for(let i = 0; i<=100;i++) {
//     if(i % i == 0 && i % 1 == 0 && i % 2 != 0) {
//         alert(i)
//     }

// }


// let numberType = prompt("Введите число и я определю его значение")

// if(numberType == 0) {
// 	alert(0)
// } else if (numberType >= 1) {
// 	alert(">" + 1)
// } else {
// 	alert("< -" + 1)
// }

// let result;
// let a = 2
// let b = 2
// result = (a + b < 4) ? "Мало" : "Много"

// alert(result)

// let message;
// let login = "d";
// message = (login == "Сотрудник") ? "Привет" :
//  (login == "Директор") ? "Здравствуйте" :
//  (login == "") ?  "Нет логина" :
//  "Такого логина нет" 
// alert(message)

// let age = 9
// if (age != 14 || age >=90) {
//     alert(age)
// }

// let userLogin;
// let userPass;
// let signUp = prompt("Ваш логин")
// if(signUp == "Админ") {
//     userPass = prompt("Ваш пароль")
//     if (userPass == "Я главный") {
//         alert("Здравствуйте!")
//     } else if (userPass == "" || userPass == undefined) {
//         alert("Отменено")
//     } else {
//         alert("Неверный пароль")
//     }
// }else {
//     alert("Я вас не знаю")
// }
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );ф
// for(let i = 1; i < 10;) {
//     i++
//     if (!(i % 2)) {
//         alert(i)
//     }
// }

// let i = 0;
// while(i<3) {
//     alert("number " + i + " !")
//     i++
// }

// function min(a,b) {
//     if (a>b) {
//         return b
//     } else {
//         return a
//     }
// }

// min(3,4)
// alert(min(-2,8))

// function pow(x,n) {
//     let k = x
//     if(!(x>0) || !(n>0)) {
//         return "Введите натуральные числа"
//     }
//     for (let c = 1;c<n;c++) {
//         x = x * k
//     }
//     return x
// }

// let dataX = +prompt("Введите первое значение", "");

// let dataY = +prompt("Введите второе значение", "");

// alert(pow(dataX,dataY));
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = function(obj) {
//     let price = 0;
//     for(let key in obj) {
//         price += obj[key];
//     }
//     return price
// }

// alert(sum(salaries))

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// let multiplyNumeric = function(obj) {
//     for(let key in obj) {
//         if (typeof(obj[key]) == "number"){
//             obj[key] *= 2   
//         }
//     }
// }

// multiplyNumeric(menu)

// function checkSpam(str) {
//     str = str.toLowerCase()
//     if (str.includes('viagra') || str.includes("xxx")) {
//         return true
//     } return false
// }
// alert(checkSpam("viagra"))
// alert(checkSpam("g"))
// alert(checkSpam("dsds fxxx fgsfc"))
// alert(checkSpam("x x x"))

// function truncate(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength - 3) + "...";
//     } else {
//         return str
//     }
// }
// alert(truncate("Я хотел бы сказать", 10))

// function extractCurrencyValue(str) {
//     return +str.slice(1) 
// }
// alert(extractCurrencyValue("$1204") === 1204)

// let styles = ["Джаз", "Блюз", "Скам"];
// alert(styles);
// styles.push("Рок-н-Ролл");
// alert(styles);
// let middle = ((styles.length - 1) / 2);
// let middleValue = Math.round(middle)
// styles[middleValue] = "Классика";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift("Рэп");
// styles.unshift("Рэгги");
// alert(styles);

// function camelize(arg) {
//     let text;
//     let textReady = "";
//     let arr = arg.split("-");
//     arr.forEach(item => {
//         text = item.split('');
//         if (arr[0] == "") {
//            if (!(arr[1] == item || arr[0] == item)) {
//             text[0] = text[0].toUpperCase();
//            }
//         } else if (!(arr[0] == item)) {
//             text[0] = text[0].toUpperCase();
//         }

//         textReady += text.join('')
//     });
//     return textReady
// }

// let string = "я-тут-живу"

// function camelize(str) {
//     return str
//       .split('-')
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('');
//   }
// camelize(string);
// alert(camelize(string))

// function filterRange(arr, a, b) {
//   return arr.filter(item => item >= a && item <= b)
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); 

// let arr = [5, 5, 2, 51, 55 , 52, 1]; 

// function filterRangeInPlace(arr, a, b) {
//   for(let i = 0; i<arr.length;i++) {
//     if (arr[i] <= a || arr[i] >= b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr )

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = function(arg) {
//   let result = arg[0].name;
//   for(let i = 1; i<arg.length; i++) {
//     result = result + " " +arg[i].name
//   }
//   alert(result)
//   return result.split(' ')
// }
// alert(names(users))




// 1
// field.addEventListener('click', function(event) {
//   let topLimit = this.clientHeight - ball.clientHeight;
//   let leftLimit = this.clientWidth - ball.clientWidth;
//   let topPosition = event.clientY + window.scrollY - this.clientTop - this.offsetTop - ball.clientHeight / 2;
//   let leftPosition = event.clientX + window.scrollX - this.clientLeft - this.offsetLeft - ball.clientWidth / 2;
//   if (topPosition > topLimit || topPosition < 0) {
//     ball.style.top = topPosition < 0 ? "0px" : topLimit + "px"
//   } else {
//     ball.style.top = topPosition + "px"
//   }
//   if (leftPosition > leftLimit || leftPosition < 0) {
//     ball.style.left =  leftPosition < 0 ? "0px" : leftLimit + "px"
//   } else {
//     ball.style.left = leftPosition + "px"
//   }
// })




// 2
let arrPrices = [];
$(".tovar .price").each(function(){ 
    arrPrices.push(+$(this).text())
})
let minPrice = Math.min.apply(null, arrPrices);
let maxPrice = Math.max.apply(null, arrPrices)


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: minPrice,
    max: maxPrice
});
$(".filter__min").val(minPrice)
$(".filter__max").val(maxPrice)

let filterPlace = $(".js-range-slider");
filterPlace.on("change",function(){
    let filter = $(this);
    let filterFrom = filter.data("from");
    let filterTo = filter.data("to");
    $(".filter__min").val(filterFrom)
    $(".filter__max").val(filterTo);
    $(".tovar .price").each(function(){
        if(+$(this).text() >= filterFrom && +$(this).text() <= filterTo) {
            $(this).css("display","block")
        } else {
            $(this).css("display","none")
        }
    })
})

$(".filter__min").on("keyup",function(){
    let filterVal = $(this).val();
    if (filterVal > filterPlace.data("to")) {
        filterVal = filterPlace.data("to");
        $(this).val(filterPlace.data("to"))
    }
    filterPlace.data("ionRangeSlider").update({
        from: filterVal
    })
})
$(".filter__max").on("keyup",function(){
    let filterVal = $(this).val();
    if (filterVal < filterPlace.data("from")) {
        filterVal = filterPlace.data("from");
        $(this).val(filterPlace.data("from"))
    }
    filterPlace.data("ionRangeSlider").update({
        to: filterVal
    })
})