
import React, { Component } from "react";
import { Row, Col ,Menu, Icon,Input,Breadcrumb  } from 'antd';
import "./index.scss";


// import "./../antd/antd.scss"
import logo from "src/pages/react-multi.png"
const Search = Input.Search;

export default class Nav extends Component {
    state={
        menuList:[
            {id:'0',key:'city',name:'海南'},
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
            if(item.key==='city'){
                return (<Menu.Item className="city-li" key={item.id}><Icon type="bank" /><a href={"/"+(item.key == 'index' ? ' ':item.key)}>{item.name}</a><Icon className="maen-icon" type="down" /></Menu.Item>)
            }else {
                return (<Menu.Item key={item.id}><a href={"/"+(item.key == 'index' ? ' ':item.key)}>{item.name}</a></Menu.Item>)
            }

        })
        return (
            <div className="header">
                <div  className="header-top">
                    <Row type="flex" justify="start" className="header-box">
                        <Col className="logo-box"><img className="logo" src="src/public/images/logo.png" /></Col>
                        <Col className="header-menu-box">
                            <Menu onClick={this.handleClick} mode="horizontal" className="header-menu">
                                {menu}
                            </Menu>
                        </Col>
                        <Col className="search-box">
                            <Search
                                placeholder="请输入楼盘名称"

                                onSearch={value => console.log(value)}
                            />
                        </Col>
                        <Col className="tel-box">
                            <div className="tel-box-1">
                                <div className="tel-title-1"><img src="src/public/images/tel-icon-1.png"  />咨询热线</div>
                                <div className="tel-title-2">123456789</div>
                            </div>
                            <div className="tel-box-2" style={{display:'none'}}>
                                <img src="src/public/images/tel-icon-1.png"  />0123-123456789
                            </div>
                        </Col>
                    </Row>
                </div>
                <div  className="breadcrumb">
                    <div  className="breadcrumb-box">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>您的位置：</Breadcrumb.Item>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">楼盘信息</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>

            </div>
        );
    }
}
