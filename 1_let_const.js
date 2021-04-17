//#region let
// let можно объявить после объявления функции, но перед использованием в ней переменной (вызовом)
// a 42
// aa 42
// 24

let a = 24

if(true)
{
    let a = 42

    console.log('a', a)

    if(true)
    {
        console.log('aa', a)
    }
}

console.log(a)
//#endregion let

//#region const
// [1, 2, 3, 4]

const mas = [1, 2, 3]

mas.push(4)
console.log(mas)
//#endregion const