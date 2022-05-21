import React, {ChangeEvent} from "react";
import {FilterType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddTasks from "./AddTasks";
import css from './style.module.css'


type TodoListType = {
	 id: string
	 title: string
	 tasks: TasksType[]
	 buttonRemoveTask: (id: string, todoListId: string) => void
	 buttonFilterTask: (value: FilterType, todoListId: string) => void
	 addTasks: (title: string, todoListId: string) => void
	 changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
	 filter: FilterType
	 removeTodoList: (todoListId: string) => void
}

export const TodoList = (props: TodoListType) => {
	 let result = props.tasks.map((elem, index) => {
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked, props.id)
			}
			let removeElem = () => props.buttonRemoveTask(elem.id, props.id)
			return <p className={elem.isDone ? css.isDone : ''} key={index}>
				 <input type='checkbox' onChange={changeChecked}
								checked={elem.isDone}/>
				 <span className={css.tasks}>{elem.title}</span>
				 <button className={css.removeTask} onClick={removeElem} title='Remove task'>x</button>
			</p>
	 })
	 const removeTodoList = () => {
			props.removeTodoList(props.id)
	 }

	 return <div>
			<h3 className={css.title}>{props.title}
				 <button onClick={removeTodoList}>x</button>
			</h3>

			<AddTasks addTasks={props.addTasks} id={props.id}/>
			<div>
				 {result}
			</div>
			<ButtonsFilterTasks buttonFilterTask={props.buttonFilterTask} filter={props.filter} id={props.id}/>

	 </div>

}
export default TodoList

