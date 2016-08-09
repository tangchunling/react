import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, Redirect, StateMixin, IndexRoute} from 'react-router';

import './style/common.css';
import './style/index.css';


import Index from './router.jsx';
import Cart from './Cart.jsx';
import App from './App.jsx';
import Find from './Find.jsx';
import Personal from './Personal.jsx';
import ListContent from './ListContent.jsx';
import Product from './Product.jsx';

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

ReactDOM.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Roots}>
	    	<Route path="app/" component={Index}>
	    	  <Route path="index/:shopId" component={App}/>
			  <Route path="cart/:shopId" component={Cart}/>
			  <Route path="find/:shopId" component={Find}/>
			  <Route path="personal/:shopId" component={Personal}/>
			  <Route path="list/:shopId" component={ListContent}/>
		    </Route>
		    <Route path="product/:shopId/:itemId" component={Product}/>
		</Route>  
	</Router>, document.getElementById('app')); 