import {FilterType, TodoListsType} from "../Tasks";
import {v1} from "uuid";

export type RemoveTodoListActionType = {
	 type: 'REMOVE_TODOLIST'
	 id: string
}
export type AddTodoListActionType = {
	 type: 'ADD_TODOLIST'
	 title: string
}
export type ChangeTodoListActionType = {
	 type: 'CHANGE_TODOLIST_TITLE'
	 id: string
	 title: string
}
export type ChangeTodoListFilterActionType = {
	 type: 'CHANGE_TODOLIST_FILTER'
	 id: string
	 filter: FilterType
}

type ActionType =
	RemoveTodoListActionType |
	AddTodoListActionType |
	ChangeTodoListActionType |
	ChangeTodoListFilterActionType

export const todoListReducer = (state: Array<TodoListsType>, action: ActionType): Array<TodoListsType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(tl => tl.id !== action.id)
			case 'ADD_TODOLIST':
				 return [...state, {id: v1(), title: action.title, filter: 'Completed'}]
			case 'CHANGE_TODOLIST_TITLE':
				 let todolist = state.find(tl => tl.id === action.id)
				 if (todolist) {
						todolist.title = action.title
				 }
				 return [...state]
			case 'CHANGE_TODOLIST_FILTER':
				 let todolistFilter = state.find(tl => tl.id === action.id)
				 if (todolistFilter) {
						todolistFilter.filter = action.filter
				 }
				 return [...state]

			default:
				 throw new Error("I don't understand this type")
	 }
}

export const RemoveTodolistAC = (todoListId: string): RemoveTodoListActionType => {
	 return {type: 'REMOVE_TODOLIST', id: todoListId}
}

export const AddTodolistAC = (title: string): AddTodoListActionType => {
	 return {type: 'ADD_TODOLIST', title: title}
}
export const ChangeTodolistAC = (id: string, title: string): ChangeTodoListActionType => {
	 return {type: 'CHANGE_TODOLIST_TITLE', id: id, title: title}
}
export const ChangeTodoListFilterAC = (id: string, filter: FilterType): ChangeTodoListFilterActionType => {
	 return {type: 'CHANGE_TODOLIST_FILTER', id: id, filter: filter}
}