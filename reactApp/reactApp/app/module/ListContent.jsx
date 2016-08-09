import React from 'react';
import {Router, Route, Link, RouteHandler, Redirect, StateMixin} from 'react-router';
import List from './List.jsx';
import ListNav from './listNav.jsx';

const ListContent = React.createClass({
   render() {
      return (
         <div>
            <ListNav/>
            <List/>
         </div>
      );
   }
})

export default ListContent;
