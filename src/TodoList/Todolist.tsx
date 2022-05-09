import React from 'react';
import css from './Style.module.css'
import {FilterType} from './Tasks'
import AddTasks from "./AddTasks";
import ButtonFilterTasks from "./ButtonFilterTasks";

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
	 let listOfTasks = props.tasks.map((elem, index) => {
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
					 <AddTasks addTask={props.addTask}/>
				</div>
				<ul>
					 {listOfTasks}
				</ul>
				<div>
					 <ButtonFilterTasks onClickHundler={props.onClickHundler}/>
				</div>
		 </div>
	 );
};

export default Todolist;