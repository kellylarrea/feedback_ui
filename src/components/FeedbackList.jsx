import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedbackList( {feedback} ) {
    //if no feedback  or if feedback.length = 0 then return  
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>

    }
    // console.log('this is feedbacklist', feedback)
  return (
    <div className="feedback-list">
       {feedback.map((item)=>(
       <Feedbackitem key={item.id} item={item}/>
       ))}
        </div>
  )
}

export default FeedbackList