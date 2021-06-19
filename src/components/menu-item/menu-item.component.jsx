import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
 <div
  // if size is null will pass as empty, no exceptions
  className={`${size} menu-item`}
  // we are using sass for styling, here we can use
  // the camel insted of kebab and it will translate
  // for example this will be background-image
  // for url we use the url method
  style={{ backgroundImage: `url(${imageUrl})` }}
 >
  <div className="content">
   <h1 className="title">{title}</h1>
   <span className="subtitle">SHOW NOW</span>
  </div>
 </div>
);

export default MenuItem;
