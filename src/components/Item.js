import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';



@observer
class Item extends Component {

  updateItem = () => {
    let newName = prompt('Enter a new name')
    //Use update Item from store
    
  }

  render() {
    return (
      <div onClick={this.updateItem}>
        {this.props.itemName}
      </div>
    );
  }
}

export default Item;
















// @inject('groceryList')
// @observer
// class Item extends Component {

//   updateItem = () => {
//     let newName = prompt('Enter a new name')
//     this.props.groceryList.updateItem(this.props.itemName, newName)
//   }

//   render() {
//     return (
//       <div onClick={this.updateItem}>
//         {this.props.itemName}
//       </div>
//     );
//   }
// }

// export default Item;
