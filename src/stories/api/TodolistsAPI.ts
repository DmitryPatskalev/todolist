import axios from "axios";

const instance = axios.create({
	 baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	 withCredentials: true,
	 headers: {
			'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
	 }
})

export type TodoListsType = {
	 id: string
	 title: string
	 addedData: string
	 order: number
}

type ResponseType<D = {}> = {
	 resultCode: number
	 messages: Array<string>
	 data: D
}

export enum TaskStatuses {
	 New = 0,
	 InProgress = 1,
	 Completed = 2,
	 Draft = 3
}

export enum TaskPriorities {
	 Low = 0,
	 Middle = 1,
	 Hi = 2,
	 Urgently = 3,
	 Later = 4
}

export type TaskType = {
	 description: string
	 title: string
	 status: TaskStatuses
	 priority: TaskPriorities
	 startDate: string
	 deadline: string
	 id: string
	 todoListId: string
	 order: number
	 addedDate: string
}
export type UpdateTaskModuleType = {
	 description: string
	 title: string
	 status: TaskStatuses
	 priority: TaskPriorities
	 startDate: string
	 deadline: string
}


type GetTaskResponse = {
	 error: null | string
	 totalCount: number
	 items: TaskType[]
}


export const todolistAPI = {
	 getTodolist() {
			return instance.get<Array<TodoListsType>>('todo-lists')
	 },
	 createTodolist(title: string) {
			return instance.post<ResponseType<{ item: TodoListsType }>>('todo-lists', {title})
	 },
	 removeTodolist(todoListId: string) {
			return instance.delete<ResponseType>(`todo-lists/${todoListId}`)
	 },
	 updateTodolist(todoListId: string, title: string) {
			return instance.put<ResponseType>(`todo-lists/${todoListId}`, {title})
	 },
	 getTask(todoListId: string) {
			return instance.get<GetTaskResponse>(`todo-lists/${todoListId}/tasks`)
	 },
	 createTask(todoListId: string, taskTitle: string) {
			return instance.post<ResponseType<{ item: TaskType }>>(`todo-lists/${todoListId}/tasks`, {title: taskTitle})
	 },
	 removeTask(todoListId: string, taskID: string) {
			return instance.delete<ResponseType>(`todo-lists/${todoListId}/tasks/${taskID}`)
	 },
	 updateTask(todoListId: string, taskID: string, model: UpdateTaskModuleType) {
			return instance.put<ResponseType>(`todo-lists/${todoListId}/tasks/${taskID}`, model)
	 }
}