// Стрелочные функции - они же лямбда функции
// Стрелочная функция не создаёт своего контекста, поэтому this будет равно window, в то время как у обычной функци мы не сможем обратиться к this.name, если он был у window
// function sum(a, b)
// {
//     return a + b
// }

// function cube(a)
// {
//     return a ** 3
// }


// const sum = (a, b) =>
// {
//     return a + b
// }

const sum = (a, b) => a + b
const cube = a => a ** 3

console.log(sum(41, 1))
console.log(cube(2))

// setTimeout(() => console.log('After 1 second'), 1000)

// Context
function log()
{
    console.log(this)
}

const arrowLog = () => console.log(this)

const person =
{
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function()
    {
        // self = this // ES5
        setTimeout(() => {console.log(this.name + ' ' + this.age)}, 500)
    }
}

person.delayLog()