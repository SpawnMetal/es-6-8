const Title = 'Hello'

const isVisible = () => Math.random(0.5) > 0.5

const template =
`
    ${isVisible() ? `<p>Visible</p>` : ''}
    <h1>${Title}</h1>
`

console.log(template)

// Methods
const str = 'Hello'

console.log(str.startsWith('He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.endsWith('e'))

console.log(str.includes('llo'))

console.log(str.repeat(3))

//Убрать пробелы
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

console.log(str.padStart(10)) //Мин длина строки
console.log(str.padStart(10, '1234')) //Какими символами заполнить
console.log(str.padEnd(10, 'abc'))