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
    top()
    {
        return this.items[this.items.length-1];
    }
}
 function  isbalanced(str)
    {
        const mystack=new Stack();
        for(let char of str)
        {
            if((char=='(')||(char=='{')||(char=='['))
            {
              mystack.push(char)
            }
            else
            {
                if(mystack.isEmpty())
                {
                    return 0;
                }
                // console.log(mystack.top())
                if((char==='}' && mystack.top()=='{')||(char===')' && mystack.top()=='(')||(char===']' && mystack.top()=='['))
                {
                    // console.log(mystack.top())
                    mystack.pop()
                    
                }
               
                
            }
            
        }
        if(mystack.isEmpty())
                    {
                        return 0;
                    }
                    console.log(mystack)
        return 1;
    }
// console.log(isbalanced('{[([({))]}}'))
// console.log(isbalanced('{(]}'))
// console.log(isbalanced('({[{}])}'))
// console.log(isbalanced('(){}(]['))
// console.log(isbalanced('{([{()}])}'))
console.log(isbalanced("HELLO AND (WELCOME (TO THE) TCEA (CONTEST)TODAY)IS (SATURDAY()))"))