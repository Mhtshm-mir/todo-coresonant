import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";

export default function AddTodo({tasks,setTasks}) {
    const [addTodo,setAddTodo]= useState({})
    const [title,setTitle] = useState("")
const handleAddTodo=()=>{

    if(title.length>0){
        let lastId;
tasks.map((el)=>{
    lastId=el.id
})
const newTasks = tasks.slice()
newTasks.push({id:lastId+1,title:title,completed:false,userId:lastId+1})
setTasks(newTasks)
setTitle("")

    }else{
        alert("cant add empty task")
    }
    

}



  return (
    <div className='flex '>
    <input value={title} placeholder='Create a new todo...' className='p-[15px] rounded-md w-[900px] ' onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={handleAddTodo} className='bg-slate-50'><IoMdAdd className='inline'  /></button>
    </div>
    
  )
}
