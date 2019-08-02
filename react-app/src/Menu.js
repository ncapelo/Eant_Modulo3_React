import React from 'react'
import './Menu.css'



class Menu extends React.Component{
  
  render(){

    let items = this.props.links.map(function(link, i){
      return <li className="Menu-li" id={i} key={i}>{link}</li>
    })


    return (
      <ul className="Menu-ul">
        {items}  
      </ul>
      
    )

  }  
  
}

export default Menu
