/********************************
 * @file: home page
 * @desc: overview react multi page app
 *******************************/

import React, { Component } from "react";
import { Select } from 'antd';
import Header from "component/header";
import Footer from "component/footer"

const Option = Select.Option;

export default class App extends Component {
	state={
		title:'555'
	}
	handleChange=(value)=> {
		console.log(`selected ${value}`);
	}
	componentWillMount() {
		let title = this.state.title
		console.log("title--------->",title)
	}

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
				</div>
				<Footer />
			</div>
			
		);
	}
}
