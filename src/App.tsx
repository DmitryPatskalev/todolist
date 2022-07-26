import React from 'react';
import {Provider} from "react-redux";
import {store} from "./TodoList/reducers/store";
import AppTodoList from "./TodoList/components/AppTodoList";


function App() {
	 return <div>

			<Provider store={store}>
				 <AppTodoList/>
			</Provider>


	 </div>

}

export default App;
