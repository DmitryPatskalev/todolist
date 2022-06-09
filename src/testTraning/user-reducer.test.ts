import {userReducer} from "./user-reducer";

test('user reducer should increment only age', () => {
	 const startState = {age: 38, childrenCount: 1, name: 'Dima'}

	 const endState = userReducer(startState, {type: 'INCREMENT AGE'})

	 expect(endState.age).toBe(39)
	 expect(endState.childrenCount).toBe(1)

})

test('user reducer should increment only childrenCount', () => {
	 const startState = {age: 38, childrenCount: 1, name: 'Dima'}
	 const endState = userReducer(startState, {type: 'INCREMENT CHILDREN COUNT'})

	 expect(endState.age).toBe(38)
	 expect(endState.childrenCount).toBe(2)

})
test('user reducer should change name', () => {
	 const startState = {age: 38, childrenCount: 1, name: 'Dima'}
	 const newName = 'Danik'
	 const endState = userReducer(startState, {
			type: 'CHANGE NAME',
			newName: newName
	 })

	 expect(endState.age).toBe(38)
	 expect(endState.childrenCount).toBe(1)
	 expect(endState.name).toBe(newName)

})