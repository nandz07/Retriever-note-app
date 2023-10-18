import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister:userRegisterReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };

const middleWare = [thunk];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWare),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
