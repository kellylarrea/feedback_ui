import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text:'This is the item from context',
            rating: 10
        }
    ])

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

    return <FeedbackContext.Provider value={{
        //feedback: feedback
        feedback,
        addFeedback,
        deleteFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext