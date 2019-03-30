import React from 'react';

import {HashRouter as Router , Route , Switch , Link,Redirect} from 'react-router-dom';
import Bundle from './Bundle';
//页面
import Home from 'bundle-loader?lazy&name=home!../pages/Home/Home';
import Login from 'bundle-loader?lazy&name=home!../pages/Login';
import page404 from 'bundle-loader?lazy&name=page404!../component/404';
import Loading from '../component/Loading';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);
 
const getRouter = () =>(
	<Router>
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/Home/List" push />} />  
			<Route path="/Home" component={createComponent(Home)} />
			<Route path="/404" component={createComponent(page404)}/>
			<Route path="/Login" component={createComponent(Login)}/>
		</Switch>
	</Router>
);

export default getRouter;
