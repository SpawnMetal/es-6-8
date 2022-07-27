const cityField = 'city'
const job = 'Frontend'

const person = {
  age: 26,
  name: 'Irina',
  job,
  [cityField]: 'Limassol', //Будет динамический ключ city
  [cityField + Date.now()]: 'Limassol', //Будет динамический ключ city...
  'country-live': 'Cyprus',
  print: () => 'Person', //Не работает с контекстом this
  // toString: function()
  toString() { //То же самое, только работает с контекстом this в отличае от стрелочной
    return Object.keys(this)
      .filter(key => key !== 'toString')
      .map(key => this[key])
      .join(' ')
  },
}

console.log(person.toString())
console.log(person.print())
console.log(person)

// Methods
const first = {a: 1}
const second = {b: 2}

console.log(Object.is(10, 20))
console.log(Object.is(20, 20))
// console.log(Object.assign(first, second)) //Заменит значения существующих объектов на объединённое
console.log(Object.assign({}, first, second)) //Не заменит значение
console.log(first)

const obj = Object.assign({}, first, {c: 2, d: 3})
console.log(obj)

console.log(Object.entries(obj)) //Ассоциативный массив, может например портироваться в php
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["a", 1]
// 1: (2) ["c", 2]
// 2: (2) ["d", 3]

console.log(Object.keys(obj)) //["a", "c", "d"]
console.log(Object.values(obj)) //[1, 2, 3]
