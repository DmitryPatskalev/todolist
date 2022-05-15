import React, {ChangeEvent} from "react";
import {FilterType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddTasks from "./AddTasks";
import css from './style.module.css'


type TodoType = {
	 title: string
	 tasks: TasksType[]
	 buttonRemoveTask: (id: string) => void
	 buttonFilterTask: (name: FilterType) => void
	 addTasks: (title: string) => void
	 changeStatus: (taskId: string, isDone: boolean) => void
}

export const Todo = (props: TodoType) => {
	 let result = props.tasks.map((elem, index) => {
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked)
			}
			let removeElem = () => props.buttonRemoveTask(elem.id)
			return <p className={elem.isDone ? css.isDone : ''} key={index}>
				 <input type='checkbox' onChange={changeChecked}
								checked={elem.isDone}/>
				 <span className={css.tasks}>{elem.tech}</span>
				 <button className={css.removeTask} onClick={removeElem} title='Remove task'></button>
			</p>
	 })

	 return <div>
			<h3 className={css.title}>{props.title}</h3>
			<AddTasks addTasks={props.addTasks}/>
			<div>
				 {result}
			</div>
			<ButtonsFilterTasks buttonFilterTask={props.buttonFilterTask}/>

	 </div>

}
export default Todo

