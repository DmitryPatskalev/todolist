import {v1} from "uuid";
import {todolistAPI, TodoListsType} from "../../stories/api/TodolistsAPI";
import {Dispatch} from "redux";

export type RemoveTodoListActionType = {
	 type: 'REMOVE_TODOLIST'
	 id: string
}
export type AddTodoListActionType = {
	 type: 'ADD_TODOLIST'
	 title: string
	 todoListID: string

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
export type SetTodoListsActionType = {
	 type: 'SET_TODOLIST'
	 todolists: Array<TodoListsType>
}

type ActionType =
	RemoveTodoListActionType |
	AddTodoListActionType |
	ChangeTodoListActionType |
	ChangeTodoListFilterActionType |
	SetTodoListsActionType

export const todoListId1 = v1()
export const todoListId2 = v1()


export type FilterType = 'All' | 'Active' | 'Completed'
const initialState: Array<TodolistDomainType> = []

export type TodolistDomainType = TodoListsType & {
	 filter: FilterType
}

export const todoListReducer = (state: Array<TodolistDomainType> = initialState, action: ActionType): Array<TodolistDomainType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(tl => tl.id !== action.id)

			case 'ADD_TODOLIST':
				 return [{id: action.todoListID, title: action.title, filter: 'All', addedData: '', order: 0}, ...state]

			case 'CHANGE_TODOLIST_TITLE':
				 return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)

			case 'CHANGE_TODOLIST_FILTER':
				 return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)

			case "SET_TODOLIST":
				 return action.todolists.map(tl => {
						return {...tl, filter: 'All'}
				 })


			default:
				 return state
	 }
}

export const removeTodolistAC = (todoListId: string): RemoveTodoListActionType => {
	 return {type: 'REMOVE_TODOLIST', id: todoListId}
}

export const addTodolistAC = (title: string): AddTodoListActionType => {
	 return {type: 'ADD_TODOLIST', title, todoListID: v1()}
}

export const changeTodolistAC = (id: string, title: string): ChangeTodoListActionType => {
	 return {type: 'CHANGE_TODOLIST_TITLE', id: id, title: title}
}

export const changeTodoListFilterAC = (id: string, filter: FilterType): ChangeTodoListFilterActionType => {
	 return {type: 'CHANGE_TODOLIST_FILTER', id: id, filter: filter}
}
export const setTodolistAC = (todolists: Array<TodoListsType>): SetTodoListsActionType => {
	 return {type: 'SET_TODOLIST', todolists}
}

export const fetchTodoListTC = () => {
	 return (dispatch: Dispatch) => {
			todolistAPI.getTodolist()
				.then((res) => {
					 dispatch(setTodolistAC(res.data))
				})
	 }
}