
import React, { Component } from "react";
import { Row, Col ,Menu, Icon,Input } from 'antd';
import "./index.scss";

// import "./../antd/antd.scss"
import logo from "src/pages/react-multi.png"

const Search = Input.Search;

export default class Nav extends Component {
    state={
        menuList:[
            {id:'1',key:'index',name:'index'},
            {id:'2',key:'newRoom',name:'newRoom'},
            {id:'3',key:'seaViewRoom',name:'seaViewRoom'},
            {id:'4',key:'villa',name:'villa'},
            {id:'5',key:'market',name:'market'},
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
                    <Col><img className="logo" src={logo} /></Col>
                    <Col span={12}>
                        <Menu onClick={this.handleClick} mode="horizontal" className="header-menu">
                            {menu}
                        </Menu>
                    </Col>
                    <Col>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                    <Col>123456789</Col>
                </Row>
            </div>
        );
    }
}
