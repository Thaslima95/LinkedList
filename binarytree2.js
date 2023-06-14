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

// const sql=`CREATE TABLE bstree (id INT AUTO_INCREMENT PRIMARY KEY ,
//     user_id VARCHAR(255),parent_id INT DEFAULT NULL,
//     left_child INT DEFAULT NULL,right_child INT DEFAULT NULL,
//     Investment INT,
//     FOREIGN KEY (parent_id) REFERENCES binaryTree(id))`
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table created")

// })


// const sql="DROP TABLE bstree"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table deleted")
// })

// const sql="INSERT INTO bstree (user_id,parent_id,left_child,right_child,Investment) VALUES ('PS05',null,null,null,100000)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("Root Node Inserted")
// })


function leftbinarytree(user,amnt,parent_id)
{
    // console.log(parent_id)
    const query=`SELECT b1.id,b1.left_child,b1.right_child,b1.parent_id,b1.Investment FROM bstree b1 INNER JOIN bstree b2 ON b1.id=${parent_id}`
    connection.query(query,(err,result)=>{
        if(err) throw err;
        console.log(result)
        parent_id=result[0].id
        console.log(result[0].id+"jshfjs")
        if(amnt < result[0].Investment)
        {
             if(result[0].left_child==null)
        {
            const sql=`INSERT INTO bstree (user_id,parent_id,Investment) VALUES ('${user}',${parent_id},${amnt})`
        connection.query(sql,function(err,result){
            if(err) throw err;
            connection.query(`UPDATE bstree SET left_child=${result.insertId} WHERE id=${parent_id}`,(err,result)=>{
                if(err) throw err;
                console.log(result)
            })
        })
        }
        else{
            console.log("first else")
            parent_id=result[0].left_child;
            console.log(parent_id)
            leftbinarytree(user,amnt,parent_id)
        }
      

        }
       
        else if(amnt>result[0].Investment){
            console.log('second else')
            console.log(result[0].id)
            parent_id=result[0].id
            console.log('right')
               if(result[0].right_child==null)
        {
            const sql=`INSERT INTO bstree (user_id,parent_id,Investment) VALUES ('${user}',${parent_id},${amnt})`
        connection.query(sql,function(err,result){
            if(err) throw err;
            connection.query(`UPDATE bstree SET right_child=${result.insertId} WHERE id=${parent_id}`,(err,result)=>{
                if(err) throw err;
                console.log(result)
            })
        })
        }
        else{
            parent_id=result[0].right_child;
            console.log(parent_id)
            leftbinarytree(user,amnt,parent_id)
        }
        }console.log(amnt>result[0].Investment)
        
       
    })
}


function insert(user,amnt,parent_id)
{
    
  const sql=`SELECT * FROM bstree WHERE parent_id IS NULL`
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result[0].Investment)
         if(amnt<result[0].Investment)
    {
        
        leftbinarytree(user,amnt,result[0].id)
    }
    else{
        rightbinarytree(user,amnt,result[0].id)
    }
    })
    
    

  
   
}
function rightbinarytree(user,amnt,parent_id)
{
    // console.log(parent_id)
    const query=`SELECT b1.id,b1.left_child,b1.right_child,b1.parent_id,b1.Investment FROM bstree b1 INNER JOIN bstree b2 ON b1.id=${parent_id}`
    connection.query(query,(err,result)=>{
        if(err) throw err;
       
        parent_id=result[0].id
       
        if(amnt < result[0].Investment)
        {
             if(result[0].left_child==null)
        {
            const sql=`INSERT INTO bstree (user_id,parent_id,Investment) VALUES ('${user}',${parent_id},${amnt})`
        connection.query(sql,function(err,result){
            if(err) throw err;
            connection.query(`UPDATE bstree SET left_child=${result.insertId} WHERE id=${parent_id}`,(err,result)=>{
                if(err) throw err;
                console.log(result)
            })
        })
        }
        else{
            console.log("first else")
            parent_id=result[0].left_child;
            console.log(parent_id)
            rightbinarytree(user,amnt,parent_id)
        }
      

        }
       
        else if(amnt>result[0].Investment){
            // console.log('second else')
            // console.log(result[0].id)
            parent_id=result[0].id
            console.log('right')
               if(result[0].right_child==null)
        {
            const sql=`INSERT INTO bstree (user_id,parent_id,Investment) VALUES ('${user}',${parent_id},${amnt})`
        connection.query(sql,function(err,result){
            if(err) throw err;
            connection.query(`UPDATE bstree SET right_child=${result.insertId} WHERE id=${parent_id}`,(err,result)=>{
                if(err) throw err;
                console.log(result)
            })
        })
        }
        else{
            parent_id=result[0].right_child;
            console.log(parent_id)
            rightbinarytree(user,amnt,parent_id)
        }
        }
        
       
    })
}

// insert('PS14',90091)


function search(root,value)
{
    
    const sql=`SELECT * FROM bstree WHERE id=${root}`
    connection.query(sql,(err,result)=>{
        if(err) throw err;
       if(result[0].Investment==value)
       {
        return true;
       }
       else if(value<result[0].Investment)
       {
        root=result[0].left_child;
        search(root,value)
       }
        else if(value>result[0].Investment)
       {
        root=result[0].right_child;
        search(root,value)
       }
    })
}


// insert('PS07','left',2)

search(1,90078)