import React from 'react'
import "../components/LessonCard/LessonCard.css"
const Lesson = ({ data }) => {

    
    return (
        <main>
            <h1 className='title'>Lesson Reminder</h1>
            <div className='container'>
                {data.map(({ id, name, hour, image }) => (
                    <div key={id} className='card'>
                        <div>
                            <img src={image} alt="img" />
                        </div>

                        <div className='text'>
                            <p className='lessonText'><span className='lessonspan'>Lesson Name:</span>{name}</p>
                            <p className='lessonText' ><span className='lessonspan'>Lesson Hour: </span>{hour}</p>
                        </div>
                       
                    </div>
                    
                ))}
            </div>
           
        </main>

    )
}

export default Lesson



