import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete,MdDone } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

function TodoList({id,completed,title,setTasks,tasks}) {
    const [edit,openEdit] = useState(false)
    const [newTitle,setNewTitle] = useState("")

    const handleEdit=()=>{
        openEdit(!edit)
        if(newTitle.length>0){
            const newTasks =tasks.map((el,i)=>{
                if(i+1==id){
                    return {...el,title:newTitle}
                }else{
                    return el
                }
            })
            setTasks(newTasks);
        }
        
    }
    const handleComplete= ()=>{
        const newTasks= tasks.map((el,i)=>{
            if(i+1==id){
                return {...el,completed:!el.completed}

            }else{
                return el
            }
        })
        setTasks(newTasks);

    }
    const handleDelete=()=>{
        const newTasks = tasks.filter((el,i)=>{
            return id !=i+1
        })
        setTasks(newTasks);

    }
  return (
    <tr  className='shadow-2xl  '>
      {

        !edit ? (
            < >
                <td className='p-[20px] font-mono text-md '>{title}</td>

                <td className='p-[20px] flex items-center gap-1'>
                    <button onClick={handleComplete}>{completed==true ? <h1 className='text-green-700 font-mono text-md'>completed</h1> : <h1 className='text-red-500'>
                        incomplete
                    </h1>}</button>
                </td>
                <td className='p-[20px] '><button onClick={()=>openEdit(!edit)}><CiEdit/></button></td>
                <td>
                <button onClick={handleDelete} className='p-[20px]'> <MdDelete/></button>
                </td>
                          
            </>
        ) : (

            < >

            <td className='p-[20px]' colSpan="3">
            <input type="text" className='w-[310px] p-[5px] rounded-md' onChange={(e)=>setNewTitle(e.target.value)}  />
            </td>
            <td className='p-[20px]'>
            <button onClick={handleEdit}><MdDone/></button>
            </td>

            </>


        )
            
      }
    </tr>
  )
}

export default TodoList
