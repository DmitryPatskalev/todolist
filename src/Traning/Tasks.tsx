import React, {useState} from "react";
import {v1} from "uuid";
import {TodoList} from "./Todo";
import css from './style.module.css'
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type FilterTasksType = 'All' | 'Active' | 'Completed'

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}

export type TodoListsType = {
	 id: string
	 title: string
	 filter: FilterTasksType
}

type TasksStateType = {
	 [key: string]: Array<TasksType>
}

const TodoListTraning = () => {

	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What You Learn', filter: 'All'}
	 ])

	 const [tasks, setTasks] = useState<TasksStateType>({
			[todoListID1]: [
				 {id: v1(), title: 'HTML&CSS', isDone: true},
				 {id: v1(), title: 'JS/TS', isDone: true},
				 {id: v1(), title: 'React', isDone: false},
				 {id: v1(), title: 'C#/C++', isDone: false},
				 {id: v1(), title: 'Python', isDone: true},
			],
			[todoListID2]: [
				 {id: v1(), title: 'Java', isDone: true},
				 {id: v1(), title: 'Scala', isDone: true},
				 {id: v1(), title: '.Net', isDone: false},
				 {id: v1(), title: 'Pascal', isDone: true},
			]
	 })

	 const buttonRemoveTasks = (todoListID: string, id: string) => {
			let todoListObj = tasks[todoListID]
			tasks[todoListID] = todoListObj.filter(elem => elem.id !== id)
			setTasks({...tasks})
	 }

	 const onChangeFilter = (todoListID: string, title: FilterTasksType) => {
			let todoListObj = todoLists.find(elem => elem.id === todoListID)
			if (todoListObj) {
				 todoListObj.filter = title
			}
			setTodoLists([...todoLists])
	 }

	 const addTask = (todoListID: string, title: string) => {
			let addTitle = {
				 id: v1(),
				 title,
				 isDone: false
			}
			let todoListObj = tasks[todoListID]
			tasks[todoListID] = [addTitle, ...todoListObj]
			setTasks({...tasks})
	 }

	 const changeTaskStatus = (todoListID: string, taskID: string, isDone: boolean) => {
			let todoListObj = tasks[todoListID]
			let changeChecked = todoListObj.find(elem => elem.id === taskID)
			if (changeChecked) {
				 changeChecked.isDone = isDone
				 setTasks({...tasks})
			}
	 }
	 const removeTodolist = (todoListID: string) => {
			let filterTodoList = todoLists.filter(elem => elem.id !== todoListID)
			setTodoLists(filterTodoList)
			delete tasks[todoListID]
			setTasks({...tasks})
	 }
	 const addTodoList = (title: string) => {
			let todoList: TodoListsType = {
				 id: v1(),
				 title: title,
				 filter: 'All'
			}
			setTodoLists([todoList, ...todoLists])
			setTasks({
				 ...tasks, [todoList.id]: []
			})
	 }
	 const changeTaskTitle = (todoListID: string, id: string, newTitle: string) => {
			let todoListObj = tasks[todoListID]
			let task = todoListObj.find(elem => elem.id === id)
			if (task) {
				 task.title = newTitle
				 setTasks({...tasks})
			}
	 }
	 const changeTodoListTitle = (todoListID: string, newTitle: string) => {
			let task = todoLists.find(elem => elem.id === todoListID)
			if (task) {
				 task.title = newTitle
				 setTodoLists([...todoLists])
			}
	 }

	 return <Grid className='App'>
			<AppBar position={'static'}>
				 <Toolbar>
						<IconButton edge='start' color='inherit' aria-label='menu'>
							 <Menu/>
						</IconButton>
						<Typography variant='h6'>
							 News
						</Typography>
						<Button color='inherit'>Login</Button>
				 </Toolbar>
			</AppBar>
			<Container fixed>
				 <Grid container style={{padding: '10px'}}>
						<AddItemForm addItem={addTodoList}/>
				 </Grid>
				 <Grid container spacing={3}>
						{todoLists.length ? todoLists.map(tl => {
							 let filterTask = tasks[tl.id]
							 if (tl.filter === 'Active') {
									filterTask = tasks[tl.id].filter(elem => !elem.isDone)
							 }
							 if (tl.filter === 'Completed') {
									filterTask = tasks[tl.id].filter(elem => elem.isDone)
							 }
							 return <Grid item>
									<Paper style={{padding: '10px'}}>
										 <TodoList
											 key={tl.id}
											 todoListID={tl.id}
											 tasks={filterTask}
											 title={tl.title}
											 buttonRemoveTasks={buttonRemoveTasks}
											 onChangeFilter={onChangeFilter}
											 addTask={addTask}
											 filter={tl.filter}
											 changeTaskStatus={changeTaskStatus}
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
}

export default TodoListTraning

