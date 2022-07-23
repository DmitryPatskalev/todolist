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
export type UpdateTaskType = {
	 description: string
	 title: string
	 status: number
	 priority: number
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
	 deleteTodolist(todoListID: string) {
			return instance.delete<ResponseType>(`todo-lists/${todoListID}`)
	 },
	 updateTodolist(todoListID: string, title: string) {
			return instance.put<ResponseType>(`todo-lists/${todoListID}`, {title})
	 },
	 getTask(todoListID: string) {
			return instance.get<GetTaskResponse>(`todo-lists/${todoListID}/tasks`)
	 },
	 createTask(todoListID: string, taskTitle: string) {
			return instance.post<GetTaskResponse>(`todo-lists/${todoListID}/tasks`, {title: taskTitle})
	 },
	 deleteTask(todoListID: string, taskID: string) {
			return instance.delete<ResponseType>(`todo-lists/${todoListID}/tasks/${taskID}`)
	 },
	 updateTask(todoListID: string, taskID: string, model: UpdateTaskType) {
			return instance.put<ResponseType>(`todo-lists/${todoListID}/tasks/${taskID}`, model)
	 }
}