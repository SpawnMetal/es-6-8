const array = [10, 20, 30, 40]
const str = 'Hello'

console.log(array[Symbol.iterator])
console.log(str[Symbol.iterator])

const iter = str[Symbol.iterator]()

console.log(iter)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

// for(i in array) console.log(array[i])
for(let item of array) console.log(item)

const country =
{
    values: ['ru', 'by', 'usa'],
    [Symbol.iterator]()
    {
        let i = 0

        return {
            next: () =>
            {
                const value = this.values[i]
                i++

                return {
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for(let item of country) console.log(item)

// Generator
function *gen(num = 4)
{
    for(let i = 0; i < num; i++)
    {
        try
        {
            yield i
        }
        catch(e)
        {
            console.log(e)
        }
    }
}

const iter1 = gen(3)

console.log(iter1.next())
console.log(iter1.throw('My error'))
console.log(iter1.next())
console.log(iter1.next())

for(let i of gen(4)) console.log(i)