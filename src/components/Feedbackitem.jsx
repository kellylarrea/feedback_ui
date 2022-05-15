import React, { useState } from 'react'
import Card from "./shared/Card"


function Feedbackitem( {item} ) {
 
    //div are children of Card
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        </Card>
      
  )
}

export default Feedbackitem