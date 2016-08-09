import React from 'react';
import Prolist from './prolist.jsx';

const Pro = React.createClass({
   render() {
   	var prolistdata = this.props.prolist;
   	console.log(prolistdata);
   	var procontent = prolistdata.map(function(prodata, index, array){
      return(
       	<Prolist list={prodata}/>
      )
    });
	  return ( 
	  	<div>
		    <div className="pro-list">
				<ul>
					{procontent}
				</ul>
			</div>
		</div>
	  )
   }
});

export default Pro;
