/********************************
 * @file: city page  别墅
 * @desc: react-redux city list
 *******************************/

import React from "react";
import { Table, Button ,Carousel,Mention, Form, } from 'antd';
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
const { toContentState, getMentions } = Mention;
const FormItem = Form.Item;
const createForm = Form.create;








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
		cityData:[
			{src:"src/pages/city/images/city-1.jpg",name:"上海",other:"据说这是魔都"},
			{src:"src/pages/city/images/city-1.jpg",name:"北京",other:"据说这是魔都"}
		],
		carouselData:[
			{src:"src/pages/city/images/city-1.jpg",name:"上海",other:"据说这是魔都"},
			{src:"src/pages/city/images/city-1.jpg",name:"北京",other:"据说这是魔都"},
			{src:"src/pages/city/images/city-1.jpg",name:"广州",other:"据说这是魔都"},
			{src:"src/pages/city/images/city-1.jpg",name:"深圳",other:"据说这是魔都"},
		],
		banList:[
			{id:'1',src:'src/public/images/ban-1.jpg',title:'广告1'},
			{id:'2',src:'src/public/images/ban-1.jpg',title:'广告1'},
			{id:'3',src:'src/public/images/ban-1.jpg',title:'广告1'},
			{id:'4',src:'src/public/images/ban-1.jpg',title:'广告1'},
		],
		initValue: toContentState('@afc163'),
	};
	constructor(props){
		super(props);
		// this.state={}
	}
	componentWillMount() {
		// this.showMsg.error("网络异常,请稍后再试 ");
		NotificationMixin.success("成功")
		// this.fetch()
		console.log("22222",this.state.cityData)
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

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((errors, values) => {
			if (errors) {
				console.log('Errors in the form!!!');
				return;
			}
			console.log('Submit!!!');
			console.log(values);
		});
	};

	checkMention = (rule, value, callback) => {
		const { getFieldValue } = this.props.form;
		const mentions = getMentions(getFieldValue('mention'));
		if (mentions.length < 2) {
			callback(new Error('More than one must be selected!'));
		} else {
			callback();
		}
	};
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
		const cityList = this.state.cityData.map(item=>{
			return (<div className="city-list-box" key={item.name}><div className="img"><img src={item.src} /></div> <div className="city-explain"><div className="city-explain-box"><span>{item.name}</span><div>{item.other}</div></div></div></div>)
		})
		const carouselList = this.state.banList.map((item,index)=>{
			return (
				<div className="carousel-img-box" key={item.id}>
					<h3><img src={item.src} /></h3>
				</div>
			)
		})
		const { getFieldDecorator, getFieldValue } = this.props.form;
		return (
			<div>
				<Header />
				<div className="carousel-box">
					<Carousel effect="fade" autoplay>
						{carouselList}
					</Carousel>
				</div>
					<div className="main todo column is-8">


						<div className="city-seach-box">
							<Form layout="inline">
								<FormItem
									// id="control-mention"
									// label="Top coders"
									// labelCol={{ span: 6 }}
									// wrapperCol={{ span: 16 }}
								>
									{getFieldDecorator('mention', {
										rules: [{ validator: this.checkMention }],
										initialValue: this.state.initValue,
									})(
										<Mention
											style={{width:'900px',height:'80px',lineHeight:'70px'}}
											defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
										/>,
									)}
								</FormItem>
								<FormItem
									// wrapperCol={{ span: 14, offset: 6 }}
								>
									<Button type="primary" className="seach-btn"  icon="search" onClick={this.handleSubmit}>
									</Button>
								</FormItem>
							</Form>
						</div>
						<div className="city-list">
							{cityList}
						</div>
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


//
// export default connect(
// 	mapStatesToProps
// )(App);
//
//
// const FormDemo = Form.create()(App);
export default App = Form.create({})(connect(mapStatesToProps)(App));
//
// App = createForm()(App);
// export default connect(
// 	mapStatesToProps
// )(App);