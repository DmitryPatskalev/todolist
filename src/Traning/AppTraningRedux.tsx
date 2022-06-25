import React from 'react';
import Todo from "./Todo";
import AddItemForm from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import css from './style.module.css'
import {
	 addTodoListAC,
	 changeTodoListAC,
	 changeTodoListFilterAC,
	 removeTodoListAC
} from "./reducers/todoListTraning-reducer";
import {
	 addTaskTraningAC,
	 changeTaskStatusTraningAC,
	 changeTaskTitleTraningAC,
	 removeTaskTraningAC
} from "./reducers/taskTraning-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootTraningState} from "./reducers/store";

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}
export type FilterTaskType = 'All' | 'Active' | 'Completed';

export type TodoListType = {
	 id: string
	 title: string
	 filter: FilterTaskType
}

export type GeneralTodolist = {
	 [key: string]: Array<TasksType>
}

const AppTraningRedux = () => {

	 const dispatchTraning = useDispatch()
	 const todoLists = useSelector<AppRootTraningState, Array<TodoListType>>(state => state.todoLists)
	 const task = useSelector<AppRootTraningState, GeneralTodolist>(state => state.tasks)

	 const removeTask = (todoListID: string, id: string) => {
			dispatchTraning(removeTaskTraningAC(todoListID, id))
	 }

	 const removeTodoList = (todoListID: string) => {
			const action = removeTodoListAC(todoListID)
			dispatchTraning(action)
	 }

	 const onChangeFilter = (todoListID: string, filter: FilterTaskType) => {
			dispatchTraning(changeTodoListFilterAC(todoListID, filter))
	 }

	 const addTask = (todoListID: string, title: string) => {
			dispatchTraning(addTaskTraningAC(todoListID, title))
	 }

	 const addTodoList = (title: string) => {
			const action = addTodoListAC(title)
			dispatchTraning(action)
	 }

	 const changeTaskStatus = (todoListID: string, taskID: string, isDone: boolean) => {
			dispatchTraning(changeTaskStatusTraningAC(todoListID, taskID, isDone))
	 }

	 const changeTaskTitle = (todoListID: string, taskID: string, newTitle: string) => {
			dispatchTraning(changeTaskTitleTraningAC(todoListID, taskID, newTitle))
	 }
	 const changeTodoListTitle = (todoListID: string, newTitle: string) => {
			dispatchTraning(changeTodoListAC(todoListID, newTitle))
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
							<h3 className={css.mainTitle}>Create TodoList</h3>
							<AddItemForm addTask={addTodoList}/>
					 </Grid>
					 <Grid container spacing={3}>
							{todoLists.length ? todoLists.map(tl => {
								 let filterTask = task[tl.id]
								 if (tl.filter === 'Active') {
										filterTask = filterTask.filter(elem => !elem.isDone)
								 }
								 if (tl.filter === 'Completed') {
										filterTask = filterTask.filter(elem => elem.isDone)
								 }
								 return <Grid item>
										<Paper key={tl.id} elevation={3} style={{padding: '10px'}}>
											 <Todo
												 key={tl.id}
												 todoListID={tl.id}
												 task={filterTask}
												 title={tl.title}
												 removeTask={removeTask}
												 onChangeFilter={onChangeFilter}
												 addTask={addTask}
												 filter={tl.filter}
												 changeTaskStatus={changeTaskStatus}
												 removeTodoList={removeTodoList}
												 changeTaskTitle={changeTaskTitle}
												 changeTodoListTitle={changeTodoListTitle}
											 />
										</Paper>
								 </Grid>
							}) : <span className={css.emptyTitle}>Create New TodoList</span>}
					 </Grid>
				</Container>
		 </Grid>
	 );
};

export default AppTraningRedux;