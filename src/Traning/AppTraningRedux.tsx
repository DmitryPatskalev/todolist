import React, {useCallback} from 'react';
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
	 console.log('App is called')
	 const dispatch = useDispatch()
	 const todoLists = useSelector<AppRootTraningState, Array<TodoListType>>(state => state.todoLists)
	 const task = useSelector<AppRootTraningState, GeneralTodolist>(state => state.tasks)

	 const removeTask = useCallback((todoListID: string, id: string) => {
			dispatch(removeTaskTraningAC(todoListID, id))
	 }, [dispatch])

	 const removeTodoList = useCallback((todoListID: string) => {
			dispatch(removeTodoListAC(todoListID))
	 }, [dispatch])

	 const onChangeFilter = useCallback((todoListID: string, filter: FilterTaskType) => {
			dispatch(changeTodoListFilterAC(todoListID, filter))
	 }, [dispatch])

	 const addTask = useCallback((todoListID: string, title: string) => {
			dispatch(addTaskTraningAC(todoListID, title))
	 }, [dispatch])

	 const addTodoList = useCallback((title: string) => {
			dispatch(addTodoListAC(title))
	 }, [])

	 const changeTaskStatus = useCallback((todoListID: string, taskID: string, isDone: boolean) => {
			dispatch(changeTaskStatusTraningAC(todoListID, taskID, isDone))
	 }, [dispatch])

	 const changeTaskTitle = useCallback((todoListID: string, taskID: string, newTitle: string) => {
			dispatch(changeTaskTitleTraningAC(todoListID, taskID, newTitle))
	 }, [dispatch])
	 const changeTodoListTitle = useCallback((todoListID: string, newTitle: string) => {
			dispatch(changeTodoListAC(todoListID, newTitle))
	 }, [dispatch])

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