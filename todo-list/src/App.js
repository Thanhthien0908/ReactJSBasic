import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems';


class App extends Component{
  constructor(){
    super();
    this.state = {
      todoItem : [
      {title:"Macket King", isComplete:true},
      {title:"SuperHero", isComplete:true},
      {title:"NumberOne", isComplete:false}
    ]
    }
  }
  onItemClicked(item){
    return (event) =>{
      const isComplete = item.isComplete;
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      this.setState({
        todoItem: [
          ...todoItem.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItem.slice(index +1 )
        ]
      });
    };
  }
  render(){
    const { todoItem } =this.state;
    if(!todoItem){
      return (
        <div className="App">
          <header className="App-header">
            {
              todoItem.length && todoItem.map((item, index) => 
              <TodoItems 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)}/>)
            }
            
          </header>
        </div>
      );
    }
    
    //toán tử && có thể hiểu là điều kiện ở trk và thực thi ở sau
    // để viết 1 hàm cần {}
    // khi map nhận vào 2 tham số thì tham số thứ 2 sẽ là index
    //bất kể dùng map để biến 1 array thành các component thì phải nhớ thêm index và key={index} 
  }
  
}

export default App;
