import {combineReducers, createStore} from "redux";
import {todoListTraningReducer} from "./todoListTraning-reducer";
import {taskTraningReducer} from "./taskTraning-reducer";


const rootReducer = combineReducers({
	 todoLists: todoListTraningReducer,
	 tasks: taskTraningReducer
})

export type AppRootTraningState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)

