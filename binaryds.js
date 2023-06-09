class Node{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor()
    {
        this.root=null;
    }

    isEmpty()
    {
        return this.root===null
    }
    insert(data)
    {
       const newnode=new Node(data)
     
        // console.log(this.isEmpty())
       if(this.isEmpty())
       {
        this.root=newnode;
        // console.log(this.root.data)
       }
       else{
        // console.log(this.root.data,newnode.data+ "testing")
        this.insertNode(this.root,newnode)
       }
    }
    insertNode(root,newnode)
    {
        //checking the value of new node is less than or greater than root node
        // console.log(newnode.data)
        // console.log(root.data)
        // console.log(newnode.data<root.data)
        if(newnode.data<root.data)
        {
            // console.log(newnode.data)
            if(root.left===null)
            {

                root.left=newnode;
                // console.log(newnode)
                // console.log(root)
            }
            else{
                // console.log(newnode.data)
                this.insertNode(root.left,newnode)
                // console.log(root)
            }
        }
        else{
            // console.log(newnode)
            if(root.right===null)
            {
                root.right=newnode;
                // console.log(root)
            }
            else{
                this.insertNode(root.right,newnode)
                // console.log(newnode)
            }
        }
      
    }

    search(root,value)
    {
        if(!root)
        {
            return false
        }
        else{
            if(root.data===value)
            {
                return true
            }
            else if(value<root.data)
            {
                return this.search(root.left,value)
            }
            else if(value>root.data)
            {
                return this.search(root.right,value)
            }
        }
    }
}

let bst=new BST();
bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(2)
bst.insert(16)
bst.insert(18)

console.log(bst.search(bst.root,19))
