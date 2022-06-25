import React from 'react';
import AppTraningRedux from "./Traning/AppTraningRedux";
import {Provider} from "react-redux";
import {store} from "./Traning/reducers/store";

// import Tasks from "./TodoList/Tasks";


function App() {
	 return <div>
			{/*<Tasks/>*/}


			<Provider store={store}>
				 <AppTraningRedux/>
			</Provider>

	 </div>

}

export default App;
