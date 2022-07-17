import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "./TodolistsAPI";

export default {
	 title: 'TodoList/API'
}
const settings = {
	 withCredentials: true,
	 headers: {
			'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
	 }
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
			axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Dima TodoList'}, settings)
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodoList = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/0eeaa233-d9cf-4729-8a61-58287eb42950', settings)
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodoListTitle = () => {
	 const [state, setState] = useState<any>(null)
	 useEffect(() => {
			axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists/4e8c6825-ad32-438e-af8c-9a6b57e620f7', {title: 'Dima TodoList'}, settings)
				.then((res) => {
					 setState(res.data)
				})
	 }, [])

	 return <div>{JSON.stringify(state)}</div>
}