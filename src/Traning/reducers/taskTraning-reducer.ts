import {v1} from "uuid";
import {addTodoListActionType, removeTodoListActionType, todoListID1, todoListID2} from "./todoListTraning-reducer";
import {GeneralTodolist} from "../AppTraningRedux";

export type RemoveTaskAT = ReturnType<typeof removeTaskTraningAC>
export type AddTaskAT = ReturnType<typeof addTaskTraningAC>
export type ChangeTaskStatusAT = ReturnType<typeof changeTaskStatusTraningAC>
export type ChangeTaskTitleAT = ReturnType<typeof changeTaskTitleTraningAC>

export type ActionTraningTask = RemoveTaskAT | AddTaskAT | ChangeTaskStatusAT | ChangeTaskTitleAT |
	addTodoListActionType | removeTodoListActionType

const initialState: GeneralTodolist = {
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
}

export const taskTraningReducer = (state: GeneralTodolist = initialState, action: ActionTraningTask): GeneralTodolist => {
	 switch (action.type) {
			case "REMOVE-TASK":
				 return {...state, [action.todoListID]: state[action.todoListID].filter(t => t.id !== action.taskID)}
			case "ADD-TASK":
				 let newTask = {id: v1(), title: action.title, isDone: false}
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
				 return state
	 }
}
export const removeTaskTraningAC = (todoListID: string, taskID: string) => {
	 return {type: 'REMOVE-TASK', todoListID, taskID} as const
}
export const addTaskTraningAC = (todoListID: string, title: string) => {
	 return {type: 'ADD-TASK', todoListID, title} as const
}
export const changeTaskStatusTraningAC = (todoListID: string, taskID: string, isDone: boolean) => {
	 return {type: 'CHANGE-TASK-STATUS', todoListID, taskID, isDone} as const
}
export const changeTaskTitleTraningAC = (todoListID: string, taskID: string, title: string) => {
	 return {type: 'CHANGE-TASK-TITLE', todoListID, taskID, title} as const
}