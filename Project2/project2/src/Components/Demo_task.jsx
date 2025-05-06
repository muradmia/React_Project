import React, { useState } from 'react'

const Demo_task = () => {
    const [tasks,setTasks] = useState([])
    const [newTask,setNewTask] = useState('')

    const add = () =>{

        if(newTask.trim()){
            setTasks([...tasks,{
                id:Date.now(),
                text:newTask,
                complete:false,
                createAt:new Date()
            }]),
            setNewTask('')
        }
    }

    const addTask = () => {
        if (newTask.trim()) {
          setTasks([...tasks, {
            id: Date.now(),
            text: newTask,
            completed: false,
            createdAt: new Date()
          }]);
          setNewTask('');
        }
      };

  return (
    <section className='bg-gray-100 w-full h-screen'>
        <div className='container mx-auto  pt-20 '>
            <div className='max-w-[500px]  mx-auto bg-white rounded-lg shadow py-6 px-10'>
                <h2 className='text-2xl font-bold '>Task Manager</h2>
                <div className='flex '>
                    <input type='text' value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Add a new task' className='border border-gray-700 py-3 px-12 mt-4 rounded-xl'/>
                    <button onClick={add} className='sm:mt-4 bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-2 cursor-pointer'>Add</button>
                </div>
                <div>
                    <button className='bg-blue-500 px-5 mt-6 text-white py-3 rounded-lg me-2 cursor-pointer hover:bg-blue-700 transition:color'>All</button>

                    <button className='bg-gray-200 px-5 mt-6 text-gray-800 py-3 rounded-lg me-2 cursor-pointer hover:bg-gray-300 transition:color'>Active</button>
                    <button className='bg-gray-200 px-5 mt-6 text-gray-800 py-3 rounded-lg me-2 cursor-pointer hover:bg-gray-300 transition:color'>Completed</button>
                </div>

                <p className='text-gray-600 mt-4'>0 task remaining</p>

                <div>
                    {
                        tasks.map((task,index)=>(
                            <div key={index} className=' bg-gray-200 py-1 mb-2 px-4 rounded-lg '>
                                <p className=''>{task.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>

        {/* Show todo */}
        
    </section>
  )
}

export default Demo_task