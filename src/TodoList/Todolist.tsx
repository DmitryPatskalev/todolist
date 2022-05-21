import React, {ChangeEvent} from 'react';
import css from './Style.module.css'
import {FilterType, Tasktype} from './Tasks'
import AddTasks from "./AddTasks";
import ButtonFilterTasks from "./ButtonFilterTasks";

type TodolistPropsType = {
	 title: string
	 tasks: Tasktype[]
	 removeTask: (id: string) => void
	 changeFilter: (value: FilterType) => void
	 addTask: (title: string) => void
	 changeStatus: (taskId: string, isDone: boolean) => void
	 filter: FilterType

}

const Todolist = (props: TodolistPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let buttonRemoveTask = () => props.removeTask(elem.id)
			let onChangeStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked)
			}
			let isDoneOpacity = elem.isDone ? css.isDone : '';

			return <li key={index} className={isDoneOpacity}>
				 <input type='checkbox' onChange={onChangeStatusTask}
								checked={elem.isDone}/>
				 <span className={css.titleTasks}>{elem.title}</span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'>x</button>
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
					 <ButtonFilterTasks changeFilter={props.changeFilter} filter={props.filter}/>
				</div>
		 </div>
	 );
};

export default Todolist;