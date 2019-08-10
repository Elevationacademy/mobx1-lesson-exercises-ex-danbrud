import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';





class App extends Component {


  
  render() {
    
    return (
      <div className="App">
        <button onClick = {this.addItem}>Add item</button>
      </div>
    );
  }
}

export default App;






























// class App extends Component {


//   addItem = () => {
//     this.props.store.addItem("new item")
//   }
  
  
//   render() {
    
//     return (
//       <div className="App">
//         <button onClick = {this.addItem}>Add item</button>
//         {this.props.store.list.map(i => <div>{i}</div>)}
//       </div>
//     );
//   }
// }

// export default App;
