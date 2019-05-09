
import React, { Component } from "react";
import "./index.scss";

// import "./../antd/antd.scss"
import logo from "src/pages/react-multi.png"



export default class Nav extends Component {

    render() {
        return (
            <div className="menu columns">
                <div className="column is-2 logo"><img  src={logo} /></div>
                <div className="columns column nav is-8">
                    <div className="nav-item"><a href= "/">Home1111111111</a></div>

                    <div className="nav-item"><a href= "/newRoom">newRoom</a></div>
                    <div className="nav-item"><a href= "/seaViewRoom">seaViewRoom</a></div>
                    <div className="nav-item"><a href= "/villa">villa</a></div>
                    <div className="nav-item"><a href= "/market">market</a></div>
                    <div className="nav-item"><a href= "/about">about</a></div>
                    <div className="nav-item"><a href= "/todo">Todo</a></div>

                    <div className="nav-item"><a href= "https://github.com/leinov/webpack-react-multi-page/">Github</a></div>
                </div>
                <div className="column is-2"></div>
            </div>
        );
    }
}
