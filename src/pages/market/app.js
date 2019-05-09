/********************************
 * @file: market page 楼市
 * @desc: react-redux market list
 *******************************/

import React from "react";
import { Timeline } from 'antd';



import Header from "component/header";
import Footer from "component/footer"
import './index.scss'

export default class App extends React.Component {
	state = {
		data:[
			{id:'1',text:'Create a services site ',time:'2015-09-01'},
			{id:'1',text:'Create a services site ',time:'2016-02-01'},
			{id:'1',text:'Create a services site ',time:'2017-05-01'},
			{id:'1',text:'Create a services site ',time:'2018-06-01'},
			{id:'1',text:'Create a services site ',time:'2019-07-01'},
			{id:'1',text:'Create a services site ',time:'2020-08-01'},
		],
		list:'22'
	}

	constructor(props){
		super(props);
		// this.state={}

	}
	componentWillMount() {
		// console.log("item",this.state.list)
	}

	render() {
		return (
			<div>
				<Header />
				<div className="main todo column is-8 timeline-box">
					market
					<Timeline>
						{
							this.state.data && this.state.data.map((item,index)=>{
								return (<Timeline.Item key={index}>{item.text}<span className="item-time">{item.time}</span></Timeline.Item>)
							})
						}
					</Timeline>
				</div>
				<Footer />
			</div>
		);
	}
}


