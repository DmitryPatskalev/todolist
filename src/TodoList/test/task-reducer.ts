import {TaskStateType} from "../Tasks";
import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todoList-reducer";

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
	 isDone: boolean
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


export const tasksReducer = (state: TaskStateType, action: ActionTaskType): TaskStateType => {
	 switch (action.type) {
			case 'REMOVE_TASK':
				 return {...state, [action.todoListID]: state[action.todoListID].filter(t => t.id !== action.taskID)}
			case 'ADD_TASK':
				 const newTask = {id: v1(), title: action.title, isDone: true}
				 return {...state, [action.todoListID]: [newTask, ...state[action.todoListID]]}
			case "CHANGE_TASK-STATUS":
				 return {
						...state, [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ?
							{...t, isDone: action.isDone} : t)
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
				 throw new Error('I do not understand this type')
	 }
}

export const removeTasksAC = (todoListID: string, taskID: string): RemoveTaskActionType => {
	 return {type: 'REMOVE_TASK', todoListID, taskID}
}
export const addTasksAC = (todoListID: string, title: string): AddTasksActionType => {
	 return {type: 'ADD_TASK', todoListID, title}
}
export const changeTaskStatus = (todoListID: string, taskID: string, isDone: boolean): ChangeTaskStatusActionType => {
	 return {type: 'CHANGE_TASK-STATUS', todoListID, taskID, isDone}
}
export const changeTaskTitleAC = (todoListID: string, taskID: string, title: string): ChangeTaskTitleActionType => {
	 return {type: 'CHANGE_TASK-TITLE', todoListID, taskID, title}
}