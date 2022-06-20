import React, {useState} from "react";
import Todolist from "./Todolist";
import {v1} from "uuid";
import css from './Style.module.css'
import AddItemForm from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

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

const Tasks = () => {

	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'},
	 ])

	 const [tasks, setTasks] = useState<TaskStateType>({
			[todoListId1]: [
				 {id: v1(), title: 'HTML&CSS', isDone: true},
				 {id: v1(), title: 'JS/TS', isDone: true},
				 {id: v1(), title: 'React', isDone: false},
				 {id: v1(), title: 'C#/C++', isDone: false},
				 {id: v1(), title: 'Python', isDone: true},
			],
			[todoListId2]: [
				 {id: v1(), title: 'React Book', isDone: true},
				 {id: v1(), title: 'Python Algoritms', isDone: true},
				 {id: v1(), title: 'JS Advance', isDone: false},
			]
	 })

	 const removeTask = (todoListId: string, id: string) => {
			setTasks({...tasks, [todoListId]: tasks[todoListId].filter(elem => elem.id !== id)})
			// let todoListTasks = tasks[todoListId]
			// tasks[todoListId] = todoListTasks.filter(elem => elem.id !== id)
			// setTasks({...tasks})
	 }

	 const addTask = (todoListId: string, title: string) => {
			let newTasks = {
				 id: v1(),
				 title,
				 isDone: false
			}
			setTasks({...tasks, [todoListId]: [newTasks, ...tasks[todoListId]]})
			// let todoListTasks = tasks[todoListId]
			// tasks[todoListId] = [newTasks, ...todoListTasks]
			// setTasks({...tasks})
	 }

	 const changeFilter = (todoListId: string, value: FilterType) => {
			setTodoLists(todoLists.map(elem => elem.id === todoListId ? {...elem, filter: value} : elem))
			// let filterButton = todoLists.find(tl => tl.id === todoListId)
			// if (filterButton) {
			// 	 filterButton.filter = value
			// 	 setTodoLists([...todoLists])
			// }
	 }

	 const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
			setTasks({
				 ...tasks,
				 [todoListId]: tasks[todoListId].map(elem => elem.id === taskId ? {...elem, isDone} : elem)
			})

			// let todoListTasks = tasks[todoListId]
			// let changeChecked = todoListTasks.find(t => t.id === taskId)
			// if (changeChecked) {
			// 	 changeChecked.isDone = isDone
			// }
			// setTasks({...tasks})
	 }

	 const removeTodolist = (todoListId: string) => {
			setTodoLists(todoLists.filter(elem => elem.id !== todoListId))
			delete tasks[todoListId]
			setTasks({...tasks})
	 }

	 const addTodolist = (title: string) => {
			let todoList: TodoListsType = {
				 id: v1(),
				 title,
				 filter: 'All'
			}
			setTodoLists([todoList, ...todoLists])
			setTasks({
				 ...tasks,
				 [todoList.id]: []
			})
	 }
	 const changeTaskTitle = (todoListId: string, id: string, newTitle: string) => {
			setTasks({
				 ...tasks,
				 [todoListId]: tasks[todoListId].map(elem => elem.id === id ? {...elem, title: newTitle} : elem)
			})
			// let todoListTasks = tasks[todoListId]
			// let task = todoListTasks.find(elem => elem.id === id)
			// if (task) {
			// 	 task.title = newTitle
			// 	 setTasks({...tasks})
			// }
	 }
	 const changeTodoListTitle = (todoListId: string, newTitle: string) => {
			setTodoLists(todoLists.map(elem => elem.id === todoListId ? {...elem, title: newTitle} : elem))
			// let todoList = todoLists.find(elem => elem.id === todoListId)
			// if (todoList) {
			// 	 todoList.title = newTitle
			// 	 setTodoLists([...todoLists])
			// }
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
					 <Grid container spacing={3}>
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

export default Tasks;