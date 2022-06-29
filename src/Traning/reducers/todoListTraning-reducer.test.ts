import {v1} from "uuid";
import {
	 addTodoListAC,
	 changeTodoListAC,
	 changeTodoListFilterAC,
	 removeTodoListAC,
	 todoListTraningReducer
} from "./todoListTraning-reducer";
import {FilterTaskType, TodoListType} from "../AppTraningRedux";


let todoListID1 = v1()
let todoListID2 = v1()
let startState: Array<TodoListType>

beforeEach(() => {
	 todoListID1 = v1()
	 todoListID2 = v1()

	 startState = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ]
})

test('correct todolist should be removed', () => {

	 const endState = todoListTraningReducer(startState, removeTodoListAC(todoListID1))

	 expect(startState[0].id).toBe(todoListID1)
	 expect(startState.length).toBe(2)
	 expect(endState.length).toBe(1)
})

test('correct todolist should be added', () => {

	 const newTitle = 'New Todolist'
	 const endState = todoListTraningReducer(startState, addTodoListAC(newTitle))

	 expect(startState.length).toBe(2)
	 expect(endState[0].title).toBe('New Todolist')
	 expect(endState.length).toBe(3)
})

test('change todolist title', () => {

	 const newTitle = 'New Todolist'
	 const action = changeTodoListAC(todoListID1, newTitle)
	 const endState = todoListTraningReducer(startState, action)

	 expect(startState[0].title).toBe('What I Learn')
	 expect(endState[0].title).toBe('New Todolist')
	 expect(endState[0].filter).toBe('All')
})

test('change todolist filter', () => {

	 const newFilter: FilterTaskType = 'Completed'

	 const action = changeTodoListFilterAC(todoListID2, newFilter)
	 const endState = todoListTraningReducer(startState, action)

	 expect(startState[0].filter).toBe('All')
	 expect(endState[1].filter).toBe(newFilter)
})