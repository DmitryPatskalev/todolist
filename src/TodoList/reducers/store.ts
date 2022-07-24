import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionTaskType, tasksReducer} from "./task-reducer";
import {ActionTodoListType, todoListReducer} from "./todoList-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
	 todoLists: todoListReducer,
	 tasks: tasksReducer
})

// 1. что возращ функ
// 2. тип всего стейта
// 3. extra-args (unknown)
// 4. all action type

export type RootActionsType = ActionTodoListType | ActionTaskType

export type AppRootState = ReturnType<typeof rootReducer>

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, RootActionsType>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))