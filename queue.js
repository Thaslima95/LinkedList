class Queue{
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
    isEmpty()
    {
        return this.items.length===0
    }
    top()
    {
        if(!this.isEmpty())
        {
            return this.items[0]
        }
    }
    size()
    {
        return this.items.length;
    }
    print()
    {
        console.log(this.items.toString())
    }
    
}

const q=new Queue()
q.enqueue(9)
q.enqueue(10)
q.enqueue(2)
// q.print()
q.enqueue(30)
q.print()
q.dequeue()
q.print()