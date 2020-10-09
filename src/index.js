import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import { ShoppingList } from './stores/ShoppingList'


//Create instance of store
const GroceryList = new ShoppingList()

const stores = { GroceryList }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();















// const groceryList = new ShoppingList()

// const stores = {groceryList}


// ReactDOM.render(<Provider {...stores}>
//   <App />
// </Provider>, document.getElementById('root'));
// registerServiceWorker();
























// let groceryList = new ShoppingList()

// // Use the prop "store" for your store
// ReactDOM.render(<App store={groceryList}/>, document.getElementById('root'));
// registerServiceWorker();
