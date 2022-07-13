import React, {useCallback} from 'react';
import css from './Style.module.css'
import AddItemForm from "./AddItemForm";
import ButtonFilterTasks from "./ButtonFilterTasks";
import {EditableSpan} from "./EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {FilterType, Tasktype} from "./AppWithRedux";
import {Task} from "./Task";

type TodolistPropsType = {
	 todolistID: string
	 title: string
	 tasks: Tasktype[]
	 removeTask: (todoListId: string, id: string) => void
	 changeFilter: (todoListId: string, value: FilterType) => void
	 addTask: (todoListId: string, title: string,) => void
	 changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
	 filter: FilterType
	 removeTodolist: (todoListId: string) => void
	 changeTaskTitle: (todoListId: string, id: string, newTitle: string) => void
	 changeTodoListTitle: (todoListId: string, newTitle: string) => void
}

const Todolist = React.memo((props: TodolistPropsType) => {
	 let filterTask = props.tasks
	 if (props.filter === 'Completed') {
			filterTask = props.tasks.filter(elem => elem.isDone)
	 }
	 if (props.filter === 'Active') {
			filterTask = props.tasks.filter(elem => !elem.isDone)
	 }
	 let listOfTasks = filterTask.map((elem, index) => <Task
			 removeTask={props.removeTask}
			 changeStatus={props.changeStatus}
			 changeTaskTitle={props.changeTaskTitle}
			 elem={elem}
			 todoListID={props.todolistID}
			 key={elem.id}
		 />
	 )
	 const buttonRemoveTodoList = () => props.removeTodolist(props.todolistID)

	 const addTask = useCallback((newTitle: string) => {
			props.addTask(props.todolistID, newTitle)
	 }, [props.addTask, props.todolistID])

	 const onChangeTodoList = useCallback((newTitle: string) => {
			props.changeTodoListTitle(props.todolistID, newTitle)
	 }, [props.changeTodoListTitle, props.todolistID])

	 return (
		 <div>
				<h2 className={css.title}>
					 <EditableSpan title={props.title} onChange={onChangeTodoList}/>
					 <IconButton onClick={buttonRemoveTodoList} title='Remove TodoList'><Delete/></IconButton>
				</h2>
				<div>
					 <AddItemForm addItem={addTask}/>
				</div>
				<div>
					 {listOfTasks}
				</div>
				<div>
					 <ButtonFilterTasks changeFilter={props.changeFilter} filter={props.filter} todolistID={props.todolistID}/>
				</div>
		 </div>
	 );
});

export default Todolist;

