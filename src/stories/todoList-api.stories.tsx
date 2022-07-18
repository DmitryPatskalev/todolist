import React, {useEffect, useState} from 'react'
import {todolistAPI} from "./api/TodolistsAPI";


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
			// здесь мы будем делать запрос и ответ закидывать в стейт.
			// который в виде строки будем отображать в div-ке

	 }, [])
	 return <div>{JSON.stringify(state)}</div>
}
export const CreateTodoList = () => {
	 const [state, setState] = useState<any>(null)

	 useEffect(() => {
			todolistAPI.createTodolist('New TodoList')
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodoList = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			const todoListID = '6f1da759-1dc8-4ee6-8751-e66a3d6f0a36'
			todolistAPI.deleteTodolist(todoListID)
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodoListTitle = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			const todoListID = '5c6eb658-c70e-473e-86f9-b3feea0ea4ef'
			todolistAPI.updateTodolist(todoListID, 'Todolist')
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			const todoListID = '9173276c-579e-4195-b56d-af6154189ee4'
			todolistAPI.getTask(todoListID)
				.then((res) => {
					 setState(res.data)
				})
			// здесь мы будем делать запрос и ответ закидывать в стейт.
			// который в виде строки будем отображать в div-ке

	 }, [])
	 return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
	 const [state, setState] = useState<any>(null)
	 const [taskID, setTaskID] = useState<string>('')
	 const [todoListID, setTodoListID] = useState<string>('')
	 const deleteTask = () => {
			todolistAPI.deleteTask(todoListID, taskID)
				.then((res) => {
					 setState(res.data)
				})
	 }
	 return <div>{JSON.stringify(state)}
			<input placeholder={'todoListID'} value={todoListID}
						 onChange={(e) => setTodoListID(e.currentTarget.value)}/>
			<input placeholder={'taskID'} value={taskID}
						 onChange={(e) => setTaskID(e.currentTarget.value)}/>
			<button onClick={deleteTask}>delete task</button>
	 </div>
}