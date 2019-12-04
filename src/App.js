import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import './App.css';
import Item from './components/Item';




class App extends Component {

  addItem=()=>{
    //Add item to list
  }

  render() {

    return (
      <div className="App">
        <button>Add item</button>
        {/* Render list from props */}
      </div>
    );
  }
}

export default App;













// inject('groceryList')
// @observer
// class App extends Component {

//   addItem=()=>{
//     this.props.groceryList.addItem('Banana')
//   }

//   render() {

//     return (
//       <div className="App">
//         <button onClick={this.addItem}>Add item</button>
//         {this.props.groceryList.list.map(i => <Item itemName={i} />)}
//       </div>
//     );
//   }
// }

// export default App;
















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
