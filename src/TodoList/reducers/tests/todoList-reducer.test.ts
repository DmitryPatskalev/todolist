import {v1} from "uuid";
import {
	 addTodolistAC,
	 changeTodolistAC,
	 changeTodoListFilterAC,
	 removeTodolistAC,
	 TodolistDomainType,
	 todoListReducer
} from "../todoList-reducer";


let todoListId1 = v1()
let todoListId2 = v1()
let startState: Array<TodolistDomainType>

beforeEach(() => {
	 todoListId1 = v1()
	 todoListId2 = v1()
	 startState = [
			{id: todoListId1, title: 'What I learn', filter: 'All', addedData: '', order: 0},
			{id: todoListId2, title: 'What to buy', filter: 'All', addedData: '', order: 0},
	 ]
})

test('correct todoList should be removed', () => {
	 const endState = todoListReducer(startState, removeTodolistAC(todoListId1))

	 expect(endState.length).toBe(1)
	 expect(endState[0].id).toBe(todoListId2)
})

test('correct todoList should be added', () => {
	 const newTodolist = 'New Todolist'
	 const endState = todoListReducer(startState, addTodolistAC(newTodolist))

	 expect(endState[0].title).toBe('New Todolist')
	 expect(endState[2].title).toBe('What to buy')
	 expect(endState.length).toBe(3)
	 expect(endState[0].filter).toBe('All')
})

test('correct todoList should change its name', () => {
	 const newTodolist = 'New Todolist'
	 const endState = todoListReducer(startState, changeTodolistAC(todoListId2, newTodolist))

	 expect(endState[0].title).toBe('What I learn')
	 expect(endState[1].title).toBe(newTodolist)
})

test('correct filter of todolist should be changed', () => {
	 const newFilter = 'Completed'
	 const endState = todoListReducer(startState, changeTodoListFilterAC(todoListId1, newFilter))

	 expect(endState[0].filter).toBe(newFilter)
	 expect(endState[1].filter).toBe('All')
})