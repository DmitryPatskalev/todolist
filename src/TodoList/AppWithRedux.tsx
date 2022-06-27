import React from "react";
import Todolist from "./Todolist";
import css from './Style.module.css'
import AddItemForm from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {addTodolistAC, changeTodolistAC, changeTodoListFilterAC, removeTodolistAC} from "./reducers/todoList-reducer";
import {addTasksAC, changeTaskStatus, changeTaskTitleAC, removeTasksAC} from "./reducers/task-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./reducers/store";

export type FilterType = 'All' | 'Active' | 'Completed'

export type Tasktype = {
	 id: string
	 title: string
	 isDone: boolean
}
export type TodoListsType = {
	 id: string
	 title: string
	 filter: FilterType
}

export type TaskStateType = {
	 [key: string]: Array<Tasktype>
}

const AppWithRedux = () => {

	 const dispatch = useDispatch()
	 const todoLists = useSelector<AppRootState, Array<TodoListsType>>(state => state.todoLists)
	 const tasks = useSelector<AppRootState, TaskStateType>(state => state.tasks)


	 const removeTask = (todoListId: string, id: string) => {
			dispatch(removeTasksAC(todoListId, id))
	 }

	 const addTask = (todoListId: string, title: string) => {
			dispatch(addTasksAC(todoListId, title))
	 }

	 const changeFilter = (todoListId: string, value: FilterType) => {
			dispatch(changeTodoListFilterAC(todoListId, value))
	 }

	 const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
			dispatch(changeTaskStatus(todoListId, taskId, isDone))
	 }

	 const removeTodolist = (todoListId: string) => {
			dispatch(removeTodolistAC(todoListId))
	 }

	 const addTodolist = (title: string) => {
			dispatch(addTodolistAC(title))
	 }

	 const changeTaskTitle = (todoListId: string, id: string, newTitle: string) => {
			dispatch(changeTaskTitleAC(todoListId, id, newTitle))
	 }

	 const changeTodoListTitle = (todoListId: string, newTitle: string) => {
			dispatch(changeTodolistAC(todoListId, newTitle))
	 }

	 return (
		 <Grid>
				<AppBar position='static'>
					 <Toolbar>
							<IconButton edge='start' color='inherit' aria-label='menu'>
								 <Menu/>
								 <Typography variant='h6'>
										TodoList
								 </Typography>
							</IconButton>
					 </Toolbar>
				</AppBar>
				<Container fixed>
					 <Grid container style={{padding: '10px'}}>
							<AddItemForm addItem={addTodolist}/>
					 </Grid>
					 <Grid container spacing={2}>
							{todoLists.length ? todoLists.map(tl => {
								 let filterTask = tasks[tl.id]
								 if (tl.filter === 'Completed') {
										filterTask = filterTask.filter(elem => elem.isDone)
								 }
								 if (tl.filter === 'Active') {
										filterTask = filterTask.filter(elem => !elem.isDone)
								 }
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
				</Container>
		 </Grid>
	 );
}

export default AppWithRedux;