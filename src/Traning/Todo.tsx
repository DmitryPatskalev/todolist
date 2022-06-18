import React, {ChangeEvent} from 'react';
import {FilterTaskType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddItemForm from "./AddItemForm";
import css from './style.module.css'

type TodoType = {
	 todoListID: string
	 task: TasksType[]
	 title: string
	 removeTask: (todoListID: string, id: string) => void
	 onChangeFilter: (todoListID: string, filter: FilterTaskType) => void
	 addTask: (todoListID: string, title: string) => void
	 filter: FilterTaskType
	 changeTaskStatus: (todoListID: string, taskID: string, isDone: boolean) => void
}

const Todo = (props: TodoType) => {
	 const tasksList = props.task.map((elem, key) => {
			const removeTask = () => props.removeTask(props.todoListID, elem.id)
			const changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(props.todoListID, elem.id, event.currentTarget.checked)
			}
			return <ul key={key} className={elem.isDone ? css.isDone : ''}>
				 <li>
						<input type='checkbox' onChange={changeChecked} checked={elem.isDone}/>
						{elem.title}
						<span>
							 <button onClick={removeTask}>x</button>
						</span>
				 </li>
			</ul>
	 })

	 return (
		 <div>
				<h3>
					 {props.title}
					 <span><button>x</button></span>
				</h3>

				<AddItemForm addTask={props.addTask} todoListID={props.todoListID}/>
				{tasksList}
				<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter} todoListID={props.todoListID}/>
		 </div>
	 );
};

export default Todo;