import {addTasksAC, changeTaskStatus, changeTaskTitleAC, removeTasksAC, tasksReducer} from "./task-reducer";
import {addTodolistAC, removeTodolistAC} from "./todoList-reducer";
import {TaskStateType} from "../AppWithRedux";

let startState: TaskStateType

beforeEach(() => {
	 startState = {
			'todoListId1': [
				 {id: '1', title: 'HTML&CSS', isDone: true},
				 {id: '2', title: 'JS/TS', isDone: true},
				 {id: '3', title: 'React', isDone: false},
				 {id: '4', title: 'C#/C++', isDone: false},
				 {id: '5', title: 'Python', isDone: true},
			],
			'todoListId2': [
				 {id: '1', title: 'React Book', isDone: true},
				 {id: '2', title: 'Python Algoritms', isDone: true},
				 {id: '3', title: 'JS Advance', isDone: false},
			]
	 }
})

test('correct task should be removed from correct array', () => {

	 const action = removeTasksAC('todoListId2', '2')
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'].length).toBe(5)
	 expect(endState['todoListId2'].length).toBe(2)
})

test('correct task should be added to correct array', () => {
	 const action = addTasksAC('todoListId2', 'My Team')
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'].length).toBe(5)
	 expect(endState['todoListId2'][0].title).toBe('My Team')
	 expect(endState['todoListId2'].length).toBe(4)
})

test('status of task should be changed', () => {

	 const action = changeTaskStatus('todoListId2', '2', false)
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'][1].isDone).toBeTruthy()
	 expect(endState['todoListId2'][1].isDone).toBeFalsy()
})

test('title of task should be changed', () => {

	 const action = changeTaskTitleAC('todoListId2', '2', 'Angular')
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId2'][1].title).toBe('Angular')
	 expect(endState['todoListId2'][2].title).toBe('JS Advance')

})

test('new array should be added when new todolist is added', () => {

	 const action = addTodolistAC('no matter')
	 const endState = tasksReducer(startState, action)

	 const keys = Object.keys(endState)
	 const newKey = keys.find(k => k !== 'todoListId1' && k !== 'todoListId2')
	 if (!newKey) {
			throw Error('new key should add')
	 }
	 expect(keys.length).toBe(3)
	 expect(endState[newKey]).toStrictEqual([])
})

test('property with todolist should be deleted', () => {

	 const action = removeTodolistAC('todoListId2')
	 const endState = tasksReducer(startState, action)
	 const keys = Object.keys(endState)
	 expect(keys.length).toBe(1)
	 expect(endState['todoListId2']).toBeUndefined()

})