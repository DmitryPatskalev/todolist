import React, {useReducer} from 'react';
import {v1} from "uuid";
import Todo from "./Todo";
import AddItemForm from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import css from './style.module.css'
import {
	 addTodoListAC,
	 changeTodoListAC,
	 changeTodoListFilterAC,
	 removeTodoListAC,
	 todoListTraningReducer
} from "./reducers/todoListTraning-reducer";
import {
	 addTaskTraningAC,
	 changeTaskStatusTraningAC, changeTaskTitleTraningAC,
	 removeTaskTraningAC,
	 taskTraningReducer
} from "./reducers/taskTraning-reducer";

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

const TodoListTraningWithReducer = () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const [todoLists, dispatchTodoListsReducer] = useReducer(todoListTraningReducer, [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ])

	 const [task, dispatchTasksReducer] = useReducer(taskTraningReducer, {
			[todoListID1]: [
				 {id: v1(), title: 'React', isDone: true},
				 {id: v1(), title: 'JS', isDone: true},
				 {id: v1(), title: 'Type Script', isDone: false},
				 {id: v1(), title: 'HTML/CSS', isDone: true},
				 {id: v1(), title: 'Python', isDone: false},
			],
			[todoListID2]: [
				 {id: v1(), title: 'Algoritms', isDone: true},
				 {id: v1(), title: 'JS Advance', isDone: true},
				 {id: v1(), title: 'Angular', isDone: false},
				 {id: v1(), title: 'Scala', isDone: true},
			]
	 })

	 const removeTask = (todoListID: string, id: string) => {
			dispatchTasksReducer(removeTaskTraningAC(todoListID, id))
	 }

	 const removeTodoList = (todoListID: string) => {
			const action = removeTodoListAC(todoListID)
			dispatchTasksReducer(action)
			dispatchTodoListsReducer(action)

	 }

	 const onChangeFilter = (todoListID: string, filter: FilterTaskType) => {
			dispatchTodoListsReducer(changeTodoListFilterAC(todoListID, filter))
	 }

	 const addTask = (todoListID: string, title: string) => {
			dispatchTasksReducer(addTaskTraningAC(todoListID, title))
	 }

	 const addTodoList = (title: string) => {
			const action = addTodoListAC(title)
			dispatchTasksReducer(action)
			dispatchTodoListsReducer(action)
	 }

	 const changeTaskStatus = (todoListID: string, taskID: string, isDone: boolean) => {
			dispatchTasksReducer(changeTaskStatusTraningAC(todoListID, taskID, isDone))
	 }

	 const changeTaskTitle = (todoListID: string, taskID: string, newTitle: string) => {
			dispatchTasksReducer(changeTaskTitleTraningAC(todoListID, taskID, newTitle))
	 }
	 const changeTodoListTitle = (todoListID: string, newTitle: string) => {
			dispatchTodoListsReducer(changeTodoListAC(todoListID, newTitle))
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

export default TodoListTraningWithReducer;