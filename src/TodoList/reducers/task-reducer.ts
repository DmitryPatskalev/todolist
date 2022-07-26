import {AddTodoListActionType, RemoveTodoListActionType, SetTodoListActionType} from "./todoList-reducer";

import {
	 TaskPriorities,
	 TaskStatuses,
	 TaskType,
	 todolistAPI,
	 UpdateTaskModuleType
} from "../api/TodolistsAPI";
import {TaskStateType} from "../components/AppTodoList";
import {AppRootState, ThunkType} from "./store";
import {Dispatch} from "redux";


export const tasksReducer = (state: TaskStateType = initialState, action: ActionTaskType): TaskStateType => {
	 switch (action.type) {
			case 'REMOVE_TASK':
				 return {...state, [action.todoListId]: state[action.todoListId].filter(t => t.id !== action.taskID)}
			case 'ADD_TASK':
				 return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}
			case "UPDATE_TASK":
				 return {
						...state, [action.todoListId]: state[action.todoListId].map(t => t.id === action.taskID ?
							{...t, ...action.model} : t)
				 }
			case "ADD_TODOLIST":
				 return {...state, [action.todoList.id]: []}

			case "REMOVE_TODOLIST": {
				 const copyState = {...state}
				 delete copyState[action.todoListId]
				 return copyState
			}
			case "SET_TODOLIST": {
				 const copyState = {...state}
				 action.todolists.forEach(tl => {
						copyState[tl.id] = []
				 })
				 return copyState
			}
			case "SET_TASK": {
				 return {...state, [action.todoListId]: action.tasks}
			}
			default:
				 return state
	 }
}
//actions
export const removeTaskAC = (todoListId: string, taskID: string) => {
	 return {type: 'REMOVE_TASK', todoListId, taskID} as const
}
export const addTasksAC = (task: TaskType) => {
	 return {type: 'ADD_TASK', task} as const
}
export const updateTaskAC = (todoListId: string, taskID: string, model: UpdateDomainTaskModelType) => {
	 return {type: 'UPDATE_TASK', todoListId, taskID, model} as const
}
export const setTaskAC = (tasks: Array<TaskType>, todoListId: string) => {
	 return {type: 'SET_TASK', todoListId, tasks} as const
}

//thunk
export const fetchTaskTC = (todoListId: string): ThunkType => async dispatch => {
	 const res = await todolistAPI.getTask(todoListId)
	 const tasks = res.data.items
	 dispatch(setTaskAC(tasks, todoListId))
}

export const removeTaskTC = (todoListId: string, taskID: string) => {
	 return (dispatch: Dispatch<ActionTaskType>) => {
			todolistAPI.removeTask(todoListId, taskID)
				.then((res) => {
					 dispatch(removeTaskAC(todoListId, taskID))
				})
	 }
}

export const addTaskTC = (todoListId: string, title: string) => {
	 return (dispatch: Dispatch<ActionTaskType>) => {
			todolistAPI.createTask(todoListId, title)
				.then((res) => {
					 const task = res.data.data.item
					 dispatch(addTasksAC(task))
				})
	 }
}


export const updateTaskTC = (todoListId: string, taskID: string, domainModel: UpdateDomainTaskModelType) => {
	 return (dispatch: Dispatch<ActionTaskType>, getState: () => AppRootState) => {
			const state = getState()
			const task = state.tasks[todoListId].find(tl => tl.id === taskID)
			if (!task) {
				 return
			}
			const apiModel: UpdateTaskModuleType = {
				 deadline: task.deadline,
				 description: task.description,
				 priority: task.priority,
				 status: task.status,
				 startDate: task.startDate,
				 title: task.title,
				 ...domainModel
			}
			todolistAPI.updateTask(todoListId, taskID, apiModel)
				.then((res) => {
					 dispatch(updateTaskAC(todoListId, taskID, domainModel))
				})
	 }
}

//types
export type UpdateDomainTaskModelType = {
	 description?: string
	 title?: string
	 status?: TaskStatuses
	 priority?: TaskPriorities
	 startDate?: string
	 deadline?: string
}

export type ActionTaskType =
	ReturnType<typeof removeTaskAC> |
	ReturnType<typeof addTasksAC> |
	ReturnType<typeof updateTaskAC> |
	ReturnType<typeof setTaskAC> |
	AddTodoListActionType |
	RemoveTodoListActionType |
	SetTodoListActionType


export const initialState: TaskStateType = {}


// [todoListId1]: [
// 	{id: v1(), title: 'HTML&CSS', status: TaskStatuses.New},
// 	{id: v1(), title: 'JS/TS', status: TaskStatuses.New},
// 	{id: v1(), title: 'React', status: TaskStatuses.Completed},
// 	{id: v1(), title: 'C#/C++', status: TaskStatuses.Completed},
// 	{id: v1(), title: 'Python', status: TaskStatuses.New},
// ],
// [todoListId2]: [
// 	{id: v1(), title: 'React Book', status: TaskStatuses.New},
// 	{id: v1(), title: 'Python Algoritms', status: TaskStatuses.New},
// 	{id: v1(), title: 'JS Advance', status: TaskStatuses.Completed},
// ]