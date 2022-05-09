import React, {useState} from "react";
import './../App.css'
import Todo from "./Todo";
import {v1} from "uuid";

export type TasksListType = {
	 id: string
	 tech: string
	 isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Checked'

let tasksList: Array<TasksListType> = [
	 {id: v1(), tech: 'HTML/CSS', isDone: true},
	 {id: v1(), tech: 'JS', isDone: true},
	 {id: v1(), tech: 'REACT', isDone: false},
	 {id: v1(), tech: 'Python', isDone: true},
	 {id: v1(), tech: 'C#/C++', isDone: false}
]

const Tasks = () => {
	 const [task, setTask] = useState(tasksList)
	 const [filter, setFilter] = useState('All')

	 let buttonRemoveTask = (id: string) => {
			let removeTask = task.filter(elem => elem.id !== id)
			setTask(removeTask)
	 }

	 let filterTask = task
	 if (filter === 'Active') {
			filterTask = task.filter(elem => elem.isDone)
	 }
	 if (filter === 'Checked') {
			filterTask = task.filter(elem => !elem.isDone)
	 }
	 let onClickHundler = (name: string) => {
			setFilter(name)
	 }
	 let addTasks = (title: string) => {
			let addElem = {
				 id: v1(),
				 tech: title,
				 isDone: true
			}
			setTask([addElem, ...task])
	 }

	 return <div className='App'>
			<Todo
				title='What I Learn'
				task={filterTask}
				buttonRemoveTask={buttonRemoveTask}
				onClickHundler={onClickHundler}
				addTask={addTasks}
			/>

	 </div>
}

export default Tasks

