import {tasksReducer} from "../task-reducer";
import {addTodolistAC, TodolistDomainType, todoListReducer} from "../todoList-reducer";
import {TaskStateType} from "../../components/AppTodoList";


test('id should be equal', () => {
	 const startTaskState: TaskStateType = {}
	 const startTodoListState: Array<TodolistDomainType> = []
	 let todoList = {
			id: '1651fv1fd6v1dfv',
			title: 'New Todolist',
			order: 0,
			addedData: ''
	 }
	 const action = addTodolistAC(todoList)

	 const endTaskState = tasksReducer(startTaskState, action)
	 const endTodoListState = todoListReducer(startTodoListState, action)

	 const keys = Object.keys(endTaskState)
	 const idFromTask = keys[0]
	 const idFromTodolist = endTodoListState[0].id
	 expect(idFromTask).toBe(action.todoList.id)
	 expect(idFromTodolist).toBe(action.todoList.id)

})