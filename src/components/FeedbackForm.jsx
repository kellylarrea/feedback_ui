import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


const FeedbackForm = ({ handleAdd } ) => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

const handleTextChange = ( { target: { value }} ) => {
        //text === nothing then button disabled no message
if(text === '') {
    setBtnDisabled(true)
    setMessage(null)
    // if text does have text but with character length <= 10
    // then show specific message and button still disabled
} else if( text !== '' && text.trim().length <= 10){
    setMessage('Text must be at least 10 characters')
    setBtnDisabled(true)
} else {
    // else show no message enoguh characters and button is now enabled
    setMessage(null)
    setBtnDisabled(false)
}

        setText(value)
    }


const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length >= 10){
        const newFeedback = {
            //shorthand for text: text valeue is from state
            text: text,
            rating: rating,
        }
        handleAdd(newFeedback)
        setText('')
    }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder="Write a review" 
                value={text} />
                <Button isDisabled={btnDisabled} type='submit'>Send</Button>
            </div>
        {/* if theres a massage then lets have a div with classname message and render message*/}
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}
// }

  export default FeedbackForm