import {GeneralTodolist, TodoListType} from "../Tasks";
import {addTodoListAC, todoListTraningReducer} from "./todoListTraning-reducer";
import {taskTraningReducer} from "./taskTraning-reducer";


test('id should be equal', () => {
	 const startTaskState: GeneralTodolist = {}
	 const startTodoListState: Array<TodoListType> = []

	 const action = addTodoListAC('New Todolist')
	 const endTaskState = taskTraningReducer(startTaskState, action)
	 const endTodoListState = todoListTraningReducer(startTodoListState, action)

	 const keys = Object.keys(endTaskState)
	 const idFromTask = keys[0]
	 const idFromTodolist = endTodoListState[0].id
	 expect(idFromTask).toBe(action.todoListID)
	 expect(idFromTodolist).toBe(action.todoListID)

})
