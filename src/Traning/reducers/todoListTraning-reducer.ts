import {v1} from "uuid";
import {FilterTaskType, TodoListType} from "../AppTraningRedux";

export type removeTodoListActionType = {
	 type: 'REMOVE_TODOLIST'
	 id: string
}

export type addTodoListActionType = {
	 type: 'ADD_TODOLIST'
	 todoListID: string
	 title: string
}
export type changeTodoListActionType = {
	 type: 'CHANGE_TODOLIST_TITLE'
	 id: string
	 title: string
}
export type changeTodoListFilterActionType = {
	 type: 'CHANGE_TODOLIST_FILTER'
	 id: string
	 filter: FilterTaskType
}

type ActionType =
	removeTodoListActionType |
	addTodoListActionType |
	changeTodoListActionType |
	changeTodoListFilterActionType

export const todoListID1 = v1()
export const todoListID2 = v1()

const initialState: Array<TodoListType> = [
	 {id: todoListID1, title: 'What I Learn', filter: 'All'},
	 {id: todoListID2, title: 'What to Buy', filter: 'All'},
]

export const todoListTraningReducer = (state: Array<TodoListType> = initialState, action: ActionType): Array<TodoListType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(elem => elem.id !== action.id)
			case 'ADD_TODOLIST':
				 return [{id: action.todoListID, title: action.title, filter: 'All'}, ...state]
			case 'CHANGE_TODOLIST_TITLE':
				 return state.map(elem => elem.id === action.id ? {...elem, title: action.title} : elem)
			case 'CHANGE_TODOLIST_FILTER':
				 return state.map(elem => elem.id === action.id ? {...elem, filter: action.filter} : elem)
			default:
				 return state
	 }
}

export const removeTodoListAC = (todoListID: string): removeTodoListActionType => {
	 return {type: 'REMOVE_TODOLIST', id: todoListID}
}

export const addTodoListAC = (title: string): addTodoListActionType => {
	 return {type: 'ADD_TODOLIST', todoListID: v1(), title}
}

export const changeTodoListAC = (todoListID: string, title: string): changeTodoListActionType => {
	 return {type: 'CHANGE_TODOLIST_TITLE', id: todoListID, title: title}
}

export const changeTodoListFilterAC = (todoListID: string, filter: FilterTaskType): changeTodoListFilterActionType => {
	 return {type: 'CHANGE_TODOLIST_FILTER', id: todoListID, filter: filter}
}