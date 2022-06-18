import {v1} from "uuid";
import {
	 AddTodoListAC,
	 ChangeTodoListAC,
	 ChangeTodoListFilterAC,
	 RemoveTodoListAC,
	 todoListTraningReducer
} from "./todoListTraning-reducer";
import {FilterTaskType, TodoListType} from "../Tasks";

test('correct todolist should be removed', () => {

	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const startState: Array<TodoListType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ]
	 const endState = todoListTraningReducer(startState, RemoveTodoListAC(todoListID1))

	 expect(startState[0].id).toBe(todoListID1)
	 expect(startState.length).toBe(2)
	 expect(endState.length).toBe(1)
})

test('correct todolist should be added', () => {

	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const newTitle = 'New Todolist'


	 const startState: Array<TodoListType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ]
	 const endState = todoListTraningReducer(startState, AddTodoListAC(newTitle))

	 expect(startState.length).toBe(2)
	 expect(endState[2].title).toBe('New Todolist')
	 expect(endState.length).toBe(3)

})

test('change todolist title', () => {

	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const newTitle = 'New Todolist'


	 const startState: Array<TodoListType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ]
	 const endState = todoListTraningReducer(startState, ChangeTodoListAC(todoListID1, newTitle))
	 expect(startState[0].title).toBe('What I Learn')
	 expect(endState[0].title).toBe('New Todolist')
	 expect(endState[0].filter).toBe('All')

})

test('change todolist filter', () => {

	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const newFilter: FilterTaskType = 'Completed'

	 const startState: Array<TodoListType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ]
	 const endState = todoListTraningReducer(startState, ChangeTodoListFilterAC(todoListID2, newFilter))

	 expect(startState[0].filter).toBe('All')
	 expect(endState[1].filter).toBe(newFilter)


})