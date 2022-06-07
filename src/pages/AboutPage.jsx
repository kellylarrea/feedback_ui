import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
        <h1>About this project</h1>
        <p>This is a FeedBack App and it is helping me freeshen up my React</p>
        <p>I also can see the difference in versions</p>
        <a href='/'>Back To Home</a>
        </div>
        </Card>
  )
}

export default AboutPage