import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todoList-reducer";

import {TaskPriorities, TaskStatuses} from "../../stories/api/TodolistsAPI";
import {TaskStateType} from "../AppWithRedux";


export type RemoveTaskActionType = {
	 type: 'REMOVE_TASK'
	 todoListID: string
	 taskID: string
}
export type AddTasksActionType = {
	 type: 'ADD_TASK'
	 todoListID: string
	 title: string
}
export type ChangeTaskStatusActionType = {
	 type: 'CHANGE_TASK-STATUS'
	 todoListID: string
	 taskID: string
	 status: TaskStatuses
}
export type ChangeTaskTitleActionType = {
	 type: 'CHANGE_TASK-TITLE'
	 todoListID: string
	 taskID: string
	 title: string
}

export type ActionTaskType =
	RemoveTaskActionType |
	AddTasksActionType |
	ChangeTaskStatusActionType |
	ChangeTaskTitleActionType |
	AddTodoListActionType |
	RemoveTodoListActionType

export const initialState: TaskStateType = {
	 // [todoListId1]: [
	 // 	{id: v1(), title: 'HTML&CSS', status: TaskStatuses.New},
	 // 	{id: v1(), title: 'JS/TS', status: TaskStatuses.New},
	 // 	{id: v1(), title: 'React', status: TaskStatuses.Completed},
	 // 	{id: v1(), title: 'C#/C++', status: TaskStatuses.Completed},
	 // 	{id: v1(), title: 'Python', status: TaskStatuses.New},
	 // ],
	 // [todoListId2]: [
	 // 	{id: v1(), title: 'React Book', status: TaskStatuses.New},
	 // 	{id: v1(), title: 'Python Algoritms', status: TaskStatuses.New},
	 // 	{id: v1(), title: 'JS Advance', status: TaskStatuses.Completed},
	 // ]
}

export const tasksReducer = (state: TaskStateType = initialState, action: ActionTaskType): TaskStateType => {
	 switch (action.type) {
			case 'REMOVE_TASK':
				 return {...state, [action.todoListID]: state[action.todoListID].filter(t => t.id !== action.taskID)}
			case 'ADD_TASK':
				 const newTask = {
						id: v1(), title: action.title, status: TaskStatuses.New, todoListId: action.todoListID,
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 }
				 return {...state, [action.todoListID]: [newTask, ...state[action.todoListID]]}
			case "CHANGE_TASK-STATUS":
				 return {
						...state, [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ?
							{...t, status: action.status} : t)
				 }
			case "CHANGE_TASK-TITLE":
				 return {
						...state, [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ?
							{...t, title: action.title} : t)
				 }
			case "ADD_TODOLIST":
				 return {...state, [action.todoListID]: []}
			case "REMOVE_TODOLIST":
				 const stateCopy = {...state}
				 delete stateCopy[action.id]
				 return stateCopy
			default:
				 return state
	 }
}

export const removeTasksAC = (todoListID: string, taskID: string): RemoveTaskActionType => {
	 return {type: 'REMOVE_TASK', todoListID, taskID}
}
export const addTasksAC = (todoListID: string, title: string): AddTasksActionType => {
	 return {type: 'ADD_TASK', todoListID, title}
}
export const changeTaskStatus = (todoListID: string, taskID: string, status: TaskStatuses): ChangeTaskStatusActionType => {
	 return {type: 'CHANGE_TASK-STATUS', todoListID, taskID, status}
}
export const changeTaskTitleAC = (todoListID: string, taskID: string, title: string): ChangeTaskTitleActionType => {
	 return {type: 'CHANGE_TASK-TITLE', todoListID, taskID, title}
}