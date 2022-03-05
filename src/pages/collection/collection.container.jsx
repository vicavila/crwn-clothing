import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

// here we pass te state, different to the other container
// becase we need to invert the value (!), and it expects
// a function, if we apply ! directly over the function definition
// it will fire an error, we need to define it as a call
const mapStateToProps = createStructuredSelector({
 isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
 connect(mapStateToProps),
 WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
