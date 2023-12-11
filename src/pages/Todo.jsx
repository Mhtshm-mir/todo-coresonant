import React, { useEffect, useState } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import axios from "axios"
function Todo() {
    const [tasks, setTasks] = useState([]);
    const [filterTask,setFilterTask] = useState("all")
    const [filterTaskArr,setFilterTaskArr]= useState([])
      useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
            .then(res=>setTasks(res.data)
            )
            .catch(err=>console.log(err))

      },[])
      useEffect(()=>{
        if(filterTask=="all"){
                const filteredTasks= tasks.slice()
            setFilterTaskArr(filteredTasks)          
        }else{
            const filteredTasks= tasks.filter((el)=>{
                return el.completed
            })
            setFilterTaskArr(filteredTasks)
        }
      },[filterTask,tasks])
  return (
    <>
    <img className='absolute z-[-1] w-[100%] h-[100vw]'    src="https://images.unsplash.com/photo-1519984930929-ebf9b55a5986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    <section className=' flex flex-col items-center w-[80%] justify-center m-auto '>
    <AddTodo tasks={tasks} setTasks={setTasks}/>
    <section className='flex gap-3 p-1 items-center justify-center'>
    <label className='text-lg font-mono text-black'>Show Tasks</label>

    <select className='text-xl font-serif' onChange={(e)=>setFilterTask(e.target.value)}> 
        
        <option value='all'>All tasks</option>
        <option value='completed'>Completed tasks</option>
    </select>
    </section>
    
   <table style={{  borderCollapse: 'collapse', marginTop: '2px' ,display:'table-header-group'}} >
    <thead >
        <tr>
        <th className='bg-[#f2f2f2] p-[10px] text-red-900 text-lg font-serif '>Task Name</th>
        <th className='bg-[#f2f2f2] p-[10px] text-red-900 text-lg font-serif'>Status</th>
        <th className='bg-[#f2f2f2] p-[10px] text-red-900 text-lg font-serif'>Edit </th>
        <th className='bg-[#f2f2f2] p-[10px] text-red-900 text-lg font-serif'> Delete </th>
        </tr>
    </thead>
    <tbody>
        {
            filterTaskArr && filterTaskArr.map((task,index)=>(
                <TodoList key={task.id} id={task.id} completed={task.completed} title={task.title} setTasks={setTasks} tasks={tasks} />
            ))

        }
        

    </tbody>

   </table>
    
      </section>
    </>
  )
}

export default Todo
