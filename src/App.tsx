import React from 'react';
import AppTraningRedux from "./Traning/AppTraningRedux";
import {Provider} from "react-redux";

import {store} from "./TodoList/reducers/store";
import AppWithRedux from "./TodoList/AppWithRedux";


function App() {
	 return <div>
			<Provider store={store}>
				 <AppWithRedux/>
			</Provider>


			{/*<Provider store={store}>*/}
			{/*	 <AppTraningRedux/>*/}
			{/*</Provider>*/}

	 </div>

}

export default App;
