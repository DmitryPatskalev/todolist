import React from 'react';
import css from './Style.module.css'

import {FilterType} from './Tasks'

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
				 <span className={css.titleTasks}>{elem.title}</span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'></button>
			</li>
	 })

	 return (
		 <div>
				<h3 className={css.title}>{props.title}</h3>
				<div>
					 <input/>
					 <button className={css.addTask} title='Add Task'>add</button>
				</div>
				<ul>
					 {taskJSX}
				</ul>
				<div>
					 <button className={css.buttonSortAll} onClick={() => props.onClickHundler('All')} title='Show All Tasks'>All
					 </button>
					 <button className={css.buttonSortActive} onClick={() => props.onClickHundler('Active')}
									 title='Show Active Tasks'>Active
					 </button>
					 <button className={css.buttonSortCompleted} onClick={() => props.onClickHundler('Completed')}
									 title='Show Completed Tasks'>Completed
					 </button>
				</div>
		 </div>
	 );
};

export default Todolist;