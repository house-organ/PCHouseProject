/********************************
 * @file: about page 关于我们
 * @desc: react-redux about list
 *******************************/

import React from "react";
import {connect} from "react-redux";
import utils from 'src/utils'


import {
	addTodo, 
	toggleTodo,
	deleteTodo
	} from "store/action/todoAction";
import {
	filtAction,
	filterTodoh
} from 'store/action/filtAction'


class App extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}


	render() {
		return (
			<div>
				{this.props.children}
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

