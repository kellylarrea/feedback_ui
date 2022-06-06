import React, {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/Feedbackdata'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        // javascript method for an alert on window 
        if(window.confirm('are you sure you want to delete?')) {
            //will return a feedback array that is clicked - the one that is being deleted
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}


export default App