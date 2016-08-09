import React from 'react';
import {apiurl,toast} from './common/common';
import Prolist from './componets/prolist.jsx';

const List = React.createClass({
  getInitialState: function() {
  	
      return {newsList: []};
  },

  componentDidMount: function() {
  	$.ajax({
      	type:"post",
      	url:apiurl()+"/weixin/itemSearch?requestType=1&version=1.0",
      	async:false,
      	data:{shopId:10000,title:"",page:0,orderByClause:1},
      	success:function(data){
      		console.log(data)
      		if(data.flag == 1){
      			this.setState({newsList:data.data});
      		}
      		else if(data.flag == 0){
      			toast(data.message);
      		}
      		
      	}.bind(this),
      	error:function(err){
      		
      	},
      	complete:function(){
      		
      	}
      });
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  handleScroll: function(event) {
    if ($(window).scrollTop() >= $('body').height()-$(window).height()) {
      $.ajax({
      	type:"post",
      	url:apiurl()+"/weixin/itemSearch?requestType=1&version=1.0",
      	async:true,
      	data:{shopId:10000,title:"",page:1},
      	success:function(data){
      		console.log(data);
      		if(data.flag == 1){
      			this.setState({newsList: this.state.newsList.concat(data.data)});
      		}
      		else if(data.flag == 0){
      			toast(data.message);
      		}
      		
      	},
      	error:function(err){
      		
      	},
      	complete:function(){
      		
      	}
      });
    }
  },

  render: function() {
    var newsList = this.state.newsList.map(function(news) {
      return <Prolist list={news}/>;
    });

    return (
    	<div style={{paddingTop:'110'}}>
		    <div className="pro-list">
				<ul>
					{newsList}
				</ul>
			</div>
		</div>
    );
  }
});

export default List;
