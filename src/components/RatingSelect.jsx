import { useContext, useEffect }from 'react'
import FeedbackContext from '../context/FeebackContext'


const RatingSelect = ({ select, selected }) => {
  //  console.log('this is select', selected)

const {feedbackEdit} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.item === true){
      selected(feedbackEdit.item.rating)
    }
},[feedbackEdit])

    const handleChange = (e) =>{
        select(+e.target.value)
    }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect