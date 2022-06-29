import React from 'react';
import {Provider} from "react-redux";

// import AppWithRedux from "./TodoList/AppWithRedux";
// import {store} from "./TodoList/reducers/store";


import AppTraningRedux from "./Traning/AppTraningRedux";
import {store} from "./Traning/reducers/store";


function App() {
	 return <div>
			{/*<Provider store={store}>*/}
			{/*	 <AppWithRedux/>*/}
			{/*</Provider>*/}


			<Provider store={store}>
				 <AppTraningRedux/>
			</Provider>

	 </div>

}

export default App;
