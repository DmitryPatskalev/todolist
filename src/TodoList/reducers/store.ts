import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./task-reducer";
import {todoListReducer} from "./todoList-reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
	 todoLists: todoListReducer,
	 tasks: tasksReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))