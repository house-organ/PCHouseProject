/********************************
 * @file: newRoom page 新房
 * @desc: react-redux newRoom list
 *******************************/

import React from "react";
import { Carousel } from 'antd';
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
import "./index.scss"

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
					newRoom
					<Carousel autoplay>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
					</Carousel>
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

