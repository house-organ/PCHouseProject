/********************
 * @file:todo main js
 ********************/

import React from "react";
import ReactDOM from "react-dom";
import Router from './router'
import { Provider } from "react-redux";
import configStore from "store/index.js";
// import App from "./app.js";
import "./index.scss";

const store = configStore();
ReactDOM.render(
	<Provider store={store}>   
		<Router />
	</Provider>, 
	document.getElementById("root"));
