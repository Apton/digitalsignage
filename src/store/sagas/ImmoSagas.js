import { put, call } from 'redux-saga/effects';
import fetchAll from '../api/Api';
import { setAllImmo } from '../slice/ImmoSlice';
import { setLoading, setLoaded } from '../slice/LoadingSlice';

/**
 * Filtraggio dati immobili
 */
export default function* filterImmo() {
  try {
    yield put(setLoading());
    const allImmoData = yield call(fetchAll);
    if (allImmoData) {
      yield put(setAllImmo(allImmoData.data));
    }
    yield put(setLoaded());
  } catch (error) {
    console.error('errore', error);
  }
}

