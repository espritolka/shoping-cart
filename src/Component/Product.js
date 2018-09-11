import React, { Component } from 'react';


class Product extends React.Component {
    constructor(props) {
        super(props);
      this.onDelete = this.onDelete.bind(this);
    }
    onDelete(event){
      this.props.onClickDelete(this.props.id)
    }
     render() {
     return (
    <tr key={this.props.id}>
    <td className="tdimg"> <img className="product-image" src={this.props.image} /></td> 
    <td>
     <span>{this.props.title}</span> <br/>
     <span className="code"> Код: {this.props.code}</span> <br/>
     <span> Размер: {this.props.size}</span> <br/>
     <span> Цвет: {this.props.color}</span>
    </td>
    <td>
      <QChange 
          quantity={this.props.quantity} 
         onChange={this.props.onQuantityChange} 
         /></td>
    <td>{this.props.price} руб.</td>
    <td><a href="#" onClick={this.onDelete}>✕</a>
            </td>
      </tr> 
         );
     }
  }
  function QChange(props) {
    return (
      <div className="quantitychange">
        <button 
          onClick={() => props.onChange(-1)}
          className="qbutton minus"
        >
          -
        </button>
       
        <div className="qnum">{props.quantity}</div>
        <button 
          className="qbutton plus"
          onClick={() => props.onChange(+1)}
        >
          +
        </button>
      </div>
    );
  }
  export default Product;