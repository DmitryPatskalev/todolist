import React from 'react';
import AppTraningRedux from "./Traning/AppTraningRedux";
import {Provider} from "react-redux";
import {store} from "./Traning/reducers/store";
import AppWithReducer from "./TodoList/AppWithReducer";


function App() {
	 return <div>
			<AppWithReducer/>


			{/*<Provider store={store}>*/}
			{/*	 <AppTraningRedux/>*/}
			{/*</Provider>*/}

	 </div>

}

export default App;
