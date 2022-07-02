import React, {ChangeEvent} from 'react';
import {FilterTaskType, TasksType} from "./TodoListTraning";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddItemForm from "./AddItemForm";
import css from './style.module.css'
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoType = {
	 todoListID: string
	 task: TasksType[]
	 title: string
	 removeTask: (todoListID: string, id: string) => void
	 onChangeFilter: (todoListID: string, filter: FilterTaskType) => void
	 addTask: (todoListID: string, title: string) => void
	 filter: FilterTaskType
	 changeTaskStatus: (todoListID: string, taskID: string, isDone: boolean) => void
	 removeTodoList: (todoListID: string) => void
	 changeTaskTitle: (todoListID: string, taskID: string, newTitle: string) => void
	 changeTodoListTitle: (todoListID: string, newTitle: string) => void
}

const Todo = (props: TodoType) => {
	 console.log('TodoList is called')
	 const tasksList = props.task.map((elem, key) => {
			const removeTask = () => props.removeTask(props.todoListID, elem.id)
			const changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(props.todoListID, elem.id, event.currentTarget.checked)
			}
			const onChangeTaskTitle = (newTitle: string) => {
				 props.changeTaskTitle(props.todoListID, elem.id, newTitle)
			}

			return <div key={key} className={elem.isDone ? css.isDone : ''}>
				 <div className={css.title}>
						<Checkbox color='primary' onChange={changeChecked} checked={elem.isDone}/>
						<EditableSpan title={elem.title} onChange={onChangeTaskTitle}/>
						<span>
							 <IconButton onClick={removeTask}><Delete/></IconButton>
						</span>
				 </div>
			</div>
	 })
	 const removeTodoList = () => props.removeTodoList(props.todoListID)

	 const addTask = (newTitle: string) => {
			props.addTask(props.todoListID, newTitle)
	 }

	 const onChangeTodoListTitle = (newTitle: string) => {
			props.changeTodoListTitle(props.todoListID, newTitle)
	 }
	 return (
		 <div>
				<h3 className={css.todoListTitle}>
					 <EditableSpan title={props.title} onChange={onChangeTodoListTitle}/>
					 <IconButton onClick={removeTodoList}><Delete/></IconButton>
				</h3>
				<AddItemForm addTask={addTask}/>
				{tasksList}
				<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter} todoListID={props.todoListID}/>
		 </div>
	 );
};

export default Todo;