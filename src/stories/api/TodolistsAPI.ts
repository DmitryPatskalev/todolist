import axios from "axios";

const instance = axios.create({
	 baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	 withCredentials: true,
	 headers: {
			'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
	 }
})

type TodoListsType = {
	 todoListID: string
	 title: string
	 addedData: string
	 order: number
}

type ResponseType<D> = {
	 resultCode: number
	 messages: Array<string>
	 data: D
}
type TaskType = {
	 description: string
	 title: string
	 completed: boolean
	 status: number
	 priority: number
	 startDate: string
	 deadline: string
	 id: string
	 todoListId: string
	 order: number
	 addedDate: string
}

type GetTaskResponse = {
	 error: null | string
	 totalCount: number
	 items: TaskType[]
}


export const todolistAPI = {
	 getTodolistAPI() {
			return instance.get<Array<TodoListsType>>('todo-lists')
	 },
	 createTodolistAPI(title: string) {
			return instance.post<ResponseType<{ item: TodoListsType }>>('todo-lists', {title: title})
	 },
	 deleteTodolistAPI(todoListID: string) {
			return instance.delete<ResponseType<{}>>(`todo-lists/${todoListID}`)
	 },
	 updateTodolistAPI(todoListID: string, title: string) {
			return instance.put<ResponseType<{}>>(`todo-lists/${todoListID}`, {title: title})
	 },
	 getTask(todoListID: string) {
			return instance.get<GetTaskResponse>(`todo-lists/${todoListID}/tasks`)
	 }
}