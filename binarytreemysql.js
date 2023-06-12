const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "aafiya.",
  database: 'Ecart',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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
    const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "aafiya.",
  database: 'Ecart',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
    
 insert(data)
{
  const newnode=new Node(data)
   if(this.isEmpty())
    {
        this.root=newnode;
    }
    else{
        
        this.insertNode(this.root,newnode)
       }
}
 insertNode(root,value)
 {
     const sql = 'INSERT INTO binarytreeOne (value) VALUES (?)';
  connection.query(sql, [value], function(error, results)  {
    if (error) {
      console.error( error);
    } else {
      console.log('Node inserted');
    }
 })
}
}
let bst=new BST();
bst.insert(10)

// const sql="DROP TABLE binaryTreeOne"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table deleted")
// })


// const sql='CREATE TABLE binaryTree (id INT AUTO_INCREMENT PRIMARY KEY ,value VARCHAR(255),root_id INT,FOREIGN KEY (root_id) REFERENCES binaryTree(id))'
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table created")

// })

//INSERT Root node 10,root_id null
// const sql="INSERT INTO binaryTree (value,root_id) VALUES (10,null)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log('Root node inserted')
// })

//Insert 5 and 15 under root node 10
// const sql="INSERT INTO binaryTree (value,root_id) VALUES (5,1),(15,1)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("child node inserted")
// })

//Insert 3 and 7 under node 5
// const sql="INSERT INTO binaryTree (value,root_id) VALUES (3,2),(7,2)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("Leaf nodes inserted")
// })

//Insert 18 under node 15 
// const sql="INSERT INTO binaryTree (value,root_id) VALUES (18,3)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("leaf node inserted")
// })

//Get all nodes  as per parent from tree
// const sql="SELECT b1.value AS Node,b2.value AS ParentNode FROM binaryTree AS b1 , binaryTree AS b2 WHERE b1.root_id<>b2.root_id AND b1.root_id=b2.id"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log(result)
// })

//same with left join
// const sql="SELECT b1.value AS Node,b2.value AS ParentNode FROM binaryTree AS b1 LEFT JOIN binaryTree as b2 ON b1.root_id=b2.id"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log(result)
// })

// create another table
// const sql='CREATE TABLE binaryTreeOne (id INT AUTO_INCREMENT PRIMARY KEY ,value VARCHAR(255),root_id INT,left_child INT,right_child INT ,FOREIGN KEY (root_id) REFERENCES binaryTree(id))'
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table created")

// })


// const sql="DROP TABLE binaryTreeOne"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table deleted")
// })

//Insert root node values
// function create(inputs,connection)
// {
//     const sql="SELECT id as Id,value as val,root_id as parent FROM binaryTreeOne"
//     connection.query(sql,function(err,result)
//     {
//         if(err) throw err;
//         console.log(result.length)

//         if(result.length==0)
//         {
//             inputs[1]=null;
//             const sql="INSERT INTO binaryTreeOne (value,root_id) VALUES ?"
// const values=[
//     inputs
// ]
// connection.query(sql,[values],function(err,result)
// {
//     if(err) throw err;
    
//     console.log('Root node inserted')
// })
//         }
//         else{
//             if(inputs[0]<result[0].val)
//             {
//                 inputs[1]=result[0].Id;
//                 const values=[inputs]
//                 console.log(values)
//              const sql="INSERT INTO binaryTreeOne (value,root_id) VALUES ?"
//              connection.query(sql,[values],function(err,result)
// {
//     if(err) throw err;
    
//     console.log('leaf node inserted')
// })

//             }

//         }
//         return "root already";
//     })

//  return "hello";

// }

// console.log(create([3],connection))


