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



    //preorder trsversal DFS
    //1.Read the root data
    //2.visit the left sub tree
    //3.visit the right sub tree
    preorder(root)
    {
        if(root)
        {
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }


    //inorder traversal
    //1.visit the left sub tree
    //2.Read the data of the root node
    //3.Visit the right sub tree
    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
    //postorder traversal
    //1.visit the left sub tree
    //2.visit the right sub tree
    //3.read the data of root node

    postorder(root)
    {
        if(root)
        {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.data)
        }
    }

    //BFS
    bfssearch(root)
    {
        const queue=[];
        queue.push(this.root)
        while(queue.length)
        {
            // console.log(queue)
            let current=queue.shift();//removes the value at begining of the array
            console.log(current.data)
            if(current.left)
            {
                queue.push(current.left)
            }
            if(current.right)
            {
                queue.push(current.right)
            }

        }
    }
    searchmin(root)
    {
        if(!root.left)
        {
            return root.data
        }
        else{
            return this.searchmin(root.left)
        }
    }

    searchmax(root)
    {
        if(!root.right)
        {
            return root.data
        }
        else{
            return this.searchmax(root.right)
        }
    }
    delete(value)
    {
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value)
    {
        if(root===null)
        {
            return root;
        }
       if(value<root.data)
       {
        root.left=this.deleteNode(root.left,value)
       }
       else if(value>root.data)
       {
        root.right=this.deleteNode(root.right,value)
       }
       else {
        if(!root.left && !root.right)
        {
            return null;
        }
        if(!root.left)
        {
            return root.right;
        }
        else if(!root.right)
        {
            return root.left;
        }
        root.data=this.searchmin(root.right)
        root.right=this.deleteNode(root.right,root.data)
       }
       return root;

    }

}

let bst=new BST();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.insert(18)
// bst.insert(4)

console.log(bst.search(bst.root,8))
// // bst.preorder(bst.root)
// // bst.inorder(bst.root)
// bst.postorder(bst.root)
// bst.bfssearch(bst.root)
// console.log(bst.searchmin(bst.root))
// console.log(bst.searchmax(bst.root))

// bst.bfssearch(bst.root)
// bst.delete(10)
// bst.bfssearch(bst.root)

