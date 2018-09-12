import React, { Component } from 'react';

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
  export default QChange;