import React from 'react'

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDescription:false
    }      

    this.handleShowDescription = this.handleShowDescription.bind(this);
  }

  handleShowDescription(evt){
    evt.preventDefault();
    if (this.state.showDescription) {
      return this.setState({
        showDescription:false
      })
    } else {
      return this.setState({
        showDescription:true
      })
    }
  }


  render(){
    let showHide = (this.state.showDescription) ? "col-xs-2 center show" : "col-xs-2 center hide";

    return (
      <div className="col-xs-4 component" >
        <div className='contactInfo'>

          <email onClick={this.handleShowDescription}>
            <h1>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </h1>
            <div className={showHide}>
              <p className="left-align">Jennifer@TheFlourGirlCakeCompany.Com</p>
            </div>
          </email>


          <tel onClick={this.handleShowDescription}>
            <h1>
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </h1>
            <div className={showHide}>
              <p className="left-align">832.434.6120</p>
            </div>
          </tel>


        </div>
      </div>
    )
  }
}


export default Contact