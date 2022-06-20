import {GeneralTodolist} from "../Tasks";
import {
	 addTaskTraningAC,
	 changeTaskStatusTraningAC,
	 changeTaskTitleTraningAC,
	 removeTaskTraningAC,
	 taskTraningReducer
} from "./taskTraning-reducer";

import {addTodoListAC, removeTodoListAC} from "./todoListTraning-reducer";

test('correct task should be removed from correct array', () => {
	 const startState: GeneralTodolist = {
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
	 const action = removeTaskTraningAC('todoListId2', '2')
	 const endState = taskTraningReducer(startState, action)
	 expect(endState['todoListId2'].length).toBe(2)
	 expect(endState['todoListId1'].length).toBe(5)
})
test('correct task should be added to correct array', () => {
	 const startState: GeneralTodolist = {
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
	 const action = addTaskTraningAC('todoListId2', 'Scala')
	 const endState = taskTraningReducer(startState, action)
	 expect(endState['todoListId2'].length).toBe(4)
	 expect(endState['todoListId2'][0].title).toBe('Scala')
})

test('status of task should be changed', () => {
	 const startState: GeneralTodolist = {
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
	 const action = changeTaskStatusTraningAC('todoListId2', '2', false)
	 const endState = taskTraningReducer(startState, action)

	 expect(endState['todoListId2'][1].isDone).toBeFalsy()
	 expect(endState['todoListId1'][1].isDone).toBeTruthy()
})

test('title of task should be changed', () => {
	 const startState: GeneralTodolist = {
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
	 const action = changeTaskTitleTraningAC('todoListId2', '2', 'C++/C#')
	 const endState = taskTraningReducer(startState, action)

	 expect(endState['todoListId2'][1].title).toBe('C++/C#')
	 expect(endState['todoListId2'][1].isDone).toBeTruthy()
})

test('new array should be added when new todolist is added', () => {
	 const startState: GeneralTodolist = {
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
	 const action = addTodoListAC('no matter')
	 const endState = taskTraningReducer(startState, action)

	 const keys = Object.keys(endState)
	 const newKey = keys.find(k => k !== 'todoListId1' && k !== 'todoListId2')
	 if (!newKey) {
			throw Error('new key should add')
	 }
	 expect(keys.length).toBe(3)
	 expect(endState[newKey]).toStrictEqual([])
})

test('property with todolist should be deleted', () => {
	 const startState: GeneralTodolist = {
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
	 const action = removeTodoListAC('todoListId2')
	 const endState = taskTraningReducer(startState, action)
	 const keys = Object.keys(endState)
	 expect(keys.length).toBe(1)
	 expect(endState['todoListId2']).toBeUndefined()

})