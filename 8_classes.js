class Person
{
    type = 'human'

    constructor(name)
    {
        this.name = name
    }

    greet()
    {
        console.log(this.name + ' говорит привет!')
    }
}

const max = new Person('Max')

console.log(max)
max.greet()
console.log(max.type)
console.log(max.__proto__ === Person.prototype) //Прототипом max является свойство класса Person - prototype

class Programmer extends Person //Наследуется от класса Person
{
    constructor(name, job)
    {
        super(name) //Нужно сначала вызвать конструктор родителя (с помощью super обратимся к нему), иначе будет ошибка: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this._job = job
    }

    get job() //Вызывается как свойство, а не функция. Это просто поле
    {
        return this._job.toUpperCase()
    }

    set job(job) //Присваивается свойству job значение(job), как обычной переменной
    {
        if(job.length < 2) console.log('Validation failed')
        else this._job = job
    }

    greet() //Свойства и методы класса могут быть переписаны
    {
        super.greet() //Сначала идёт вызов функции из родителя
        console.log('Rewritten')
    }
}

const frontend = new Programmer('Max', 'Frontend')
console.log(frontend)
frontend.greet()
console.log(frontend.job)
frontend.job = 'Backend'
console.log(frontend.job)

// Static

class Util
{
    static average(...args) //static позволит обратиться к методу класса без запуска конструктора
    {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

//Это не понадобится, т. к. использован static, конструктор создавать не понадобилось
// const util = new Util()
// console.log(util.average(0, 1, 1, 2, 3, 5, 8, 13))
const res = Util.average(0, 1, 1, 2, 3, 5, 8, 13)
console.log(res)