//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const symbol = Symbol('demo') //Создаёт уникальное значение, всегда, не видим для перебора через in
const other = Symbol('demo')

console.log(symbol)
console.log(other)
console.log(symbol == other) //false
console.log(symbol === other) //false

const obj =
{
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta' //Не видим для перебора в in
}

console.log(obj[symbol]) //meta
console.log(obj[other]) //undefined

for(let key in obj) //[symbol] не видим для перебора в in
{
    console.log(key)
}

console.log(obj.demo) //DEMO
console.log(obj[symbol]) //meta