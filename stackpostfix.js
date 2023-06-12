class Stack{
    constructor()
    {
        this.items=[]
    }
    push(element)
    {
        this.items.push(element)
    }
    isEmpty()
    {
        return this.items.length===0
    }
    pop()
    {
        return this.items.pop()
    }
}
 function  postfix(str)
    {
        const mystack=new Stack();
        for(let char of str)
        {
        // console.log(parseInt(char))
            if(!isNaN(parseInt(char)))
            {
              mystack.push(+char)
            }
            else
            {
              switch(char)
              {
                case '+':
                
                    mystack.push((mystack.pop())+(mystack.pop()))
                    // console.log(mystack)
                    break;
                case '-':
                   
                    mystack.push((mystack.pop())-(mystack.pop()))
                    break;
                case '/':
                    
                    mystack.push(mystack.pop()/mystack.pop())
                    break;
                case '*':
                    
                    mystack.push((mystack.pop())*(mystack.pop()))
                    // console.log(mystack)
                    break;
                case '%':
                    
                    mystack.push(mystack.pop()%mystack.pop())
                    break;
              }
               
                
            }
            
        }
        return mystack.pop()
    }

    console.log(postfix('231*+9-'))