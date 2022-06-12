import {v1} from "uuid";
import {
	 AddTodolistAC,
	 ChangeTodolistAC,
	 ChangeTodoListFilterAC,
	 RemoveTodolistAC,
	 todoListReducer
} from "./todoList-reducer";
import {TodoListsType} from "../Tasks";

test('correct todoList should be removed', () => {
	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const startState: Array<TodoListsType> = [
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'},
	 ]
	 const endState = todoListReducer(startState, RemoveTodolistAC(todoListId1))

	 expect(endState.length).toBe(1)
	 expect(endState[0].id).toBe(todoListId2)
})
test('correct todoList should be added', () => {
	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const newTodolist = 'New Todolist'

	 const startState: Array<TodoListsType> = [
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'},
	 ]
	 const endState = todoListReducer(startState, AddTodolistAC(newTodolist))

	 expect(endState[0].title).toBe('What I learn')
	 expect(endState[2].title).toBe('New Todolist')
	 expect(endState.length).toBe(3)
	 expect(endState[2].filter).toBe('Completed')
})

test('correct todoList should change its name', () => {
	 const todoListId1 = v1()
	 const todoListId2 = v1()
	 const newTodolist = 'New Todolist'

	 const startState: Array<TodoListsType> = [
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'},
	 ]
	 const endState = todoListReducer(startState, ChangeTodolistAC(todoListId2, newTodolist))

	 expect(endState[0].title).toBe('What I learn')
	 expect(endState[1].title).toBe(newTodolist)

})

test('correct filter of todolist should be changed', () => {
	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const newFilter = 'Completed'
	 
	 const startState: Array<TodoListsType> = [
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'},
	 ]
	 const endState = todoListReducer(startState, ChangeTodoListFilterAC(todoListId1, newFilter))

	 expect(endState[0].filter).toBe(newFilter)
	 expect(endState[1].filter).toBe('All')

})