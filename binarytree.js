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

// const sql=`CREATE TABLE btree (id INT AUTO_INCREMENT PRIMARY KEY ,
//     user_id VARCHAR(255),parent_id INT DEFAULT NULL,
//     left_child INT DEFAULT NULL,right_child INT DEFAULT NULL,FOREIGN KEY (parent_id) REFERENCES binaryTree(id))`
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table created")

// })


// const sql="DROP TABLE btree"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("table deleted")
// })

//INSERT Root Node Manually
// const sql="INSERT INTO btree (user_id,parent_id,left_child,right_child) VALUES ('PS05',null,null,null)"
// connection.query(sql,function(err,result)
// {
//     if(err) throw err;
//     console.log("Root Node Inserted")
// })

function findleafnode(user,pos,id)
{
    const sql=`SELECT * FROM btree WHERE id=${id}`
    connection.query(sql,function(err,result)
    {
        if(err) throw err;
        // console.log(result[0].left_child)
        console.log(result)
        if(pos=='left')
        {
           if(result[0].left_child===null)
        {
            insertdata(user,'left_child',id)
        }
        else{
            // console.log(result[0].left_child)
            let parent_id=result[0].left_child;
            findleafnode(user,pos,parent_id)
        }
        }
        else if(pos=='right')
        {
            console.log(result)
             if(result[0].right_child===null)
        {
            insertdata(user,'right_child',id)
        }
        else{
            // console.log(result[0].left_child)
            let parent_id=result[0].right_child;
            findleafnode(user,pos,parent_id)
        }
        }
       
    })
}

function insertdata(user,pos,id)
{
    const sql=`INSERT INTO btree (user_id,parent_id) VALUES ('${user}',${id})`
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        connection.query(`UPDATE  btree SET ${pos}=${result.insertId} WHERE id=${id}`,(err,result)=>{
            if(err) throw err;
            console.log(result)
        })
        // console.log(result.insertId)
    })
}

function insert(user,pos,parent_id)
{
    

    if(parent_id==undefined)
    {
        
         const sql="SELECT id from btree WHERE parent_id IS null"
    connection.query(sql,(err,result)=>{
        if(err) throw err;
         if(result.length>0)
    {
      findleafnode(user,pos,result[0].id)
    }
    })
    }
    else{
        // console.log('else block')
        findleafnode(user,pos,parent_id)
    }
  
   
}



insert('PS07','left',2)




