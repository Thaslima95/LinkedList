
class Queue {

    constructor() {
        this.items = [];
        

    }



    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if(!this.isEmpty())
        {
            return this.items[0]
        }
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }



    dequeue() {
        if (this.items.length == 0) {
            return null;
        } else {
            return this.items.shift();


        }

    }

}
function findBin(n) {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    console.log(myQueue)
    for (var i = 0; i < n; i++) {

        result.push(myQueue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        console.log(myQueue)
        myQueue.enqueue(s2);
        console.log(myQueue)

    }

    return result;
}

console.log(findBin(2))