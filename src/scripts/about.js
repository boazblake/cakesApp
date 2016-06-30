import React from 'react'
import SocialMedia from './modules/socialMedia'

class About extends React.Component {
  render(){

    return (
      <div className="col-xs-6 center container-fluid component layer aboutPage" >
        <div className='txtWrapper'>
          <SocialMedia />
          <email ><h1><i className="fa fa-envelope" aria-hidden="true"></i></h1><p class="left-align">Jennifer@TheFlourGirlCakeCompany.Com</p></email>
          <br/>
          <tel ><h1><i className="fa fa-mobile" aria-hidden="true"></i></h1><p class="left-align">832.434.6120</p></tel>
          <br/>
        </div>
      </div>
    )
  }
}


export default About