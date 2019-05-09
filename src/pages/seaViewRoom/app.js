/********************************
 * @file: market seaViewRoom 海景房
 * @desc: react-redux seaViewRoom list
 *******************************/

import React from "react";
import {connect} from "react-redux";
import utils from 'src/utils'

import Footer from "component/footer"
import {
	addTodo, 
	toggleTodo,
	deleteTodo
	} from "store/action/todoAction";
import {
	filtAction,
	filterTodoh
} from 'store/action/filtAction'
import Header from "component/header";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}


	render() {
	
		return (
			<div>
				<Header />
				<div className="main todo column is-8">
					seaViewRoom
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStatesToProps = (state) => ({
	// todoList: filterTodo(state.todoList,state.fiterState),
	// fiterState: state.fiterState,
	// todoCopy:state.todoList
});
 
export default connect(
	mapStatesToProps
)(App);

