import { useContext } from "react"
import Card from "./shared/Card"
import { FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeebackContext"


function Feedbackitem( {item} ) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
 
    //div are children of Card
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)}
        className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        </Card>
      
  )
}


export default Feedbackitem