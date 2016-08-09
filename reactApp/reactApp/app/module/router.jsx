import React from 'react';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';


const Index = React.createClass({
   render() {
   	  let shopId = this.props.params.shopId;
   	  let index = '/app/index/'+shopId;
   	  let cart = '/app/cart/'+shopId;
   	  let find = '/app/find/'+shopId;
   	  let personal = '/app/personal/'+shopId;
      return (
      	<div>
         	<div className="mui-content" >
	          {this.props.children}
	        </div>
	        <nav className="index-bar index-bar-tab">	
				<Link className="index-tab-item" activeClassName="index-active" to={index}>
					<span className="index-icon nav-logo index"></span>
					<span className="index-tab-label">首页</span>
				</Link>
				<Link className="index-tab-item" activeClassName="index-active" to={cart}>
					<span className="index-icon nav-logo cart"></span>
					<span className="index-tab-label">购物车</span>
				</Link>
				<Link className="index-tab-item" activeClassName="index-active" to={find}>
					<span className="index-icon nav-logo find"></span>
					<span className="index-tab-label">发现</span>
				</Link>
				<Link className="index-tab-item" activeClassName="index-active" to={personal}>
					<span className="index-icon nav-logo my"></span>
					<span className="index-tab-label">我</span>
				</Link>	
			</nav>
	    </div>    
	      
      );
   }
});
 
export default Index;

