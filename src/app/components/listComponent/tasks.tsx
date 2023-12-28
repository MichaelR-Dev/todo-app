"use client"

import React from 'react'
import { taskEntry } from './list'

type taskArray = {
    taskList?: taskEntry[]
}

export default function Tasks({ taskList }: taskArray ) {

  return (
    <div>
        {taskList ? taskList.map((task, index) => {
            return <Task task={ task } key={ index }/>
        }) : null}
    </div>
  )
}

type taskProps = {
    task: taskEntry
}

function Task({ task }: taskProps) {

  const OnHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
  }

  return (
    <button onClick={OnHandleClick} className='flex justify-start flex-col flex-nowrap text-left bg-white mt-2 px-5 py-2 border-2 rounded-md transition-all transform hover:bg-slate-200'>
        <h3>{task.taskName}</h3>
        <p className=' text-xs'>{task.taskDescription}</p>
    </button>
  )
}