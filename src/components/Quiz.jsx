import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Quizform.css'

const Quiz = () => {
    const[quiz,setQuiz]=useState([])
    const[isLoading,setIsLoading] = useState(false)
    const[error,setError]=useState(null)
    const[showAnswer,setShowAnswer] = useState(false)
    cosnt[answer,setAnsewer]=useState("")

    useEffect(()=>{
        const fetch = async ()=>{
             setIsLoading(true)
             setError(null)
             try{
                const response = await axios.get(`https://graceful-abrasive-cotija.glitch.me/api/questions`)
                console.log(response.data)
                setQuiz(response.data.questions)
             }catch(err){
                setError("failed to load")
             }  
             finally{
                setIsLoading(false)
             }
        }
       fetch()
        
    },[])
    const handleShowAnswer=({id})=>{
        console.log("clicked")
        setShowAnswer(!showAnswer)
        // <h3>{answer}</h3>
       
    }
  return (
    <div>
      <div>
        {isLoading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        <h2 style={{textAlign:"center",fontSize:"2rem"}}> Take the Quix </h2>

        <form>
        <div className='quizform'>

            {quiz.length > 0 && quiz.map((ele)=>{
                return(
                    <div className='quiz-list'>
                        <h2>{ele.question}</h2>
                        {/* {ele.options.map((opt)=>{
                            <ul>
                                <li>{opt.options}</li>
                                
                            </ul>
                        })} */}
                        <ul><li>{ele.options}</li></ul><br/>
                        <button onClick={()=>handleShowAnswer(id)}>
                        {
                            showAnswer?"Hide Answer":"Show Answer"

                        }
                        

                        </button>
                        
                    
                       
                    
                    </div>
                )
            })}
        </div>
        </form>
       
      </div>
    </div>
  )
}

export default Quiz
