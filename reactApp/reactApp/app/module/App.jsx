import React from 'react';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';
import {apiurl,imgurl} from './common/common';
import Slider from './slider.jsx';
import Pro from './componets/pro.jsx';

var icon_favorite = require('./images/icon_favorite.png');
var icon_favorite_sel = require('./images/icon_favorites_sel.png');
var icon_qrcode = require('./images/icon_qrcode.png');
var icon_dingwei = require('./images/icon_dingwei.png');
var icon_dianhua = require('./images/icon_dianhua.png');
var icon_tuijian = require('./images/icon_tuijian.png');
	  
console.log(apiurl());
const App =  React.createClass({
	
	getInitialState:function(){
	    return {
	      shopData:{banner:[],pushs:[]},
	      collectStatus: 0
	    };
	},
	handleClick:function(event){
       let statedata = this.state.collectStatus?0:1;
		$.ajax({
	    	url:apiurl()+"/user/core/collectShop?requestType=1&version=1.0",
	    	type:"post",
	    	data:{shopId:this.props.params.shopId,state:statedata},
	    	success:function(data) {
			      	if(data.flag == 1){
			      		console.log(data)
			      		this.setState({
				          collectStatus:statedata
				        });
			      	}
			        else{	
			        }
			      
		    }.bind(this),
		    err:function(){}
	    });
	},
	componentDidMount:function(){
		console.log(this.props.params.shopId)
	    $.ajax({
	    	url:apiurl()+"/weixin/index?requestType=1&version=1.0",
	    	type:"post",
	    	data:{shopId:this.props.params.shopId},
	    	success:function(data) {
			      if (this.isMounted()) {
			      	if(data.flag == 1){
			      		console.log(data)
			      		data.data.sign = imgurl() + data.data.sign;
			      		this.setState({
				          shopData:data.data,
				          collectStatus:data.data.collectStatus
				        });
			      	}
			        else if(data.flag == 0){
			        	this.setState({
				          shopData:data.message
				        });
			        }
			        else{
			        	
			        }
			      }
		    }.bind(this),
		    err:function(){
		    	
		    }
	    });
   },
   render:function(){
   	 let list = "/app/list/"+this.props.params.shopId;
      return (
         <div className="shopContent">
         	<div className="sign">
				<img src={this.state.shopData.sign} alt="" />
			</div>
			<div className="nav">
				<div className="logo">
					<div className="logocontent">
						<img src={imgurl()+this.state.shopData.logo} alt="logo" />
						
					</div>
				</div>
				<ul>
					<li>
						<Link to={list}>
							<span style={{display:'block',height: '22',textColor:'#ef503a'}}>{this.state.shopData.itemNum}</span>
							<p>全部商品</p>
						</Link>	
					</li>
					<li onClick={this.handleClick}>
						<a id="collect">
						<img src={this.state.collectStatus?icon_favorite_sel:icon_favorite} alt="" className="collection"/>
							<p>收藏本店</p>
							<span id="hide" style={{display: 'none'}}></span>
						</a>	
					</li>
					<li>
						<a>
							<img src={icon_qrcode} alt="" className="watch"/>
							<p>关注</p>
						</a>	
					</li>
				</ul>
			</div>
			<Slider slides= {this.state.shopData.banner} time="5000"/ >
			<div className="commend">
				<div className="commend-title">
					<img src={icon_tuijian} alt="" className="tuijian-img"/>推荐商品 <Link className="more" to={list}>更多></Link>
				</div>
				<div className="commend-container">
					<Pro prolist={this.state.shopData.pushs}></Pro>	
				</div>
			</div>
			<div className="shopImformation">
				<div style={{padding:'20px 0'}}>
					<div className="imItem">
						<label for=""><img src={icon_dingwei} alt="" /></label><span>{this.state.shopData.address}</span>
					</div>
					<div className="imItem">
						<label for=""><img src={icon_dianhua} alt="" /></label><span>{this.state.shopData.mobile}</span>
					</div>
				</div>
				<p>酒趣·提供技术支持</p>
			</div>
		 </div>
      );
   }
});

export default App;
