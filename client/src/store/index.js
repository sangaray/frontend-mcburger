/* import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

import { persistStore, persistReducer } from 'redux-persist';//<-
import storage  from 'redux-persist/lib/storage';//<-

const persistConfig = {//<-
  key: 'persist-key',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)//<-
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)
export  { persistor }//<-
export default store; */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

