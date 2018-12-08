import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore()
  
  window.getState = store.getState
  window.dispatch = store.dispatch
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>🥑Welcome to AVOToast BnB 🥑</h1>, root);
});
