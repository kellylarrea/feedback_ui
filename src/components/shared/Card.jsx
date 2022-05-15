import React from 'react'
import PropTypes from 'prop-types'

function Card( {children, reverse} ) {
  return (
      //set to curly and add back ticks card is a class that will always be there and to add a conditional
      //use string interpolation so if revrse then we want class of 'reverse'
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>


    //using style conditional
    <div className="card" style={{
        //if reverse         then backgroundC black    else white
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', 
     //if reverse  then text color white   else black
        color: reverse ? '#fff' : '#000'
    }}>{children}</div>
  )
} 

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}



export default Card