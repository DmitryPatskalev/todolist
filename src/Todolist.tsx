import React from 'react';
import './App.css'


import {FilterType} from "./App";

type TodolistPropsType = {
	 title: string
	 tasks: Tasktype[]
	 removeTask: (id: number) => void
	 onClickHundler: (name: FilterType) => void
}
export type Tasktype = {
	 id: number
	 title: string
	 isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {

	 let taskJSX = props.tasks.map((elem, index) => {
			let buttonRemoveTask = () => props.removeTask(elem.id)
			return <li key={index}>
				 <input type='checkbox' checked={elem.isDone}/>
				 <span className='titleTasks'>{elem.title}</span>
				 <button className='buttonRemove' onClick={buttonRemoveTask} title='Remove task'></button>
			</li>
	 })


	 return (
		 <div>
				<h3 className='title'>{props.title}</h3>
				<div>
					 <input/>
					 <button className='addTask' title='Add Task'>add</button>
				</div>
				<ul>
					 {taskJSX}
				</ul>
				<div>
					 <button className='buttonSortAll' onClick={() => props.onClickHundler('All')} title='Show All Tasks'>All
					 </button>
					 <button className='buttonSortActive' onClick={() => props.onClickHundler('Active')}
									 title='Show Active Tasks'>Active
					 </button>
					 <button className='buttonSortCompleted' onClick={() => props.onClickHundler('Completed')}
									 title='Show Completed Tasks'>Completed
					 </button>
				</div>
		 </div>
	 );
};

export default Todolist;