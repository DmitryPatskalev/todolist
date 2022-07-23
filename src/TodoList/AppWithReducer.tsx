import React, {useReducer} from "react";
import Todolist from "./Todolist";
import {v1} from "uuid";
import css from './Style.module.css'
import AddItemForm from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
	 addTodolistAC,
	 changeTodolistAC,
	 changeTodoListFilterAC, FilterType,
	 removeTodolistAC,
	 todoListReducer
} from "./reducers/todoList-reducer";
import {addTasksAC, changeTaskStatus, changeTaskTitleAC, removeTasksAC, tasksReducer} from "./reducers/task-reducer";
import {TaskPriorities, TaskStatuses, TaskType} from "../stories/api/TodolistsAPI";


export type TaskStateType = {
	 [key: string]: Array<TaskType>
}

const AppWithReducer = () => {

	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const [todoLists, dispatchTodoListReducer] = useReducer(todoListReducer, [
			{id: todoListId1, title: 'What I learn', filter: 'All', addedData: '', order: 0},
			{id: todoListId2, title: 'What to buy', filter: 'All', addedData: '', order: 0},
	 ])

	 const [tasks, dispatchTaskReducer] = useReducer(tasksReducer, {
			[todoListId1]: [
				 {
						id: v1(), title: 'HTML&CSS', status: TaskStatuses.Completed,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'JS/TS',
						status: TaskStatuses.Completed,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'React', status: TaskStatuses.New,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'C#/C++', status: TaskStatuses.New,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'Python', status: TaskStatuses.Completed,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
			],
			[todoListId2]: [
				 {
						id: v1(), title: 'React Book', status: TaskStatuses.Completed,
						todoListId: todoListId2,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'Python Algoritms', status: TaskStatuses.Completed,
						todoListId: todoListId2,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'JS Advance', status: TaskStatuses.New,
						todoListId: todoListId2,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
			]
	 })

	 const removeTask = (todoListId: string, id: string) => {
			dispatchTaskReducer(removeTasksAC(todoListId, id))
	 }

	 const addTask = (todoListId: string, title: string) => {
			dispatchTaskReducer(addTasksAC(todoListId, title))
	 }

	 const changeFilter = (todoListId: string, value: FilterType) => {
			dispatchTodoListReducer(changeTodoListFilterAC(todoListId, value))
	 }

	 const changeStatus = (todoListId: string, taskId: string, status: TaskStatuses) => {
			dispatchTaskReducer(changeTaskStatus(todoListId, taskId, status))
	 }

	 const removeTodolist = (todoListId: string) => {
			const action = removeTodolistAC(todoListId)
			dispatchTodoListReducer(action)
			dispatchTaskReducer(action)
	 }

	 const addTodolist = (title: string) => {
			const action = addTodolistAC(title)
			dispatchTodoListReducer(action)
			dispatchTaskReducer(action)
	 }

	 const changeTaskTitle = (todoListId: string, id: string, newTitle: string) => {
			dispatchTaskReducer(changeTaskTitleAC(todoListId, id, newTitle))
	 }

	 const changeTodoListTitle = (todoListId: string, newTitle: string) => {
			dispatchTodoListReducer(changeTodolistAC(todoListId, newTitle))
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
										filterTask = filterTask.filter(elem => elem.status === TaskStatuses.Completed)
								 }
								 if (tl.filter === 'Active') {
										filterTask = filterTask.filter(elem => elem.status === TaskStatuses.New)
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

export default AppWithReducer;