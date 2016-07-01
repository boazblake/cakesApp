import React, { Component } from 'react';

export default class RemoveProduct extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
  }

  handleRemoveProduct() {
    console.log(this.props.id)
    let removeProductbyId = this.props.id
    // REMOVE FROM DB
    
  }

  render(){
    return(
      <button className="btn btn-danger"
              onClick={this.handleRemoveProduct}>X</button>
    )
  }
}
