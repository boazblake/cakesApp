import React, { component } from 'react';
import Product from './products/product';
import $ from 'jquery';

export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state ={
      products: []
    }
  }

  componentWillMount(){
     $.ajax({
      url: '/api/v1/products',
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      rawJSONdata: JSON.stringify()
    }).then((rawJSONdata) => {
      console.log('rawJSONdata', rawJSONdata)
        this.setState({
        products:rawJSONdata
      })
    })
  }


  render(){


    let productJSX = this.state.products.map((product, i) => {
      return <Product product={product} key={i} />
    });
    
    return (
      <div className="container-fluid component layer">
        {productJSX}
      </div>
    );
  }
}
