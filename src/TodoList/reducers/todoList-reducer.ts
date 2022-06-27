import {FilterType} from "../Tasks";
import {v1} from "uuid";
import {TodoListsType} from "../AppWithReducer";


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

type ActionType =
	RemoveTodoListActionType |
	AddTodoListActionType |
	ChangeTodoListActionType |
	ChangeTodoListFilterActionType

export const todoListId1 = v1()
export const todoListId2 = v1()

const initialState: Array<TodoListsType> = [
	 {id: todoListId1, title: 'What I learn', filter: 'All'},
	 {id: todoListId2, title: 'What to buy', filter: 'All'},
]

export const todoListReducer = (state: Array<TodoListsType> = initialState, action: ActionType): Array<TodoListsType> => {
	 switch (action.type) {
			case 'REMOVE_TODOLIST':
				 return state.filter(tl => tl.id !== action.id)

			case 'ADD_TODOLIST':
				 return [{id: action.todoListID, title: action.title, filter: 'All'}, ...state]

			case 'CHANGE_TODOLIST_TITLE':
				 return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)

			case 'CHANGE_TODOLIST_FILTER':
				 return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)

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