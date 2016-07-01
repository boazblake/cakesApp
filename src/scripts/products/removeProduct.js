import React, { Component } from 'react';
//import database
// const jensCakes = horizon('jensCakes');

export default class RemoveProduct extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
  }

  handleRemoveProduct() {
  //   console.log(this.props.id)
  //   let removeProductbyId = this.props.id
  //   //REMOVE FROM DB jensCakes.remove(removeProductbyId).subscribe((removeProductbyId) => { console.log('removeProductbyId removed>>', removeProductbyId) })
  }

  render(){
    return(
      <button className="btn btn-danger"
              onClick={this.handleRemoveProduct}>X</button>
    )
  }
}
