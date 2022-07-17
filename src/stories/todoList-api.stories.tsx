import React, {useEffect, useState} from 'react'
import {todolistAPI} from "./api/TodolistsAPI";


export default {
	 title: 'TodoList/API'
}


export const GetTodoLists = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			todolistAPI.getTodolistAPI()
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
			todolistAPI.createTodolistAPI('New TodoList')
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodoList = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			const todoListID = '4a6ec5fc-47b8-4920-84d4-d60b4bb28dd0'
			todolistAPI.deleteTodolistAPI(todoListID)
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
			todolistAPI.updateTodolistAPI(todoListID, 'Todolist')
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			const todoListID = '44d2eca8-aa6a-4516-9c07-f1510e680e64'
			todolistAPI.getTask(todoListID)
				.then((res) => {
					 setState(res.data)
				})
			// здесь мы будем делать запрос и ответ закидывать в стейт.
			// который в виде строки будем отображать в div-ке

	 }, [])
	 return <div>{JSON.stringify(state)}</div>
}