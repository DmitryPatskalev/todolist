import {tasksReducer} from "../task-reducer";
import {addTodolistAC, TodolistDomainType, todoListReducer} from "../todoList-reducer";
import {TaskStateType} from "../../AppWithRedux";


test('id should be equal', () => {
	 const startTaskState: TaskStateType = {}
	 const startTodoListState: Array<TodolistDomainType> = []

	 const action = addTodolistAC('New Todolist')
	 const endTaskState = tasksReducer(startTaskState, action)
	 const endTodoListState = todoListReducer(startTodoListState, action)

	 const keys = Object.keys(endTaskState)
	 const idFromTask = keys[0]
	 const idFromTodolist = endTodoListState[0].id
	 expect(idFromTask).toBe(action.todoListID)
	 expect(idFromTodolist).toBe(action.todoListID)

})