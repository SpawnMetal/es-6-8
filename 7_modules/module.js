const privateVariable = 42

export const COLOR = '#bababa' //Экспортируемая переменная будет видна во всех модулях

export function compute(a, b) //Экспортируемая функция будет видна во всех модулях
{
    return a + b
}

export default
{
    log() //Возвращает значение приватной переменной
    {
        console.log(privateVariable)
    }
}