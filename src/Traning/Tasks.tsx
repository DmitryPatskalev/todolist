import React, {useState} from "react";
import './../App.css'
import {Todo, TasksListType} from "./Todo";
import {v1} from 'uuid'

export type FilterType = 'All' | 'Completed' | 'Active'


const Tasks = () => {

	 let tasksList: Array<TasksListType> = [
			{id: v1(), tech: 'HTML/CSS', isDone: true},
			{id: v1(), tech: 'JS', isDone: true},
			{id: v1(), tech: 'REACT', isDone: false},
			{id: v1(), tech: 'Python', isDone: true},
			{id: v1(), tech: 'C#/C++', isDone: false},
	 ]

	 const [task, setTask] = useState(tasksList)
	 const [filter, setFilter] = useState('All')

	 let filterTasks = task
	 if (filter === 'Active') {
			filterTasks = task.filter(elem => elem.isDone)
	 }
	 if (filter === 'Completed') {
			filterTasks = task.filter(elem => !elem.isDone)
	 }

	 let buttonRemoveTask = (id: string) => {
			let removeTask = task.filter(elem => elem.id !== id)
			setTask(removeTask)
	 }
	 let onClickHundler = (name: string) => {
			setFilter(name)
	 }

	 let addTask = (name: string) => {
			let newTask = {
				 id: v1(),
				 tech: name,
				 isDone: true
			};
			let newTasks = ([newTask, ...task])
			setTask(newTasks)
	 }

	 return <div className='App'>
			<Todo task={filterTasks}
						title='What I Learn'
						buttonRemoveTask={buttonRemoveTask}
						onClickHundler={onClickHundler}
						addTask={addTask}


			/>
	 </div>
}
export default Tasks


