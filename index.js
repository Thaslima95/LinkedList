class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

//creating a new linked list

class LinkedList{
    constructor()
    {
        this.header=null;
        this.tail=null;
        this.size=0;
    }
    //Insert data at header(begining of the list)
prepend(data)
{
    const n=new Node(data)//creating a node
    //case 1 if list is empty
    if(this.size==0)
    {
        this.header=n;
        this.tail=n;
    }
    else{
        n.next=this.header;//changing head data to next pointer
        this.header=n;//assigning a new node data as header
    }
    this.size++;//incrementing the list size
    return this;
}
//Insert data at the end of the list
append(data)
{
    const n=new Node(data)
    //checking list is empty
    if(this.size==0)
    {
        this.header=n;
        this.tail=n;
    }
    else{
       //pointing tail  to temp
        const temp=this.tail;
        this.tail=n;//assigning new node to tail
        temp.next=this.tail;//point temp next as tail
    }
    this.size++;
    return this;
}


printList()
{
    let str="";
    let current=this.header;//pointing header node as current
    while(current!=null)
    {
     str+=current.data+" ";
     current=current.next;//pointing current.next as current node
    }
    return str;
}

//remove node at head
removehead()
{
    if(this.size==0)
    {
        return null;
    }
    let data=this.header.data;//storing header data in data variable
    //if list contains only one node
    if(this.size===1)
    {
        this.header=null;//if we set to null it becomes empty
        this.tail=null;
    }
    else{
        this.header=this.header.next;
        this.size--;
        return data;
    }
}

removevalue(value)
{
    if(this.size===0)
    {
        return false;
    }
    else{
        let current=this.header;

        while(current.next!=null)
        {
            if(current.next.data==value)
            {
                current.next=current.next.next;
                // console.log(current)
                return true;
            }
            current=current.next;
           
        }
        return false;
    }
}

//remove element at last
removeTail()
{
    if(this.size==0)
    {
        return false;
    }
    if(this.size==1)
    {
        this.header=null;
        this.tail=null;
        return true;
    }
    else{
        let current=this.header;
        while(current.next.next!=null)
        {
            current=current.next;
        }
        current.next=null;
        return current;
    }
}

//search in a linkedlist
searchdata(data)
{
    let current=this.header;//point header node as current node
    while(current!==null)
    {
     if(current.data===data)
     {
        return current.data
     }
     current=current.next;//pointing current node as next
    }
    return null;

}
}






let linklist=new LinkedList()
console.log(linklist.prepend(1))
console.log(linklist.prepend(90))
console.log(linklist.append(4))
console.log(linklist.append(110))
// console.log(linklist.printList())
// console.log(linklist.removehead())
console.log(linklist.searchdata(8))
console.log(linklist.removevalue(4))
console.log(linklist.printList())
console.log(linklist.removeTail())
console.log(linklist.printList())