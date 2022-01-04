import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {
 firestore,
 convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
 unsubscripbeFromSnapshot = null;
 async componentDidMount() {
  const { updateCollections } = this.props;
  const collectionRef = await collection(firestore, 'collections');
  onSnapshot(collectionRef, async (snapshot) => {
   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
   updateCollections(collectionsMap);
  });
 }
 render() {
  const { match } = this.props;
  return (
   <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </div>
  );
 }
}

const mapDispatchToProps = (dispatch) => ({
 updateCollections: (collectionsMap) =>
  dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
