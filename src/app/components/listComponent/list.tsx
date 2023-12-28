"use client"

import React from 'react'
import Tasks from './tasks'
import NewTask from './newtask'
import { useEffect, useState } from 'react'

//? Task Type Model
export type taskEntry = {
  taskName: string
  taskDue: Date
  taskDescription: string
  taskCreated: Date
  taskUID: Number
}

export default function List() {

  //Set initial state
  let taskList: taskEntry[] = []
  const [tasks, setTasks] = useState(taskList ? taskList : []);

  useEffect(() => {
    // Attach event listeners or perform other client-side actions
    // Here, we're just updating the state after a delay as an example
    const timeoutId = setTimeout(() => {
    setTasks([
      {taskName: "Lorem Ipsum 1", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 1},
      {taskName: "Lorem Ipsum 2", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 2}, 
      {taskName: "Lorem Ipsum 3", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 3},
      {taskName: "Lorem Ipsum 4", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 4},
      {taskName: "Lorem Ipsum 5", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 5},
      {taskName: "Lorem Ipsum 6", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 6},
      {taskName: "Lorem Ipsum 7", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 7},
      {taskName: "Lorem Ipsum 8", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 8},
      {taskName: "Lorem Ipsum 9", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 9},
      {taskName: "Lorem Ipsum 10", taskDue: new Date(), taskDescription: "Lorem Ipsum and all that jazz with a little bit of description", taskCreated: new Date(), taskUID: 10},
    ]);
    }, 2000);

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className=' flex-grow w-full max-w-96 h-5/6 pb-2 px-2 overflow-y-scroll border-y-4 border-yellow-900 box-border'>
        <Tasks taskList={tasks}/>
      </div>
      <NewTask/>
    </>
  )
}
