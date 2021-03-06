import React from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import App from '../App.js'
import Login from '../modules/login'
import Retrieve from '../modules/retrieve'
// import Home from '../page/modules/home'
// import NoFind from '../page/modules/noFind'
// import UserManage from '../page/modules/userCore/userManage'
// import PrivilegeManage from '../page/modules/userCore/privilegeManage'
// import MenuManage from '../page/modules/userCore/menuManage'
// import WebsiteSetup from '../page/modules/websiteSetup'
// import MenuManageEditModal from '../page/modules/userCore/menuManage/editModal'

export default class AdminRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" exact={true} component={Login} />
                        <Route path="/retrieve" exact={true} component={Retrieve} />

                        {/*<Route path="/" render={() =>*/}
                            {/*<Index>*/}
                                {/*<Switch>*/}
                                    {/*<Route path="/home"  component={Home}/>*/}
                                    {/*<Route path="/userCore/userManage" component={UserManage}/>*/}
                                    {/*<Route path="/userCore/privilegeManage" component={PrivilegeManage}/>*/}
                                    {/*<Route path="/userCore/menuManage" exact component={MenuManage}/>*/}
                                    {/*<Route path="/userCore/menuManage/editModal/:id?" component={MenuManageEditModal}/>*/}
                                    {/*<Route path="/websiteSetup" exact component={WebsiteSetup}/>*/}
                                    {/*/!*<Route path="/userCore/menuManage" render={() =>*!/*/}
                                    {/*/!*<Switch>*!/*/}
                                    {/*/!*<Route path="/userCore/menuManage" component={MenuManage}/>*!/*/}
                                    {/*/!*<Route path="/userCore/menuManage/editModal" component={MenuManageEditModal}/>*!/*/}
                                    {/*/!*</Switch>*!/*/}
                                    {/*/!*}/>*!/*/}
                                    {/*<Route component={NoFind} />*/}
                                {/*</Switch>*/}
                            {/*</Index>*/}
                        {/*} />*/}
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}