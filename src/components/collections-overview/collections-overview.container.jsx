import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
 isLoading: selectIsCollectionFetching,
});

// this evaluates from right to left, here starting WithSpinner and then connect
const CollectionsOverviewContainer = compose(
 connect(mapStateToProps),
 WithSpinner
)(CollectionsOverview);
// the redux compose method allows to make more readable this code that does the same:
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
