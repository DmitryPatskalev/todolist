import React, {useCallback, useEffect} from 'react';
import css from '../../../components/Style.module.css'
import AddItemForm from "../../../components/AddItemForm";
import ButtonFilterTasks from "../../../components/ButtonFilterTasks";
import {EditableSpan} from "../../../components/EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task/Task";
import {TaskStatuses, TaskType} from "../../../api/TodolistsAPI";
import {FilterType} from "../../../reducers/todoList-reducer";
import {useDispatch} from "react-redux";
import {fetchTaskTC} from "../../../reducers/task-reducer";

type TodolistPropsType = {
	 todolistID: string
	 title: string
	 tasks: TaskType[]
	 removeTask: (todoListId: string, id: string) => void
	 changeFilter: (todoListId: string, value: FilterType) => void
	 addTask: (todoListId: string, title: string,) => void
	 changeStatus: (todoListId: string, taskId: string, status: TaskStatuses) => void
	 filter: FilterType
	 removeTodolist: (todoListId: string) => void
	 changeTaskTitle: (todoListId: string, id: string, newTitle: string) => void
	 changeTodoListTitle: (todoListId: string, newTitle: string) => void
}

const Todolist = React.memo((props: TodolistPropsType) => {
	 
	 let filterTask = props.tasks
	 if (props.filter === 'Completed') {
			filterTask = props.tasks.filter(elem => elem.status === TaskStatuses.Completed)
	 }
	 if (props.filter === 'Active') {
			filterTask = props.tasks.filter(elem => elem.status === TaskStatuses.New)
	 }

	 const dispatch = useDispatch<any>()

	 useEffect(() => {
			dispatch(fetchTaskTC(props.todolistID))
	 }, [])


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

