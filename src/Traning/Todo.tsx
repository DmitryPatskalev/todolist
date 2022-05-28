import React, {ChangeEvent} from "react";
import {FilterTasksType, TasksType} from "./Tasks";
import {AddTasks} from "./AddTasks";
import {ButtonsFilterTasks} from "./ButtonsFilterTasks";
import css from './style.module.css'


type TodoListPropsType = {
	 tasks: TasksType[]
	 title: string
	 buttonRemoveTasks: (id: string) => void
	 onChangeFilter: (title: FilterTasksType) => void
	 addTask: (title: string) => void
	 filter: FilterTasksType
	 changeTaskStatus: (taskID: string, isDone: boolean) => void

}

export const TodoList = (props: TodoListPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTasks(elem.id)
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(elem.id, event.currentTarget.checked)
			}
			return <ul key={index}>
				 <li className={elem.isDone ? css.isDone : ''}>
						<input type='checkbox' onChange={changeChecked} checked={elem.isDone}/>
						{elem.title}
						<button onClick={removeTask} className={css.removeTask}>x</button>
				 </li>
			</ul>
	 })

	 return <div>
			<h3 className={css.title}>{props.title}</h3>
			<AddTasks addTasks={props.addTask}/>
			{listOfTasks}
			<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter}/>
	 </div>

}


