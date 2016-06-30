import React from 'react';

let Icon = (iconUrl, iconLink) => {
  iconUrl=iconUrl,
  iconLink=iconLink
}

let socialMediaIconArray = [
  {
    link:'../images/facebook.png',
    url:'https://www.facebook.com/theflourgirlco'
  },
  {
    link:'../images/instagram.png',
    url:'https://www.instagram.com'
  },
  {
    link:'../images/pintrest.png',
    url:'https://www.pintrest.com'
  },  
  {
    link:'../images/youtube.png',
    url:'https://www.youtube.com'
  },  
  {
    link:'../images/twitter.png',
    url:'https://www.twitter.com'
  }
]

class SocialMedia extends React.Component {
  render(){

    let maxi = (e) => {
      let currentWidth = e.currentTarget.style.width
        return e.currentTarget.style.width = 80 + 'px'
    }

    let mini = (e) => {
      let currentWidth = e.currentTarget.style.width
        return e.currentTarget.style.width = 40 + 'px'
    }

    let StyleSocialImg = {
      display: 'inline-block',
      width:40 + 'px',
      transition:'0.8s all ease'
    }

    let socialMediaIcon = socialMediaIconArray.map((icon, i)=> {
             return <a key={i} target="_blank" href={icon.url}> <img onMouseOver={maxi} onMouseOut={mini} style={StyleSocialImg} src={icon.link}/> </a>
    })
    return (
      <div>{socialMediaIcon}</div>
    )
  }
}
            

export default SocialMedia