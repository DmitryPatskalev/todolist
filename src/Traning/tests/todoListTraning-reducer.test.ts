import {v1} from "uuid";
import {FilterTasksType, TodoListsType} from "../Tasks";
import {
	 AddTodoListAC,
	 ChangeTodoListAC,
	 ChangeTodoListFilterAC,
	 RemoveTodoListAC,
	 todoListTraningReducer
} from "./todoListTraning-reducer";

test('correct todolist should be removed', () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const startState: Array<TodoListsType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What You Learn', filter: 'All'}
	 ]
	 const endState = todoListTraningReducer(startState, RemoveTodoListAC(todoListID1))

	 expect(endState.length).toBe(1)
	 expect(endState[0].id).toBe(todoListID2)
})

test('correct todolist should be added', () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 let newTodolistTitle = 'New Todolist'

	 const startState: Array<TodoListsType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What You Learn', filter: 'All'}
	 ]
	 const endState = todoListTraningReducer(startState, AddTodoListAC(newTodolistTitle))

	 expect(endState.length).toBe(3)
	 expect(endState[2].title).toBe(newTodolistTitle)
	 expect(endState[2].filter).toBe('All')
})

test('correct todolist change its name', () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 let newTodolistTitle = 'New Todolist'


	 const startState: Array<TodoListsType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What You Learn', filter: 'All'}
	 ]
	 const endState = todoListTraningReducer(startState, ChangeTodoListAC(todoListID2, newTodolistTitle))
	 expect(endState[0].title).toBe('What I Learn')
	 expect(endState[1].title).toBe(newTodolistTitle)

})

test('correct filter of todolist should be changed', () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 let newFilter: FilterTasksType = 'Completed'


	 const startState: Array<TodoListsType> = [
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What You Learn', filter: 'All'}
	 ]
	 const endState = todoListTraningReducer(startState, ChangeTodoListFilterAC(todoListID2, newFilter))

	 expect(endState[0].filter).toBe('All')
	 expect(endState[1].filter).toBe(newFilter)

})