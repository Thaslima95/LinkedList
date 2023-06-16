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
 function  isbalanced(str)
    {
        const mystack=new Stack();
        
        for(let char of str)
        {
            if(char=='(')
            {
              mystack.push(char)
            }
            else if(char==')')
            {
                if(mystack.isEmpty())
                {
                    return 1;
                }
                    mystack.pop()
                        
            }
            
        }
        if(mystack.isEmpty())
                    {
                        return 0;
                    }
                    // console.log(mystack)
        return 1;
    }

 
    // console.log(isbalanced('HELLO AND (WELCOME (TO THE) TCEA (CONTEST)TODAY)IS (SATURDAY())'))
    // console.log(isbalanced('(9*(7-2)*(1*5))'))
    console.log(isbalanced('(())'))
    console.log(isbalanced('({)'))

    // console.log(balanced('HELLO AND (WELCOME (TO THE) TCEA (CONTEST)TODAY)IS (SATURDAY()))))'))



