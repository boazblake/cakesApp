import React, {Component} from 'react';

export class Description extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <textarea rows="4" cols="50" 
                  placeholder="Enter description here!"
                  onChange={this.props.addDescription}>
        </textarea>
    )
  }
}

export class FileName extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <input  type="text" 
                placeholder="Enter Name / Title here!"
                onChange={this.props.addFileName}>
        </input>
    )
  }
}