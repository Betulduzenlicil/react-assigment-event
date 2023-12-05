import { useState } from "react"
import Lesson from "../../pages/Lesson"
import {data} from"../../helper/data"

const LessonCard = () => {
  const [num, setNum] = useState(6)
  const [lessons, setLessons] = useState(true)
  return (
    <main>
        
    <div className="containerS">
        <h2> There Are {num} Lessons today</h2>
        <div className="card-containerS">
        {lessons && <Lesson data={data}/>}
        <div className="clearDiv"><button className="clear" onClick={()=>setNum(0) || setLessons(false)}>Clear List</button></div>
        </div>
        
        
    </div>
</main>
  )
}

export default LessonCard



