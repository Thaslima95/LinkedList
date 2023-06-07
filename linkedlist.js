const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app=express();

mongoose.connect(process.env.DATABASE);


const linkedlistSchema = new mongoose.Schema(
  {
   
  },
  {
    strict:false
  }
 
);

LinkedListCollection = mongoose.model("LinkedList", linkedlistSchema);





class LinkedList{
    constructor()
    {

    }
    //set metadata
    async metaData()
    {
        const result=await LinkedListCollection.updateOne({meta:true},{
            $set:{head:null,tail:null}
        },{upsert:true})
    }

    //clear data
    async clearData()
    {
        const result=await LinkedListCollection.deleteMany({value:{$exists:true}})
    }

    //checking the list having head or not
    async getHeadNode()
    {
        const result=await LinkedListCollection.findOne({meta:true})
        console.log(result)
        return result;
    }

    //get taild node id
    async getTail()
    {
        const result=await LinkedListCollection.findOne({meta:true})
        console.log(result)
        return result;
    }

//creating new node
    async newNode(value)
    {
     const resultnode=await new LinkedListCollection({value:value,next:null}).save()
     return resultnode;
    }

    //insert value
    async add(value)
    {
        const resultdata=await this.newNode(value)
        // console.log(resultdata)
        const id=resultdata._id;
        const meta=await this.getHeadNode()
    //     console.log(meta)
    //    console.log(meta.head+"meta head")
        if(meta.head==null)
        {
            
            const sethead=await LinkedListCollection.updateOne({meta:true},{
                $set:{head:id}
            })
                console.log(sethead)
        }
        else{
            const tail=await this.getTail()
            console.log(tail.tail)
            await LinkedListCollection.updateOne({ _id: tail.tail }, { $set: { next: id } });
        }
        const result = await LinkedListCollection.updateOne(
      { meta: true },
      { $set: { tail: id} })
    }

    async search(value)
    {
        const result=await LinkedListCollection.findOne({value:value})
        console.log(result)
    }
}




(async function () {
  try {
    const linkedList = new LinkedList();
   await linkedList.metaData()
   await linkedList.clearData()
    await linkedList.add(10);
    await linkedList.add(20)
await linkedList.add(30)
await linkedList.search(20)
  
  } catch (err) {
    console.log(err);
  }
})();//IIFE
app.listen(process.env.PORT,()=>{
    console.log("Backend Sever")
})

