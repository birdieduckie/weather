import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root.saga'
import { rootReducer } from './root.reducer'

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewareEnhancer = applyMiddleware(sagaMiddleware)
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewareEnhancer)
  )

  sagaMiddleware.run(rootSaga)

  return store
}