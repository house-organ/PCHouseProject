
import React, { Component } from "react";
import { Row, Col ,Menu, Icon,Input } from 'antd';
import "./index.scss";


// import "./../antd/antd.scss"
import logo from "src/pages/react-multi.png"
const Search = Input.Search;

export default class Nav extends Component {
    state={
        menuList:[
            {id:'1',key:'index',name:'首页'},
            {id:'2',key:'newRoom',name:'新房'},
            {id:'3',key:'seaViewRoom',name:'海景房'},
            {id:'4',key:'villa',name:'别墅'},
            {id:'5',key:'market',name:'楼市'},
        ]
    }
    handleClick=()=>{

    }
    render() {
        const menu = this.state.menuList.map(item=>{
            return (<Menu.Item key={item.id}><a href={"/"+(item.key == 'index' ? ' ':item.key)}>{item.name}</a></Menu.Item>)
        })
        return (
            <div className="header">
                <Row type="flex" justify="start" className="header-box">
                    <Col className="logo-box"><img className="logo" src="src/public/images/logo.png" /></Col>
                    <Col span={12}>
                        <Menu onClick={this.handleClick} mode="horizontal" className="header-menu">
                            {menu}
                        </Menu>
                    </Col>
                    <Col className="search-box">
                        <Search
                            placeholder="input search text"

                            onSearch={value => console.log(value)}
                        />
                    </Col>
                    <Col className="tel-box"><img src="src/public/images/tel-icon-1.png"  />123456789</Col>
                </Row>
            </div>
        );
    }
}
