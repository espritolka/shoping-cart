import React, { Component } from 'react';
import './App.css';
import Product from './Component/Product.js';
import Footer from './Component/Footer';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
       items: [], 
       promo: "", 
       promoon: false,
       promotrue: 0,
       len: 0,
      };
      this.onQChange = this.onQChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
       }
 componentWillMount(){
   this.setState(prevState => ({ 
     "items": prevState.items.concat(this.props.products),
           }));
    }
  componentDidMount(){
      let l = this.state.items.reduce(function (a, b) { 
      return a + b.quantity}, 0);
        this.setState({
           "len": l,
         })
     }
  
  onQChange(quan, key) {
    this.setState((prevState, props) => {
      let product = prevState.items.find(p => p.id == key);
       
        product.quantity += quan;
         if (product.quantity == 0) {
        let index = prevState.items.indexOf(product);
        prevState.items.splice(index, 1);
       let l = this.state.items.reduce(function (a, b) { 
      return a + b.quantity}, 0);
        let state = {
          len: l,
          items: prevState.items,
        };
        
        return state;
      }
      let l = this.state.items.reduce(function (a, b) { 
      return a + b.quantity}, 0);
      return {
        items: prevState.items,
        len: l,
      };
    })
   }
  onDelete(itemId){
              let updatedItems = this.state.items.filter(item => {
          return item.id !== itemId;
});
    let l = updatedItems.reduce(function (a, b) { 
      return a + b.quantity}, 0);
    this.setState({
          "items": [].concat(updatedItems),
      "len": l,
    })
     
  }
  handleChange(promo){
      this.setState({
      promo: promo.target.value,
         });
    }
  handleClick(e){
       console.log(this.state.promo)
    if(this.state.promo == "123456"){
        this.setState({
        promoon: true,
         promo: "",
         promotrue: -1800,
        });
          } else {
     this.setState({
        promoon: false,
        promo: "",
        promotrue: 0,
            }); 
    }
    
  }
      render() { 
       let sumitems = this.state.items.reduce(function (a, b) { 
      return a + b.price *b.quantity}, 0);
      let sump = sumitems + this.state.promotrue;
     
          return(
            <div>
        <div className="application">
              <header>
  {/* <nav>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Forum</a></li>
      <li><a href="#">Download</a></li>
    </ul>
  </nav> */}
</header>
              <h1>Ваша корзина ({this.state.len})</h1>
            <div className="products">
              <table>
<tr><th>Товар</th><th>Описание</th><th>Количество</th><th>Цена</th><th>Удалить</th></tr> 
        {this.state.items.map(product => (
            <Product 
              title={product.title}
              image={product.image}
              size={product.size}
              code={product.code}
              color={product.color}
              price={product.price}
              quantity={product.quantity}
              id={product.id}
              onClickDelete={this.onDelete}
              onQuantityChange={q => this.onQChange(q, product.id)}
            />
          ))}
                </table>
        </div>
            <div className="bottom">
              <div className ="bottomleft">
                <p>Есть промокод?</p>
                <input type="text" id="promo" placeholder="Введите промокод" value={this.state.promo} onChange={this.handleChange}/> 
                <button className="btnpromo" onClick={this.handleClick}>Применить</button>
                </div>
              <div className ="bottomright">
              <p>Сумма заказа: {sumitems}</p>
               <p  className="promostring">Промокод: {this.state.promotrue}</p><br/>
              <p>Всего: {sump}</p>
            <button className="btnsave">Оформить заказ</button>
              </div>
              </div>
              </div>
              <Footer>
        </Footer> 
          </div>
            )
      }
    }

export default App;
