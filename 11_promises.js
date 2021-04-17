// setTimeout(() =>
// {
//     console.log('After delay')
// }, 500)

// Не создаёт асинронную вложеность

const delay = ms => new Promise
(
    (resolve, reject) =>
    {
        setTimeout(() => resolve(`Done! ${ms}`), ms)
    }
)

delay(1000) //Через 1000 мс
.then(data => delay(500)) //Затем ещё через 500 мс
.then(data => console.log(data)) //'Done!'
.catch(err => console.log(err))
.finally(() => console.log('Finally')) //Запускается всегда при завершении, даже если произошла ошибка

async function asyncDelay()
{
    try //Необходимо для reject
    {
        const data = await delay(2000) //То же, что и delay(1000).then(data). await заставляет ждать асинхронное выполнение, чтобы выполнить строку ниже
        console.log(data)
    }
    catch(e)
    {
        console.log('Error', e)
    }
}

asyncDelay()

Promise.all //Ждёт, пока завершатся все
([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

Promise.race //Ждёт, пока завершится самый первый
([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))