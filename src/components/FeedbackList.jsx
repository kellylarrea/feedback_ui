import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeebackContext'

function FeedbackList() {

    // what is passed in const {is the value in feedbackcpntet.provider}
    const {feedback} = useContext(FeedbackContext)
    
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



export default FeedbackList