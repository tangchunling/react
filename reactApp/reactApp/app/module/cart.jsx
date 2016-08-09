import React from 'react';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';

const Cart = React.createClass({
   render() {
      return (
         <div>
            <div className="cart-item">
				<div className="item-title">
					<span id="shopname"></span>
					<div className="item-delete" id="btndeleteall">
						<img src="../resource/images/icon_recbin.png" alt="" />
					</div>
				</div>
				<div className="cart-list">
					<ul>
						
						购物车
						
					</ul>
				</div>
			</div>
			<div className="settle-container">
				<div className="settle-content">
					<div className="settle-content-left">
						<input type="checkbox" name="" id="all" value="" style={{marginRight:'4'}}/>全选
					</div>
					<div className="settle-content-middle">
						<div className="settle-sum">
							<p>总价：<span id="total">0</span></p>
						</div>
					</div>
					<div className="settle-content-right" id="btnbuy">
						<span>结算(<span id="total-num">0</span>)</span>
					</div>
				</div>
			</div>
         </div>
      );
   }
})

export default Cart;
