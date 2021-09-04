import React from 'react';
import './menu-item.styles.scss';
// this is a higher order component (a function that takes
// a component as an argument and returns a modified component)
import { withRouter } from 'react-router-dom';

// here we can just add history and match because we are using withRouter, even when those are not sent from the caller component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
 <div
  // if size is null will pass as empty, no exceptions
  className={`${size} menu-item`}
  onClick={() => history.push(`${match.url}${linkUrl}`)}
 >
  <div
   className="background-image"
   // we are using sass for styling, here we can use
   // the camel insted of kebab and it will translate
   // for example this will be background-image
   // for url we use the url method
   style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
  <div className="content">
   <h1 className="title">{title.toUpperCase()}</h1>
   <span className="subtitle">SHOP NOW</span>
  </div>
 </div>
);

// with this we power up our component to have access to the things related to our router (history, match)
export default withRouter(MenuItem);
