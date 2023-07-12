import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers';
import { getMembre } from './actions/membre.action';
import { getMembreEnfant } from './actions/Enfant.action';
import { getMouvement } from './actions/Mouvement.action';
import { getDepartement } from './actions/Departemant.action';
import { getNouveaune } from './actions/Nouveau.action';

const store = configureStore({
  reducer : rootReducer,
  devTools : true,
})

store.dispatch(getMembre())
store.dispatch(getMembreEnfant())
store.dispatch(getMouvement())
store.dispatch(getDepartement())
store.dispatch(getNouveaune())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
