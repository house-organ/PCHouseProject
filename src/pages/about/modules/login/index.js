import React from 'react'
import {Link} from "react-router-dom"
import './index.scss'
import Header from "component/header";
import Footer from "component/footer"
export default class Login extends React.Component{
    render() {
        return(
            <div>
                <Header />
                login
                <a href="#/retrieve">找回</a>
                <Link to="retrieve">找回2</Link>
                <Footer />
            </div>
        )
    }
}