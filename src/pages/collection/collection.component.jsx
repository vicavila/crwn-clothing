import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
 console.log(collection);
 return (
  <div className="collection-page">
   <h2>COLLECTION PAGE</h2>
  </div>
 );
};

// here we take the component props, as this component
// is called with a url like shop/:collectionId we
// get the id from the match object sent by Route
const mapStateToProps = (state, ownProps) => ({
 collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
