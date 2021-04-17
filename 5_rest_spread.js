// Rest

//#region ex1
// function average(arr) //Функция ищет среднее
// {
//     return arr.reduce((acc, val) => acc += val, 0) / arr.length //acc = итоговому значению, с которым работаем дальше, прибавляя val, затем эта сумма делится на кол-во элементов
//     // return Array.from(arguments).reduce((acc, val) => acc += val, 0) / arguments.length //Раньше работали со всеми аргументами, пкередаваемыми в функцю так
// }

// console.log(average([10, 20, 30, 40])) //25
// // console.log(average(10, 20, 30, 40)) //Раньше работали со всеми аргументами, пкередаваемыми в функцю так
//#endregion ex1

//#ex2
// function restExample(a, b, ...args) //...args в данном случае возьмёт оставшиеся переданные в функцию аргументы
// {
//     return args.reduce((acc, val) => acc += val, 0) / args.length
// }

// console.log(restExample(10, 20, 30, 40, 50)) //В функции будут обработаны только 30, 40, 50, результат 40
//#endregion ex2

// Spread

//#region ex3
// const array = [1, 2, 3, 5, 8, 13]
// const fib = [0, 1, ...array]
// console.log(...array) //1, 2, 3, 5, 8, 13. ... перечисляет каждый элемент массива
// console.log(Math.max(...array)) //13
// console.log(fib) //[0, 1, 1, 2, 3, 5, 8, 13]
//#endregion ex3

// Destructuring

//#region ex4
// const arr = [1, undefined, 3, 5, 8, 13]

// // const a = arr[0]
// // const b = arr[1]
// const[a, b = 42, ...c] = arr

// console.log(a, b, c) //1 42 (4) [3, 5, 8, 13]

// const [a1,, c1] = arr

// console.log(a1, c1) //1 3, b1 = 2 не задан
//#endregion ex4

//#region ex5
// const adress =
// {
//     country: 'USA',
//     city: 'The Venus Project',
//     // street: 'Karl Heinrich Marx',
//     concat: function()
//     {
//         return `${this.country}, ${this.city}, ${this.street}`
//     }
// }

// console.log(adress.concat()) //USA, The Venus Project, Karl Heinrich Marx

// const {city, country, street = 'Valley Ln', concat} = adress //street - значение по умолчанию, если не задано

// console.log(city) //The Venus Project

// console.log(concat()) //undefined undefined undefined. т. к. в глобальном контексте у this не существует city, country и т. д.
// console.log(concat.call(adress)) //USA, The Venus Project, Karl Heinrich Marx

// const {concat: adressConcat} = adress

// console.log(adressConcat.call(adress)) //USA, The Venus Project, Karl Heinrich Marx
// console.log(street) //Valley Ln
//#endregion ex5

//#region ex6
const adress =
{
    country: 'USA',
    city: 'The Venus Project',
    street: 'Karl Heinrich Marx',
    concat: function()
    {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

 const {city, ...rest} = adress

 console.log(city)
 console.log(rest)

 const newAdress = {...adress, street: 'Valley Ln', code: 123} //street переопределён новый, т. к. это создание нового объекта

 console.log(newAdress)
//#endregion ex6