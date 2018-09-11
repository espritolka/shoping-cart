import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const products = [
    {
      id: 1,
      title: 'Платье-миди с расклешенной юбкой',
      image: 'http://annyday.com/sites/default/files/images/2017/11_2.jpg',
      size: 44,
      price: 2450,
      code: "82039-11",
      color:"синий",
      quantity: 1
    },
    {
      id: 2,
      title: 'Туфли женские украшенные кружевными вставками',
      image: 'http://vse-raskraski.ru/assets/images/resources/722/raskraska-obuv55.jpg',
      size: 38,
      price: 2450,
      code: "13524-01",
      color: "черный",
      quantity: 1
    },
    {
      id: 3,
      title: 'Платье-миди',
      image: 'http://raskraski.kz/images/content/svadebnoe-plate.jpg',
      size: 44,
      price: 2450,
      code: "75039-11",
      color:"белый",
      quantity: 1
    },
    {
      id: 4,
      title: 'Платье-миди',
      image: 'http://raskraski.kz/images/content/svadebnoe-plate.jpg',
      size: 48,
      price: 2450,
      code: "75039-11",
      color:"белый",
      quantity: 1
    }]
ReactDOM.render( <App products={products}/>, document.getElementById('root'));
registerServiceWorker();
