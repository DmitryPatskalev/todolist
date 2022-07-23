import React from "react";
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {v1} from 'uuid'
import {tasksReducer} from "../TodoList/reducers/task-reducer";
import {todoListId1, todoListId2, todoListReducer} from "../TodoList/reducers/todoList-reducer";
import {AppRootState} from "../TodoList/reducers/store";
import {TaskPriorities, TaskStatuses} from "./api/TodolistsAPI";


const rootReducer = combineReducers({
	 tasks: tasksReducer,
	 todoLists: todoListReducer
})

const initialGlobalState: AppRootState = {
	 todoLists: [
			{id: 'todolistId1', title: 'What to learn', filter: 'All', addedData: '', order: 0},
			{id: 'todolistId2', title: 'What to buy', filter: 'All', addedData: '', order: 0}
	 ],
	 tasks: {
			['todolistId1']: [
				 {
						id: v1(), title: 'HTML&CSS', status: TaskStatuses.New,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'JS', status: TaskStatuses.New,
						todoListId: todoListId1,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 }
			],
			['todolistId2']: [
				 {
						id: v1(), title: 'Milk', status: TaskStatuses.New,
						todoListId: todoListId2,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: v1(), title: 'React Book', status: TaskStatuses.New,
						todoListId: todoListId2,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 }
			]
	 }
}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootState)

export const ReduxStoreProviderDecorator = (storyFn: any) => (
	<Provider
		store={storyBookStore}>{storyFn()}
	</Provider>)