import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/Feedbackdata'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //taking the objects that are already in feedback and placing them in thsi array
        //set feedback to an array with current feedback and newfeedback
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        // javascript method for an alert on window 
        if (window.confirm('are you sure you want to delete?')) {
            //will return a feedback array that is clicked - the one that is being deleted
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}


export default App