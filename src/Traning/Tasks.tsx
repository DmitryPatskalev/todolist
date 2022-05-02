import React, {useState} from "react";
import './../App.css'
import {Todo} from "./Todo";


export type FilterType = 'All' | 'Checked' | 'Active'

const Tasks = () => {

	 let task1 = [
			{id: 1, tech: 'HTML/CSS', isDone: true},
			{id: 2, tech: 'JS', isDone: true},
			{id: 3, tech: 'REACT', isDone: false},
			{id: 4, tech: 'Python', isDone: true},
			{id: 5, tech: 'C#/C++', isDone: false},
	 ]

	 const [task, setTask] = useState(task1)
	 const [filter, setFilter] = useState('All')
	 const removeButton = (id: number) => {
			let resultRemove = task.filter(elem => elem.id !== id)
			setTask(resultRemove)
	 }

	 let filterTasks = task
	 if(filter === 'Checked'){
			filterTasks = task.filter(elem=>elem.isDone)
	 }
	 if(filter === 'Active'){
			filterTasks = task.filter(elem=>!elem.isDone)
	 }

	 const onClickHundler = (name:string)=>{
			setFilter(name)
	 }


	 return <div className='App'>
			<Todo
				title='What I Learn'
				tasks={filterTasks}
				removeButton={removeButton}
				onClickHundler={onClickHundler}
			/>

	 </div>
}
export default Tasks


// let task2 = [
// 	{id: 1, tech: 'Java', isDone: true},
// 	{id: 2, tech: 'Skala', isDone: false},
// 	{id: 3, tech: '.Net', isDone: true},
//
// ]
// let task3 = [
// 	{id: 1, tech: 'РНР', isDone: true},
// 	{id: 2, tech: 'Fortran', isDone: false},
// 	{id: 3, tech: 'Go', isDone: false}
// ]
