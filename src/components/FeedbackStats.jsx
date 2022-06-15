import { useContext } from 'react'
import FeedbackContext from '../context/FeebackContext'


const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)
  // Calculate ratings avg
  //passing accumulator i.e previous and current number 
  let average = feedback.reduce((acc, curr) => {
    return acc + curr.rating
    //default for prev 0 now we want to devide by how many feedbacks.raitings exist
  }, 0) / feedback.length
//.tofixed fixes decimal point to 1 and replace if its zero replace it with nothing
  average = average.toFixed(1).replace(/[.,]0$/, '')

//isNaN function if is Nan lets show zero else show average
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats

