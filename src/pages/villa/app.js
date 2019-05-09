/********************************
 * @file: villa page  别墅
 * @desc: react-redux villa list
 *******************************/

import React from "react";
import { Table, Button } from 'antd';
import {connect} from "react-redux";
import axios from "../../axios";
import utils from 'src/utils'
import Footer from "component/footer"
import NotificationMixin from '../../component/notification';
import {
	addTodo, 
	toggleTodo,
	deleteTodo
	} from "store/action/todoAction";
import {
	filtAction,
	filterTodo
} from 'store/action/filtAction'
import Header from "component/header";









const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}


class App extends React.Component {

	state = {
		data: data, // Check here to configure the default column
	};
	constructor(props){
		super(props);
		this.state={}
	}
	componentWillMount() {
		// this.showMsg.error("网络异常,请稍后再试 ");
		NotificationMixin.success("成功")
		this.fetch()
	}

	fetch=()=>{
		axios.get("general/all",null,
			result=> {
				console.log("控制面板--------->",result.result)
				// let obj = result.result ||[];
				// let data = []
				// for (let i in obj) {
				// 	let o = {};
				// 	o[i] = obj[i];
				// 	data.push(o)
				// }
				// console.log("data",data)

				// this.setState({data:data ||[]})
			},
			result=> {

			}
		);
	}
	render() {
		const columns = [
			{ title: '编号',dataIndex: 'name', key: 'id', width: '6%'},
			{ title: '内容库名称', dataIndex: 'age', key: 'title', width: '25%',  },
			{ title: '公司名称',  dataIndex: 'address',key: 'companyid', width: '25%',
				// render: (text, record) => {
				//     return (record['companyid'] && companyList &&  companyList[record['companyid']])
				// }
			},
			// { title: '状态', key: 'state', width: '10%',
			// 	render: (text, record) => {
			// 		return (record.state===0 ? '启用 ':'未启用')
			// 	}
			// },
			{ title: '操作', key: '#', width: '20%',
				// render: (text, record) => {
				//     return (
				//         <div>
				//             <Button type="primary" onClick={this.addOrUpdate.bind(this,record)}>修改</Button>
				//             <Popconfirm placement="topRight" title={"您确定要删除该数据吗?"} onConfirm={this.handleClose.bind(this,record)} okText="确定" cancelText="取消">
				//                 <Button type="primary" style={{marginLeft: "10px"}}>删除</Button>
				//             </Popconfirm>
				//         </div>
				//     )
				// }
			}
		];
		return (
			<div>
				<Header />
				<div className="main todo column is-8">
					villa

					<Table columns={columns} dataSource={data} size="small" rowKey={(record) => record.key} />
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStatesToProps = (state) => ({
	todoList: filterTodo(state.todoList,state.fiterState),
	fiterState: state.fiterState,
	todoCopy:state.todoList
});
 
export default connect(
	mapStatesToProps
)(App);

