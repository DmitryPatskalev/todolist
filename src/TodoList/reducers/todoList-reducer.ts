import {v1} from "uuid";
import {todolistAPI, TodoListsType} from "../../stories/api/TodolistsAPI";
import {ThunkType} from "./store";
import {Dispatch} from "redux";

export type RemoveTodoListActionType = {
	 type: 'REMOVE_TODOLIST'
	 id: string
}
export type AddTodoListActionType = {
	 type: 'ADD_TODOLIST'
	 todoList: TodoListsType

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

export type ActionTodoListType =
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

export const todoListReducer = (state: Array<TodolistDomainType> = initialState, action: ActionTodoListType): Array<TodolistDomainType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(tl => tl.id !== action.id)

			case 'ADD_TODOLIST':
				 const newTodoList: TodolistDomainType = {...action.todoList, filter: 'All'}
				 return [newTodoList, ...state]

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

export const addTodolistAC = (todoList: TodoListsType): AddTodoListActionType => {
	 return {type: 'ADD_TODOLIST', todoList}
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

export const fetchTodoListTC = (): ThunkType => async dispatch => {
	 const res = await todolistAPI.getTodolist()
	 dispatch(setTodolistAC(res.data))
}

export const removeTodoListTC = (todoListId: string) => {
	 return (dispatch: Dispatch) => {
			todolistAPI.removeTodolist(todoListId)
				.then((res) => {
					 dispatch(removeTodolistAC(todoListId))
				})
	 }
}
export const addTodoListTC = (title: string) => {
	 return (dispatch: Dispatch) => {
			todolistAPI.createTodolist(title)
				.then((res) => {
					 dispatch(addTodolistAC(res.data.data.item))
				})
	 }
}

export const changeTodoListTitleTC = (todoListId: string, title: string) => {
	 return (dispatch: Dispatch) => {
			todolistAPI.updateTodolist(todoListId, title)
				.then((res) => {
					 dispatch(changeTodolistAC(todoListId, title))
				})
	 }
}




