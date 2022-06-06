import React from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes} from 'react-icons/fa'


function Feedbackitem( {item, handleDelete} ) {

 
    //div are children of Card
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        </Card>
      
  )
}

Feedbackitem.propTypes = {
 item: PropTypes.object.isRequired
}

export default Feedbackitem