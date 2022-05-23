import React, {ChangeEvent} from "react";
import {FilterType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddTasks from "./AddTasks";
import css from './style.module.css'


type TodoListType = {
	 todolistID: string
	 title: string
	 tasks: TasksType[]
	 buttonRemoveTask: (todoListId: string, id: string) => void
	 buttonFilterTask: (todoListId: string, value: FilterType) => void
	 addTasks: (todoListId: string, title: string) => void
	 changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
	 filter: FilterType
	 removeTodoList: (todoListId: string) => void
}

export const TodoList = (props: TodoListType) => {
	 let result = props.tasks.map((elem, index) => {
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(props.todolistID, elem.id, event.currentTarget.checked)
			}
			let removeElem = () => props.buttonRemoveTask(props.todolistID, elem.id)
			return <p className={elem.isDone ? css.isDone : ''} key={index}>
				 <input type='checkbox' onChange={changeChecked}
								checked={elem.isDone}/>
				 <span className={css.tasks}>{elem.title}</span>
				 <button className={css.removeTask} onClick={removeElem} title='Remove task'>x</button>
			</p>
	 })
	 const removeTodoList = () => {
			props.removeTodoList(props.todolistID)
	 }

	 return <div>
			<h3 className={css.title}>{props.title}
				 <button className={css.butRemTL} onClick={removeTodoList}>x</button>
			</h3>

			<AddTasks addTasks={props.addTasks}
								todolistID={props.todolistID}/>
			<div>
				 {result}
			</div>
			<ButtonsFilterTasks buttonFilterTask={props.buttonFilterTask}
													filter={props.filter}
													todolistID={props.todolistID}/>

	 </div>

}
export default TodoList

