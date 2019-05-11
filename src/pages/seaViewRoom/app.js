/********************************
 * @file: market seaViewRoom 海景房
 * @desc: react-redux seaViewRoom list
 *******************************/

import React from "react";
import {
	Comment, Avatar, Form, Tooltip,Button, List, Input,
} from 'antd';
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

import moment from 'moment';

const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={props => <Comment {...props} />}
	/>
);

const Editor = ({
					onChange, onSubmit, submitting, value,
				}) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button
				htmlType="submit"
				loading={submitting}
				onClick={onSubmit}
				type="primary"
			>
				Add Comment
			</Button>
		</Form.Item>
	</div>
);

const after = [
	{
		title:'1',
		id:'1',
		text:'gggggggggggg'
	}
]






class App extends React.Component {
	state = {
		comments: [],
		submitting: false,
		value: '',
	}
	constructor(props){
		super(props);
		// this.state={}
	}
	handleSubmit = () => {
		if (!this.state.value) {
			return;
		}

		this.setState({
			submitting: true,
		});

		setTimeout(() => {
			this.setState({
				submitting: false,
				value: '',
				comments: [
					{
						author: 'Han Solo',
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{this.state.value}</p>,
						datetime: moment().fromNow(),
					},
					...this.state.comments,
				],
			});
		}, 1000);
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	}

	render() {
		const { comments, submitting, value } = this.state;
		return (
			<div>
				<Header />
				<div className="main todo column is-8">
					seaViewRoom
					{comments.length > 0 && <CommentList comments={comments} />}
					<Comment
						avatar={(
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="Han Solo"
							/>
						)}
						content={(
							<Editor
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								submitting={submitting}
								value={value}
							/>
						)}
					/>
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

