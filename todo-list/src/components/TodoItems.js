//cần import thư viện này trước khi code
import React, { Component } from 'react';
import './TodoItems.css';//import file css 
import classNames from 'classnames';
class TodoItems extends Component{
    
    render(){
        const { item,onClick } = this.props;
        
        return (
            <div onClick={onClick} className={classNames('TodoItems',{
                'TodoItems-Complete':item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        );
        //se có 1 div ở ngoài cùng và có className trùng với tên component đó
        //khái niệm về props : nhận 1 tham số truyền vào và đều đc lưu vào trong property props
        //nếu tham số truyền vào có key là title như trên thì để lấy dữ liệu ta làm như trên this.props.title
        //để truy cập vào title cần có dấu {}
    }
}
//để sử dụng đc todoitems trên ta phải import vào App.js nhưng muốn add vào thì ở file nào ta phải export nó trước
export default TodoItems;