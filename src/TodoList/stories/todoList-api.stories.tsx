import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/TodolistsAPI";


export default {
	 title: 'TodoList/API'
}

export const GetTodoLists = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			todolistAPI.getTodolist()
				.then((res) => {
					 setState(res.data)
				})
	 }, [])
	 return <div>{JSON.stringify(state)}</div>
}

export const CreateTodoList = () => {
	 const [state, setState] = useState<any>(null)
	 const [title, setTitle] = useState<string>('')

	 const createTodolist = () => {
			todolistAPI.createTodolist(title)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'title todoList'} value={title}
						 onChange={(e) => setTitle(e.currentTarget.value)}/>
			<button onClick={createTodolist}>create todolist</button>
	 </div>
}

export const DeleteTodoList = () => {
	 const [state, setState] = useState<any>(null)
	 const [todoListId, setTodoListID] = useState<string>('')

	 const deleteTodoList = () => {
			todolistAPI.removeTodolist(todoListId)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<button onClick={deleteTodoList}>delete todolist</button>
	 </div>
}


export const UpdateTodoListTitle = () => {
	 const [state, setState] = useState<any>(null)
	 const [todoListId, setTodoListID] = useState<string>('')
	 const [newTitle, setNewTitle] = useState<string>('')

	 const updateTodolist = () => {
			todolistAPI.updateTodolist(todoListId, newTitle)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<input placeholder={'new title todolist'} value={newTitle}
						 onChange={(e) => setNewTitle(e.currentTarget.value)}/>
			<button onClick={updateTodolist}>update todolist</button>
	 </div>
}


export const GetTask = () => {
	 const [state, setState] = useState<any>(null)
	 const [todoListId, setTodoListID] = useState<string>('')

	 const getTask = () => {
			todolistAPI.getTask(todoListId)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<button onClick={getTask}>get tasks</button>
	 </div>
}


export const CreateTask = () => {
	 const [state, setState] = useState<any>(null)
	 const [taskTitle, setTaskTitle] = useState<string>('')
	 const [todoListId, setTodoListID] = useState<string>('')

	 const createTask = () => {
			todolistAPI.createTask(todoListId, taskTitle)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<input placeholder={'task Title'} value={taskTitle}
						 onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
			<button onClick={createTask}>create task</button>
	 </div>
}


export const DeleteTask = () => {
	 const [state, setState] = useState<any>(null)
	 const [taskID, setTaskID] = useState<string>('')
	 const [todoListId, setTodoListID] = useState<string>('')
	 const deleteTask = () => {
			todolistAPI.removeTask(todoListId, taskID)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<input placeholder={'taskID'} value={taskID}
						 onChange={(e) => setTaskID(e.currentTarget.value)}/>
			<button onClick={deleteTask}>delete task</button>
	 </div>
}


export const UpdateTask = () => {
	 const [state, setState] = useState<any>(null)
	 const [title, setTitle] = useState<string>('title1')
	 const [todoListId, setTodoListID] = useState<string>('')
	 const [taskID, setTaskID] = useState<string>('')
	 const [description, setDescription] = useState<string>('description 1')
	 const [status, setStatus] = useState<number>(0)
	 const [priority, setPriority] = useState<number>(0)
	 const [startDate, setStartDate] = useState<string>('')
	 const [deadline, setDeadline] = useState<string>('')

	 const createTask = () => {
			todolistAPI.updateTask(todoListId, taskID, {
				 title: title,
				 description: description,
				 priority: priority,
				 startDate: '',
				 deadline: '',
				 status: status
			})
				.then((res) => {
					 setState(res.data)
				})
	 }

	 return <div>{JSON.stringify(state)}
			<input placeholder={'taskID'} value={taskID}
						 onChange={(e) => setTaskID(e.currentTarget.value)}/>

			<input placeholder={'todoListId'} value={todoListId}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>

			<input placeholder={'task Title'} value={title}
						 onChange={(e) => setTitle(e.currentTarget.value)}/>

			<input placeholder={'description'} value={description}
						 onChange={(e) => setDescription(e.currentTarget.value)}/>

			<input placeholder={'status'} value={status}
						 onChange={(e) => setStatus(+e.currentTarget.value)}/>

			<input placeholder={'priority'} value={priority}
						 onChange={(e) => setPriority(+e.currentTarget.value)}/>

			<button onClick={createTask}>update task</button>
	 </div>
}