import { createStore, compose } from 'redux';
import reducer from './reducers/index';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloaderState => createStore(
    reducer,
    preloaderState,
    composeEnhancers(),
)

const store = configureStore({});
export default store;