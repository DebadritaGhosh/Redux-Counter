import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./reducers";


const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// //#1 IMPORT STORE
// import { createStore } from 'redux';

// //#2 ACTION : (A SIMPLE FUNCTION THAT RETURNS WHAT WE ARE ABOUT TO DO)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// }

// //#3 REDUCER : 
// //(A SIMPLE FUNCTION WHICH CHECKS ACTION AND BASED ON THE ACTION IT MODIFY THE STATE)
// //REDUCER WILL BE THE PLACE FOR US TO DO THE LOGIC/WHATS GONNA HAPPEN TO OUR STATE
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// //#4 or #1 CREATE STORE : (GLOBALIZED STATE)
// let store = createStore(counterReducer);

// //

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
