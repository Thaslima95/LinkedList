// class createArray
// {
//     constructor()
//     {
//         this.data=[]
//     }
//     push(element)
//     {
//         this.data.push(element)
//     }
//     shift()
//     {
//         return this.data.shift()
//     }
//     enqueue(element)
//     {
//         this.data.push(element)
//     }
//     dequeue()
//     {
//         return this.data.pop()
//     }
// }

// let arr=new createArray()
// arr.push(10)
// arr.push(15)
// arr.push(20)
// arr.shift()
// arr.push(18)
// arr.dequeue()
// console.log(arr)

class Stack
{
     constructor()
    {
        this.items=[]
    }
    insert(element)
    {
        this.items.push(element)
    }
    // isEmpty()
    // {
    //     return this.items.length===0
    // }
    remove()
    {
        return this.items.pop()
    }
}

class Queue
{
     constructor()
    {
      this.items=[]
    }
    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        return this.items.shift()//returns element at the front of the queue
    }
}

function createArrays(option)
{
    if(option=="LIFO")
    {
        let arr=new Stack();
        arr.insert(10)
arr.insert(15)
arr.insert(20)
console.log(arr)
arr.remove()
console.log(arr)

    }
    else if(option=="FIFO")
    {
        let arr=new Queue();
        arr.enqueue(30)
        arr.enqueue(40)
        console.log(arr)
        arr.dequeue()
        console.log(arr)
    }
}
createArrays("LIFO")
createArrays("FIFO")