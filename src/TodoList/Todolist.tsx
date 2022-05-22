import React, {ChangeEvent} from 'react';
import css from './Style.module.css'
import {FilterType, Tasktype} from './Tasks'
import AddTasks from "./AddTasks";
import ButtonFilterTasks from "./ButtonFilterTasks";

type TodolistPropsType = {
	 id: string
	 title: string
	 tasks: Tasktype[]
	 removeTask: (id: string, todoListId: string) => void
	 changeFilter: (value: FilterType, todoListId: string) => void
	 addTask: (title: string, todoListId: string) => void
	 changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
	 filter: FilterType
	 removeTodolist: (todoListId: string) => void

}

const Todolist = (props: TodolistPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let buttonRemoveTask = () => props.removeTask(elem.id, props.id)
			let onChangeStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked, props.id)
			}
			let isDoneOpacity = elem.isDone ? css.isDone : '';

			return <li key={index} className={isDoneOpacity}>
				 <input type='checkbox' onChange={onChangeStatusTask}
								checked={elem.isDone}/>
				 <span className={css.titleTasks}>{elem.title}</span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'>x</button>
			</li>

	 })
	 let buttonRemoveTodoList = () => props.removeTodolist(props.id)

	 return (
		 <div>
				<h3 className={css.title}>{props.title}
					 <button className={css.butRemTL} onClick={buttonRemoveTodoList}>x</button>
				</h3>
				<div>
					 <AddTasks addTask={props.addTask} id={props.id}/>
				</div>
				<ul>
					 {listOfTasks}
				</ul>
				<div>
					 <ButtonFilterTasks changeFilter={props.changeFilter} filter={props.filter} id={props.id}/>
				</div>
		 </div>
	 );
};

export default Todolist;