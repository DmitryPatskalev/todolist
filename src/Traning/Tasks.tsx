import React, {useState} from "react";
import {v1} from "uuid";
import Todo from "./Todo";


export type TasksType = {
	 id: string
	 tech: string
	 isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

let tasksList: Array<TasksType> = [
	 {id: v1(), tech: 'HTML/CSS', isDone: true},
	 {id: v1(), tech: 'JS', isDone: true},
	 {id: v1(), tech: 'REACT', isDone: false},
	 {id: v1(), tech: 'Python', isDone: true},
	 {id: v1(), tech: 'C#/C++', isDone: false}
]

const Tasks = () => {
	 const [task, setTask] = useState(tasksList)
	 const [filter, setFilter] = useState<FilterType>('All')

	 let filterTasks = task
	 if (filter === 'Active') {
			filterTasks = task.filter(elem => !elem.isDone)
	 }
	 if (filter === 'Completed') {
			filterTasks = task.filter(elem => elem.isDone)
	 }

	 let buttonFilterTask = (name: FilterType) => {
			setFilter(name)
	 }

	 let buttonRemoveTask = (id: string) => {
			let removeElem = task.filter(elem => elem.id !== id)
			setTask(removeElem)
	 }

	 let addTasks = (title: string) => {
			let addTask = {
				 id: v1(),
				 tech: title,
				 isDone: true
			}
			setTask([addTask, ...task])
	 }

	 let changeStatus = (taskId: string, isDone: boolean) => {
			let changeChecked = task.find(elem => elem.id === taskId)
			if (changeChecked) {
				 changeChecked.isDone = isDone
			}
			setTask([...task])
	 }


	 return <div className='App'>
			<Todo
				title='What I Learn'
				tasks={filterTasks}
				buttonRemoveTask={buttonRemoveTask}
				buttonFilterTask={buttonFilterTask}
				addTasks={addTasks}
				changeStatus={changeStatus}
				filter={filter}
			/>

	 </div>
}

export default Tasks

