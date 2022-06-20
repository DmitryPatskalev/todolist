import {GeneralTodolist} from "../Tasks";
import {v1} from "uuid";
import {addTodoListActionType, removeTodoListActionType} from "./todoListTraning-reducer";

export type RemoveTaskAT = {
	 type: 'REMOVE-TASK'
	 todoListID: string
	 taskID: string
}
export type AddTaskAT = {
	 type: 'ADD-TASK'
	 todoListID: string
	 title: string
}
export type ChangeTaskStatusAT = {
	 type: 'CHANGE-TASK-STATUS'
	 todoListID: string
	 taskID: string
	 isDone: boolean
}
export type ChangeTaskTitleAT = {
	 type: 'CHANGE-TASK-TITLE'
	 todoListID: string
	 taskID: string
	 title: string
}

export type ActionTraningTask = RemoveTaskAT | AddTaskAT | ChangeTaskStatusAT | ChangeTaskTitleAT |
	addTodoListActionType | removeTodoListActionType

export const taskTraningReducer = (state: GeneralTodolist, action: ActionTraningTask): GeneralTodolist => {
	 switch (action.type) {
			case "REMOVE-TASK":
				 return {...state, [action.todoListID]: state[action.todoListID].filter(t => t.id !== action.taskID)}
			case "ADD-TASK":
				 let newTask = {id: v1(), title: action.title, isDone: true}
				 return {...state, [action.todoListID]: [newTask, ...state[action.todoListID]]}
			case "CHANGE-TASK-STATUS":
				 return {
						...state, [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {
							 ...t, isDone: action.isDone
						} : t)
				 }
			case "CHANGE-TASK-TITLE":
				 return {
						...state, [action.todoListID]: state[action.todoListID].map(t => t.id === action.taskID ? {
							 ...t, title: action.title
						} : t)
				 }
			case "ADD_TODOLIST":
				 return {...state, [action.todoListID]: []}
			case "REMOVE_TODOLIST":
				 const copyState = {...state}
				 delete copyState[action.id]
				 return copyState
			default:
				 throw new Error('I do not understand this type')
	 }
}
export const removeTaskTraningAC = (todoListID: string, taskID: string): RemoveTaskAT => {
	 return {type: 'REMOVE-TASK', todoListID, taskID}
}
export const addTaskTraningAC = (todoListID: string, title: string): AddTaskAT => {
	 return {type: 'ADD-TASK', todoListID, title}
}
export const changeTaskStatusTraningAC = (todoListID: string, taskID: string, isDone: boolean): ChangeTaskStatusAT => {
	 return {type: 'CHANGE-TASK-STATUS', todoListID, taskID, isDone}
}
export const changeTaskTitleTraningAC = (todoListID: string, taskID: string, title: string): ChangeTaskTitleAT => {
	 return {type: 'CHANGE-TASK-TITLE', todoListID, taskID, title}
}