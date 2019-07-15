import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Item extends Component {
  checkItem = e => {
    this.props.store.checkItem(e.target.value);
  };

  editItem = (e) => {
    let newLocation = prompt("Edit item ")
    this.props.store.editItem(e.target.name, newLocation)
    //your code here
  };
  deleteItem = () => {
    //your code here
  };
  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? 'crossed' : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem}/>
        {item.name} - {item.location}
        <button class="editItem" name={item.name} onClick={this.editItem}>edit</button>
      </div>
    );
  }
}

export default Item;
