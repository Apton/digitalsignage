import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import Immo from '../slice/ImmoSlice';
import Loading from '../slice/LoadingSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {

    Immo,
    Loading,
  },

  middleware: [sagaMiddleware, logger],
  devTools: process.env.NODE_ENV !== 'production',

});
sagaMiddleware.run(rootSaga);
export default store;
