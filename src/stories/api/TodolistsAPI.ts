import axios from "axios";

const settings = {
	 withCredentials: true,
	 headers: {
			'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
	 }
}


export const todolistAPI = {
	 getTodolistAPI() {
			return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
	 }

}