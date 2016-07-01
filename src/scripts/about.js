import React from 'react'
import SocialMedia from './modules/socialMedia'
import Contact from './contact'

class About extends React.Component {
  render(){

    return (
      <div className="col-xs-4 component aboutPage" >
        <SocialMedia />
        <Contact />
      </div>
    )
  }
}


export default About