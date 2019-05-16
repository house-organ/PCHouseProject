/********************************
 * @file: home page
 * @desc: overview react multi page app
 *******************************/

import React, { Component } from "react";
import { Select,DatePicker,InputNumber,Card  ,Comment, Tooltip,Avatar, Icon ,Form, Button, List, Input  } from 'antd';
import Header from "component/header";
import Footer from "component/footer"
import moment from 'moment';

const TextArea = Input.TextArea;

const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const tabListNoTitle = [
	{
		key: 'article',
		tab: 'article',
	},
	{
		key: 'app',
		tab: 'app',
	},
	{
		key: 'project',
		tab: 'project',
	},
];

const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={props => <Comment {...props} />}
	/>
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
			</Button>
		</Form.Item>
	</div>
);

const contentListNoTitle = {
	article: <p>article content</p>,
	app: <p>app content</p>,
	project: <p>project content</p>,
};
export default class App extends Component {
	state={
		title:'555',
		noTitleKey: 'app',
		comments: [
			{
				author: 'Han Solo',
				avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				content: <p>111</p>,
				datetime: '2019-05-16',
			},
			{
				author: 'Han Solo',
				avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				content: <p>222</p>,
				datetime: '2019-05-17',
			}
		],
		submitting: false,
		value: '',
		likes: 0,
		dislikes: 0,
		action: null,
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
	};

	handleChangesss = e => {
		this.setState({
			value: e.target.value,
		});
	};


	handleChange=(value)=> {
		console.log(`selected ${value}`);
	}
	componentWillMount() {
		let title = this.state.title
		console.log("title--------->",title)
	}
	onChange=(value)=>{
		console.log('changed', value);
	}
	onTabChange = (key, type) => {
		console.log(key, type);
		this.setState({ [type]: key });
	};
	like = () => {
		this.setState({
			likes: 1,
			dislikes: 0,
			action: 'liked',
		});
	};

	dislike = () => {
		this.setState({
			likes: 0,
			dislikes: 1,
			action: 'disliked',
		});
	};

	render() {
		const { comments, submitting, value } = this.state;
		const { likes, dislikes, action } = this.state;
		const actions = [
			<span>
        <Tooltip title="Like">
          <Icon
			  type="like"
			  theme={action === 'liked' ? 'filled' : 'outlined'}
			  onClick={this.like}
		  />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
			<span>
        <Tooltip title="Dislike">
          <Icon
			  type="dislike"
			  theme={action === 'disliked' ? 'filled' : 'outlined'}
			  onClick={this.dislike}
		  />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
			<span>Reply to</span>,
		];
		return (
			<div>
				<Header />
				<div className="main index column is-8">
					index
					<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="disabled" disabled>Disabled</Option>
						<Option value="Yiminghe">yiminghe</Option>
					</Select>
					<DatePicker />
					<MonthPicker  placeholder="Select Month" />
					<RangePicker
						disabled
					/>
					<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
					<hr></hr>
					<div className="card-box">
						<Card title="Default size card" extra={<a href="#">More</a>}>
							<p>Card content</p>
							<p>Card content</p>
							<p>Card content</p>
						</Card>
					</div>
					<hr></hr>
					<Card
						style={{ width: '100%' }}
						title="Default size card"
						tabList={tabListNoTitle}
						activeTabKey={this.state.noTitleKey}
						onTabChange={key => {
							this.onTabChange(key, 'noTitleKey');
						}}
					>
						{contentListNoTitle[this.state.noTitleKey]}
					</Card>
					<hr></hr>
					<Card size="small" title="Small size card"  >
						<Comment

							avatar={
								<Avatar
									src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
									alt="Han Solo"
								/>
							}
							content={
								<Editor
									onChange={this.handleChangesss}
									onSubmit={this.handleSubmit}
									submitting={submitting}
									value={value}
								/>
							}
						/>
						{comments.length > 0 && <CommentList comments={comments} />}
					</Card>
				</div>
				<Footer />
			</div>
			
		);
	}
}
