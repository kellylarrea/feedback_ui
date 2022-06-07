import React from 'react'
import Feedbackitem from './Feedbackitem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList( {feedback, handleDelete} ) {
    //if no feedback  or if feedback.length = 0 then return  
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>

    }

    return (
        <div className="feedback-list">
          <AnimatePresence>
           {feedback.map((item)=>(
               <motion.div 
               key={item.id}
               inital={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity: 0}}
               >
           <Feedbackitem 
           key={item.id} 
           item={item} 
           handleDelete={handleDelete}
            />
            </motion.div>
           ))}
        </AnimatePresence>
            </div>
      )
    }
    // console.log('this is feedbacklist', feedback)
//   return (
//     <div className="feedback-list">
//        {feedback.map((item)=>(
//        <Feedbackitem 
//        key={item.id} 
//        item={item} 
//        handleDelete={handleDelete}
//         />
//        ))}
//         </div>
//   )
// }

FeedbackList.propTypes = {
    feeback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList