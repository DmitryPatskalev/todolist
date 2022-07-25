import {AddTodoListActionType, RemoveTodoListActionType, SetTodoListsActionType} from "./todoList-reducer";

import {
	 TaskPriorities,
	 TaskStatuses,
	 TaskType,
	 todolistAPI,
	 UpdateTaskModuleType
} from "../../stories/api/TodolistsAPI";
import {TaskStateType} from "../AppWithRedux";
import {AppRootState, ThunkType} from "./store";
import {Dispatch} from "redux";


export type RemoveTaskActionType = {
	 type: 'REMOVE_TASK'
	 todoListId: string
	 taskID: string
}
export type AddTasksActionType = {
	 type: 'ADD_TASK'
	 task: TaskType
}
export type UpdateTaskActionType = {
	 type: 'UPDATE_TASK'
	 todoListId: string
	 taskID: string
	 model: UpdateDomainTaskModelType
}
export type ChangeTaskTitleActionType = {
	 type: 'CHANGE_TASK-TITLE'
	 todoListId: string
	 taskID: string
	 title: string
}
export type SetTaskActionType = {
	 type: 'SET_TASK'
	 tasks: Array<TaskType>
	 todoListId: string
}

export type ActionTaskType =
	RemoveTaskActionType |
	AddTasksActionType |
	UpdateTaskActionType |
	ChangeTaskTitleActionType |
	AddTodoListActionType |
	RemoveTodoListActionType |
	SetTodoListsActionType |
	SetTaskActionType

export const initialState: TaskStateType = {}

export const tasksReducer = (state: TaskStateType = initialState, action: ActionTaskType): TaskStateType => {
	 switch (action.type) {
			case 'REMOVE_TASK':
				 return {...state, [action.todoListId]: state[action.todoListId].filter(t => t.id !== action.taskID)}
			case 'ADD_TASK':
				 const stateCopy = {...state}
				 const newTask = action.task
				 const tasks = stateCopy[newTask.todoListId]
				 const newTasks = [newTask, ...tasks]
				 stateCopy[newTask.todoListId] = newTasks
				 return stateCopy

			case "UPDATE_TASK":
				 return {
						...state, [action.todoListId]: state[action.todoListId].map(t => t.id === action.taskID ?
							{...t, ...action.model} : t)
				 }
			case "CHANGE_TASK-TITLE":
				 return {
						...state, [action.todoListId]: state[action.todoListId].map(t => t.id === action.taskID ?
							{...t, title: action.title} : t)
				 }
			case "ADD_TODOLIST":
				 return {...state, [action.todoList.id]: []}

			case "REMOVE_TODOLIST": {
				 const copyState = {...state}
				 delete copyState[action.id]
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
				 const copyState = {...state}
				 copyState[action.todoListId] = action.tasks
				 return copyState
			}

			default:
				 return state
	 }
}

export const removeTaskAC = (todoListId: string, taskID: string): RemoveTaskActionType => {
	 return {type: 'REMOVE_TASK', todoListId, taskID}
}
export const addTasksAC = (task: TaskType): AddTasksActionType => {
	 return {type: 'ADD_TASK', task}
}
export const updateTaskAC = (todoListId: string, taskID: string, model: UpdateDomainTaskModelType): UpdateTaskActionType => {
	 return {type: 'UPDATE_TASK', todoListId, taskID, model}
}
export const changeTaskTitleAC = (todoListId: string, taskID: string, title: string): ChangeTaskTitleActionType => {
	 return {type: 'CHANGE_TASK-TITLE', todoListId, taskID, title}
}
export const setTaskAC = (tasks: Array<TaskType>, todoListId: string): SetTaskActionType => {
	 return {type: 'SET_TASK', todoListId, tasks}
}

export const fetchTaskTC = (todoListId: string): ThunkType => async dispatch => {
	 const res = await todolistAPI.getTask(todoListId)
	 const tasks = res.data.items
	 dispatch(setTaskAC(tasks, todoListId))
}

export const removeTaskTC = (todoListId: string, taskID: string) => {
	 return (dispatch: Dispatch) => {
			todolistAPI.removeTask(todoListId, taskID)
				.then((res) => {
					 dispatch(removeTaskAC(todoListId, taskID))
				})
	 }
}

export const addTaskTC = (todoListId: string, title: string) => {
	 return (dispatch: Dispatch) => {
			todolistAPI.createTask(todoListId, title)
				.then((res) => {
					 const task = res.data.data.item
					 dispatch(addTasksAC(task))
				})
	 }
}

export type UpdateDomainTaskModelType = {
	 description?: string
	 title?: string
	 status?: TaskStatuses
	 priority?: TaskPriorities
	 startDate?: string
	 deadline?: string
}

export const updateTaskTC = (todoListId: string, taskID: string, domainModel: UpdateDomainTaskModelType) => {
	 return (dispatch: Dispatch, getState: () => AppRootState) => {
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