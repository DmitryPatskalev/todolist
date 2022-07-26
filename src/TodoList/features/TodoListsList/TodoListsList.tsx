import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../reducers/store";
import {
	 addTodoListTC,
	 changeTodoListFilterAC,
	 changeTodoListTitleTC,
	 fetchTodoListTC,
	 FilterType,
	 removeTodoListTC,
	 TodolistDomainType
} from "../../reducers/todoList-reducer";
import {addTaskTC, removeTaskTC, updateTaskTC} from "../../reducers/task-reducer";
import {TaskStatuses} from "../../api/TodolistsAPI";
import {Grid, Paper} from "@material-ui/core";
import AddItemForm from "../../components/AddItemForm";
import Todolist from "./TodoList/Todolist";
import css from "../../components/Style.module.css";
import {TaskStateType} from "../../components/AppTodoList";

export const TodoListsList: React.FC = (props) => {
	 const dispatch = useDispatch()
	 const todoLists = useSelector<AppRootState, Array<TodolistDomainType>>(state => state.todoLists)
	 const tasks = useSelector<AppRootState, TaskStateType>(state => state.tasks)

	 useEffect(() => {

			// @ts-ignore
			dispatch(fetchTodoListTC())
	 }, [])


	 const removeTask = useCallback((todoListId: string, taskID: string) => {
			// @ts-ignore
			dispatch(removeTaskTC(todoListId, taskID));
	 }, [dispatch])

	 const addTask = useCallback((todoListId: string, title: string) => {
			// @ts-ignore
			dispatch(addTaskTC(todoListId, title));
	 }, [dispatch])

	 const changeFilter = useCallback((todoListId: string, value: FilterType) => {
			dispatch(changeTodoListFilterAC(todoListId, value))
	 }, [dispatch])

	 const changeStatus = useCallback((todoListId: string, taskId: string, status: TaskStatuses) => {
			// @ts-ignore
			dispatch(updateTaskTC(todoListId, taskId, {status}))
	 }, [dispatch])

	 const removeTodolist = useCallback((todoListId: string) => {
			// @ts-ignore
			dispatch(removeTodoListTC(todoListId))
	 }, [dispatch])

	 const addTodolist = useCallback((title: string) => {
			// @ts-ignore
			dispatch(addTodoListTC(title))
	 }, [dispatch])

	 const changeTaskTitle = useCallback((todoListId: string, id: string, newTitle: string) => {
			// @ts-ignore
			dispatch(updateTaskTC(todoListId, id, {title: newTitle}))
	 }, [dispatch])

	 const changeTodoListTitle = useCallback((todoListId: string, newTitle: string) => {
			// @ts-ignore
			dispatch(changeTodoListTitleTC(todoListId, newTitle))
	 }, [dispatch])
	 return <>
			<Grid container style={{padding: '10px'}}>
				 <AddItemForm addItem={addTodolist}/>
			</Grid>
			<Grid container spacing={2}>
				 {todoLists.length ? todoLists.map(tl => {
						let filterTask = tasks[tl.id]
						return <Grid item>
							 <Paper key={tl.id} elevation={3} style={{padding: '10px'}}>
									<Todolist
										todolistID={tl.id}
										title={tl.title}
										tasks={filterTask}
										removeTask={removeTask}
										changeFilter={changeFilter}
										filter={tl.filter}
										addTask={addTask}
										changeStatus={changeStatus}
										removeTodolist={removeTodolist}
										changeTaskTitle={changeTaskTitle}
										changeTodoListTitle={changeTodoListTitle}
									/>
							 </Paper>
						</Grid>
				 }) : <span className={css.empty}>Create your first todoList</span>}
			</Grid>
	 </>
}