import React from "react";
import AppWithRedux from "../TodoList/AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
	 title: 'AppWithReduxComponent',
	 component: AppWithRedux,
	 decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
	 return <AppWithRedux/>
}