import React from 'react';

const Product = React.createClass({
   render() {
   	let shopId = this.props.params.shopId;
   	let itemId = this.props.params.itemId;
      return (
         <div>
            <span>商品详情</span>
         </div>
      );
   }
})

export default Product;
