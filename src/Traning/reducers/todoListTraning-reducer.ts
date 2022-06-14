import {FilterTasksType, TodoListsType} from "../Tasks";
import {v1} from "uuid";

export type RemoveTodoListActionType = {
	 type: 'REMOVE-TODOLIST'
	 id: string
}
export type AddTodoListActionType = {
	 type: 'ADD-TODOLIST'
	 title: string
}
export type ChangeTodoListTitleActionType = {
	 type: 'CHANGE-TODOLIST-TITLE'
	 id: string
	 title: string
}
export type ChangeTodoListFilterActionType = {
	 type: 'CHANGE-TODOLIST-FILTER'
	 id: string
	 filter: FilterTasksType
}

export type ActionType =
	RemoveTodoListActionType |
	AddTodoListActionType |
	ChangeTodoListTitleActionType |
	ChangeTodoListFilterActionType


export const todoListTraningReducer = (state: Array<TodoListsType>, action: ActionType): Array<TodoListsType> => {
	 switch (action.type) {
			case 'REMOVE-TODOLIST':
				 return state.filter(tl => tl.id !== action.id)

			case 'ADD-TODOLIST':
				 return [...state, {id: v1(), title: action.title, filter: 'All'}]

			case 'CHANGE-TODOLIST-TITLE':
				 return (state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl))
			
		 // const todolist = state.find(tl => tl.id === action.id)
		 // if (todolist) {
		 // 	todolist.title = action.title
		 // }
		 // return [...state]

			case 'CHANGE-TODOLIST-FILTER':
				 return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)

		 // const todolistFilter = state.find(tl => tl.id === action.id)
		 // if (todolistFilter) {
		 // 	todolistFilter.filter = action.filter
		 // }
		 // return [...state]

			default:
				 throw new Error("I don't understand this action type")
	 }
}

export const RemoveTodoListAC = (todoListID: string): RemoveTodoListActionType => {
	 return {type: 'REMOVE-TODOLIST', id: todoListID}
}

export const AddTodoListAC = (title: string): AddTodoListActionType => {
	 return {type: 'ADD-TODOLIST', title: title}
}

export const ChangeTodoListAC = (id: string, title: string): ChangeTodoListTitleActionType => {
	 return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}

export const ChangeTodoListFilterAC = (id: string, filter: FilterTasksType): ChangeTodoListFilterActionType => {
	 return {type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}