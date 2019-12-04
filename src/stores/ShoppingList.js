import { observable, action } from 'mobx'
import { Item } from './Item'






















// export class ShoppingList {

//   @observable list = ['Apple', 'Tomato', 'Avocado']
//   @observable length;

//   @action addItem(item) {
//     this.list.push(item)
//   }

//   @action updateItem = (itemName, newName) => {
//     const i = this.list.indexOf(itemName)
//     this.list.splice(i, 1, newName)
//   }


// }



























// export class ShoppingList {

//     @observable list = []
//     @observable length;

//     @action addItem(name) {
//         this.list.push(name)
//     }

// }































// export class ShoppingList {
//     @observable list = [];
//     @observable length;

//     @action checkItem = name => {
//         let item = this.list.find(i => i.name === name)
//         item.completed = !item.completed
//     }
//     @action addItem = (name) => {
//         let item = new Item(name)
//         this.list.push(item)
//     }
//     @action editItem = (name, newLocation) => {
//         // your code here
//         let item = this.list.find(i => i.name === name)
//         item.location = newLocation
//     }
//     @action deleteItem = (name) => {
//         // your code here
//         const i = this.list.findIndex(i => i.name === name.name)
//         this.list.splice(i, 1)
//     }
// }

