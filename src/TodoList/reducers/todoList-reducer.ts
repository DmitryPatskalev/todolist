import {v1} from "uuid";
import {todolistAPI, TodoListsType} from "../api/TodolistsAPI";
import {ThunkType} from "./store";
import {Dispatch} from "redux";


export const todoListReducer = (state: Array<TodolistDomainType> = initialState, action: ActionTodoListType): Array<TodolistDomainType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(tl => tl.id !== action.todoListId)

			case 'ADD_TODOLIST':
				 return [{...action.todoList, filter: 'All'}, ...state]

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
//actions
export const removeTodolistAC = (todoListId: string) => {
	 return {type: 'REMOVE_TODOLIST', todoListId} as const
}
export const addTodolistAC = (todoList: TodoListsType) => {
	 return {type: 'ADD_TODOLIST', todoList} as const
}
export const changeTodolistAC = (id: string, title: string) => {
	 return {type: 'CHANGE_TODOLIST_TITLE', id, title} as const
}
export const changeTodoListFilterAC = (id: string, filter: FilterType) => {
	 return {type: 'CHANGE_TODOLIST_FILTER', id, filter} as const
}
export const setTodolistAC = (todolists: Array<TodoListsType>) => {
	 return {type: 'SET_TODOLIST', todolists} as const
}

//thunk
export const fetchTodoListTC = (): ThunkType => async dispatch => {
	 const res = await todolistAPI.getTodolist()
	 dispatch(setTodolistAC(res.data))
}

export const removeTodoListTC = (todoListId: string) => {
	 return (dispatch: Dispatch<ActionTodoListType>) => {
			todolistAPI.removeTodolist(todoListId)
				.then((res) => {
					 dispatch(removeTodolistAC(todoListId))
				})
	 }
}

export const addTodoListTC = (title: string) => {
	 return (dispatch: Dispatch<ActionTodoListType>) => {
			todolistAPI.createTodolist(title)
				.then((res) => {
					 dispatch(addTodolistAC(res.data.data.item))
				})
	 }
}

export const changeTodoListTitleTC = (todoListId: string, title: string) => {
	 return (dispatch: Dispatch<ActionTodoListType>) => {
			todolistAPI.updateTodolist(todoListId, title)
				.then((res) => {
					 dispatch(changeTodolistAC(todoListId, title))
				})
	 }
}

// types
export type AddTodoListActionType = ReturnType<typeof addTodolistAC>
export type RemoveTodoListActionType = ReturnType<typeof removeTodolistAC>
export type SetTodoListActionType = ReturnType<typeof setTodolistAC>

export type ActionTodoListType =
	RemoveTodoListActionType |
	AddTodoListActionType |
	ReturnType<typeof changeTodolistAC> |
	ReturnType<typeof changeTodoListFilterAC> |
	SetTodoListActionType


export type FilterType = 'All' | 'Active' | 'Completed'
const initialState: Array<TodolistDomainType> = []

export type TodolistDomainType = TodoListsType & {
	 filter: FilterType
}

export const todoListId1 = v1()
export const todoListId2 = v1()



