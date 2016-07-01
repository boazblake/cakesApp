import React from 'react'
import About from './about';
import MessageContainer from './messageContainer';


class Home extends React.Component {

  render(){

    return (
      <div id="splashPage" className="container-fluid component layer">
        <img className="animated slideInRight" id="logo" src='./images/logo_pic.png'/>
        <h1 className="animated zoomIn" id="title">The Flour Girl Cake Company</h1>
        <About />
        <MessageContainer />
        <img className="animated slideInLeft" id="girl" src='./images/french-girl-in-cafe.jpg'/>
      </div>
    )
  }
}


export default Home