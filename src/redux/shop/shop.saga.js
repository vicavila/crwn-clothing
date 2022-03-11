import { takeEvery, call, put } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {
 firestore,
 convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
 fetchCollectionsSuccess,
 fetchCollectionsFailure,
} from './shop.actions';
import { collection, getDocs } from 'firebase/firestore';

export function* fetchCollectionsAsync() {
 try {
  const collectionRef = collection(firestore, 'collections');
  const snapshot = yield getDocs(collectionRef);
  // the call method is a saga effect which defer control on the function execution
  // back to the saga middleware, we use it whenever there's a potential slow function,
  // it receives as parameters the function and then the parameters
  const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
  // put is the saga effect for creating actions, like a dispatch in thunks
  yield put(fetchCollectionsSuccess(collectionsMap));
 } catch (error) {
  yield put(fetchCollectionsFailure(error.message));
 }
}

export function* fetchCollectionsStart() {
 yield takeEvery(
  shopActionTypes.FETCH_COLLECTIONS_START,
  fetchCollectionsAsync
 );
}
