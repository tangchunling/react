import React from 'react';
import {imgurl} from '../common/common';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';

const Prolist = React.createClass({
   render() {
   	  let product = "product/10000/"+this.props.list.itemId;
      return (  
        <li>
			<Link to={product}>
				<div className="img">
					
					<img src={ imgurl()+this.props.list.picture }  alt="" />
					<span>销量&nbsp;{this.props.list.sold}</span>
				</div>
				<p>{this.props.list.title}</p>
				<div className="price">
					<span className="salePrice">¥{this.props.list.price}</span>
					<span className="originalPrice">¥{this.props.list.formerPrice}</span>
					<label style={{fontSize: '12',color:'#666'}}>({this.props.list.sku})</label>
				</div>
			</Link>
		</li>  
      );
   }
})

export default Prolist;
