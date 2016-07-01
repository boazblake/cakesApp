import React from 'react'

class MessageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email:'',
      message:''
    }
    this.handleName=this.handleName.bind(this)
    this.handleEmail=this.handleEmail.bind(this)
    this.handleMessage=this.handleMessage.bind(this)
    this.sendMessage=this.sendMessage.bind(this)
  }


  handleName(evt){
    this.setState({
      name: evt.target.value
    })
  }

  handleEmail(evt){
    this.setState({
      email: evt.target.value
    })
  }
  handleMessage(evt){
    this.setState({
      message: evt.target.value
    })
  }

  sendMessage(evt){
    evt.preventDefault()
    let messageObject = {}
    messageObject.name =this.state.name
    messageObject.email =this.state.email
    messageObject.message =this.state.message
    console.log("message to be sent:  ", messageObject)
    window.open(`mailto:${messageObject.email}?subject=${messageObject.message}`);
  }

  render(){

    return (
      <form className="col-xs-4 component" 
            onSubmit={this.sendMessage}>
        <h3>Send Me a Message!</h3>
        <div id='messageContainer'>
          <input onChange={this.handleName} type="text" placeholder="your name here now"/>
          <input onChange={this.handleEmail} type="text" placeholder="your email" />
          <textArea onChange={this.handleMessage} rows="4" cols="25" placeholder="your message" />
        </div>
        <button type="submit"><i className="fa fa-envelope" aria-hidden="true"></i></button>
      </form>
    )
  }
}


export default MessageContainer