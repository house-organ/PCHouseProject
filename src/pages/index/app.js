/********************************
 * @file: home page
 * @desc: overview react multi page app
 *******************************/

import React, { Component } from "react";
import { Select,DatePicker,InputNumber,Card    } from 'antd';
import Header from "component/header";
import Footer from "component/footer"

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

const contentListNoTitle = {
	article: <p>article content</p>,
	app: <p>app content</p>,
	project: <p>project content</p>,
};
export default class App extends Component {
	state={
		title:'555',
		noTitleKey: 'app',
	}
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

	render() {
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
				</div>
				<Footer />
			</div>
			
		);
	}
}
