import {addTasksAC, removeTaskAC, setTaskAC, tasksReducer, updateTaskAC} from "../task-reducer";
import {addTodolistAC, removeTodolistAC, setTodolistAC} from "../todoList-reducer";
import {TaskPriorities, TaskStatuses} from "../../../stories/api/TodolistsAPI";
import {TaskStateType} from "../../AppWithRedux";

let startState: TaskStateType = {}

beforeEach(() => {
	 startState = {
			'todoListId1': [
				 {
						id: '1', title: 'HTML&CSS', status: TaskStatuses.New,
						todoListId: 'todoListId1',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '2', title: 'JS/TS', status: TaskStatuses.New,
						todoListId: 'todoListId1',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '3', title: 'React', status: TaskStatuses.Completed,
						todoListId: 'todoListId1',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '4', title: 'C#/C++', status: TaskStatuses.Completed,
						todoListId: 'todoListId1',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '5', title: 'Python', status: TaskStatuses.New,
						todoListId: 'todoListId1',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
			],
			'todoListId2': [
				 {
						id: '1', title: 'React Book', status: TaskStatuses.New,
						todoListId: 'todoListId2',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '2', title: 'Python Algoritms', status: TaskStatuses.New,
						todoListId: 'todoListId2',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
				 {
						id: '3', title: 'JS Advance', status: TaskStatuses.Completed,
						todoListId: 'todoListId2',
						startDate: '',
						deadline: '',
						addedDate: '',
						order: 0,
						priority: TaskPriorities.Low,
						description: ''
				 },
			]
	 }
})

test('correct task should be removed from correct array', () => {
	 const action = removeTaskAC('todoListId2', '2')
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'].length).toBe(5)
	 expect(endState['todoListId2'].length).toBe(2)
})

test('correct task should be added to correct array', () => {
	 const action = addTasksAC({
			todoListId: 'todoListId2',
			title: 'new title',
			status: TaskStatuses.New,
			addedDate: '',
			deadline: '',
			description: '',
			order: 0,
			priority: 0,
			startDate: '',
			id: 'exist'
	 })
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'].length).toBe(5)
	 expect(endState['todoListId2'][0].title).toBe('new title')
	 expect(endState['todoListId2'].length).toBe(4)
})

test('status of task should be changed', () => {
	 const action = updateTaskAC('todoListId2', '2', {status: TaskStatuses.New})
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId1'][1].status).toBeFalsy()
	 expect(endState['todoListId2'][1].status).toBeFalsy()
})

test('title of task should be changed', () => {
	 const action = updateTaskAC('todoListId2', '2', {title: 'Angular'})
	 const endState = tasksReducer(startState, action)

	 expect(endState['todoListId2'][1].title).toBe('Angular')
	 expect(endState['todoListId2'][2].title).toBe('JS Advance')
})

test('new array should be added when new todolist is added', () => {
	 const action = addTodolistAC({
			id: '1651fv1fd6v1dfv',
			title: 'New todolist',
			order: 0,
			addedData: ''
	 })
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

test('empty arrays should be added when we set todolist', () => {
	 const action = setTodolistAC([
			{id: '1', title: 'title1', order: 0, addedData: ''},
			{id: '2', title: 'title2', order: 1, addedData: ''},
	 ])
	 const endState = tasksReducer({}, action)
	 const keys = Object.keys(endState)
	 expect(keys.length).toBe(2)
	 expect(endState['1']).toStrictEqual([])
	 expect(endState['2']).toStrictEqual([])
})
test('task should be added to todolist', () => {
	 const action = setTaskAC(startState['todoListId1'], 'todoListId1')
	 const endState = tasksReducer({
			'todoListId2': [],
			'todoListId1': [],
	 }, action)
	 expect(endState['todoListId1'].length).toBe(5)
	 expect(endState['todoListId2'].length).toBe(0)
})