import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ShoppingList } from '../src/stores/ShoppingList'




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



























let groceryList = new ShoppingList()

// Use the prop "store" for your store
ReactDOM.render(<App store={groceryList}/>, document.getElementById('root'));
registerServiceWorker();
