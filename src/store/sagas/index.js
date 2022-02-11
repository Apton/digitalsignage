import {
  all, takeEvery,
} from 'redux-saga/effects';
import filterImmo from './ImmoSagas';

/**
 * inizializzazione reparti
 */

function* actionWatcher() {
  yield takeEvery('INIT', filterImmo);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
