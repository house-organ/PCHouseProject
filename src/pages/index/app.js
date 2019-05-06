/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import {Select } from 'antd'
import Nav from "component/nav";
import Footer from "component/footer"

const Option = Select.Option;
export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main index column is-8">
					index-00100
					<Select defaultValue="lucy" style={{ width: 120 }} >
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
