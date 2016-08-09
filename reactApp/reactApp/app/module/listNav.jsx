import React from 'react';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';
import {apiurl,imgurl} from './common/common';

import up from './images/up.png';
import un from './images/un.png';
import down from './images/down.png';

const Brand = React.createClass({
	getInitialState:function(){
		return {brandlist:[]}
	},
	componentDidMount:function(){
		$.ajax({
			url: apiurl()+"/brand/brandList?requetType=1&version=1.0",
			type:'post',
			data:{shopId:10000},
			success:function(data){
				if(data.flag == 1){
					this.setState({brandlist:data.data})
				}
				else if(data.flag == 0){
					
				}
			}.bind(this),
			error:function(err){
				
			}
		})
	},
	render:function(){
		var brandcontent = this.state.brandlist.map(function(brand){
						return (
							<li>
								<a data-brandid={brand.id}>
									<img src={imgurl()+brand.brandLogo} alt="" />
								</a>
							</li>
						);
				})
		return (
			<ul>
				{brandcontent}
			</ul>
		)
	}
});
const Category = React.createClass({
	getInitialState:function(){
		return {categorylist:[]}
	},
	componentDidMount:function(){
		$.ajax({
			url: apiurl()+"/category/categoryList?requetType=1&version=1.0",
			type:'post',
			data:{shopId:10000},
			success:function(data){
				if(data.flag == 1){
					
					this.setState({categorylist:data.data})
				}
				else if(data.flag == 0){
					
				}
			}.bind(this),
			error:function(err){
				
			}
		})
	},
	render:function() {
		return (
			<ul>
				{
					this.state.categorylist.map(function(category){
						return (
							<li>
								<a data-brandid={category.id}>
									<img src={imgurl()+category.imgUrl} alt="" />
								</a>
							</li>
						)
					})
				}
			</ul>
		)
	}
});
const ListNav = React.createClass({
	handleShow:function(event){
		
		(this.refs.brand.style.display == 'block'||(this.refs.brand.style.display == 'none'&&this.refs.category.style.display == 'block')?this.refs.brand.style.display='none':this.refs.brand.style.display='block');
	},
	handleCategoryShow:function(){
		(this.refs.category.style.display == 'block'||(this.refs.brand.style.display == 'block'&&this.refs.category.style.display == 'none')?this.refs.category.style.display='none':this.refs.category.style.display='block');
		
	},
   render:function(){
      return (
         <header style={{position: 'fixed',zIndex: '999',width:'100%',background: '#fff'}}>
			<div className="search list-search">
				<div className="brand" onClick={this.handleShow}><span>品牌</span></div>
				<div className="search-content">
					<div className="search-input">
						<div className="mui-input-row mui-search">
							<input type="search" className="mui-input-clear" placeholder="搜索商品" id="txtsearch"/>
						</div>
					</div>	
				</div>
				<div className="category" onClick={this.handleCategoryShow}>
					<span>分类</span>
				</div>
				<div className="clear"></div>
				<div className="list-content">
					<div className="brand-content" ref="brand" style={{display:'none'}}>
						<Brand/>
					</div>
					<div className="category-content" ref="category" style={{display:'none'}}>
						<Category/>
					</div>
				</div>	
			</div>
			<div className="list-nav">
				<ul>
					<li id="new">
						<a>新品</a>
					</li>
					<li id="sall">
						<a>销量<img src={un} alt="" /></a>
					</li>
					<li id="price">
						<a>价格<img src={un} alt="" /></a>
					</li>
				</ul>
			</div>
		</header>
      );
   }
})

export default ListNav;
