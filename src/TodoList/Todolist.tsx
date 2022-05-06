import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import css from './Style.module.css'

import {FilterType} from './Tasks'

type TodolistPropsType = {
	 title: string
	 tasks: Tasktype[]
	 removeTask: (id: string) => void
	 onClickHundler: (name: FilterType) => void
	 addTask: (title: string) => void
	 nameButton: string
}
export type Tasktype = {
	 id: string
	 title: string
	 isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {
	 const [newTask, setNewTask] = useState('')
	 let taskJSX = props.tasks.map((elem, index) => {
			let buttonRemoveTask = () => props.removeTask(elem.id)
			return <li key={index}>
				 <input type='checkbox' checked={elem.isDone}/>
				 <span className={css.titleTasks}>{elem.title}</span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'></button>
			</li>
	 })

	 let showAll = () => {
			props.onClickHundler('All')
	 }
	 let showActive = () => {
			props.onClickHundler('Active')
	 }
	 let showCompleted = () => {
			props.onClickHundler('Completed')
	 }

	 let onAddButtonClick = () => {
			props.addTask(newTask)
			setNewTask('')
	 }
	 let onPressClick = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 props.addTask(event.currentTarget.value)
				 setNewTask('')
			}
	 }

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }
	 
	 return (
		 <div>
				<h3 className={css.title}>{props.title}</h3>
				<div>
					 <input
						 value={newTask}
						 onChange={onChangeHundler}
						 onKeyPress={onPressClick}
					 />
					 <button className={css.addTask}
									 title='Add Task'
									 onClick={onAddButtonClick}
					 >{props.nameButton}
					 </button>
				</div>
				<ul>
					 {taskJSX}
				</ul>
				<div>
					 <button className={css.buttonSortAll}
									 onClick={showAll} title='Show All Tasks'>All
					 </button>
					 <button className={css.buttonSortActive}
									 onClick={showActive} title='Show Active Tasks'>Active
					 </button>
					 <button className={css.buttonSortCompleted}
									 onClick={showCompleted} title='Show Completed Tasks'>Completed
					 </button>
				</div>
		 </div>
	 );
};

export default Todolist;