import React ,{Component} from 'react';

import {HashRouter as Router , Route , Switch , Link,Redirect} from 'react-router-dom';
import Bundle from './Bundle';
//页面
import AllComponents from '../pages';
import navRoutes from './navConfig'
import Loading from '../component/Loading';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);
 
export default class CRouter extends Component {
    render() {
        return (
            <Switch>
            	{
            		navRoutes.menus.map(r => {
                        const route = r => {
                            const Component = AllComponents[r.component];
                            return (
                                <Route
                                    key={r.route || r.key}
                                    exact
                                    path={r.route || r.key}
                                    component={createComponent(Component)}
                                />
                            )
                        }
                        return r.component ? route(r) : r.subs.map(r => route(r));
                    })
            	}
				
	        </Switch>
        )
    }
}