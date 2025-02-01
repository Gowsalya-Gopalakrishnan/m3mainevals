import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Quizform.css'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
    const [quiz, setQuiz] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)
    const [answer, setAnsewer] = useState("")
    const navigate = useNavigate("")
    const [option, setOption] = useState([])

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await axios.get(`https://graceful-abrasive-cotija.glitch.me/api/questions`)
                console.log(response.data)
                setQuiz(response.data.questions)
            } catch (err) {
                setError("failed to load")
            }
            finally {
                setIsLoading(false)
            }
        }
        fetch()

    }, [])
    const handleShowAnswer = () => {
        console.log("clicked")
        setShowAnswer(!showAnswer)
        // <h3>{ele.answer}</h3>
        {
            quiz.length && quiz.map((ele) => {
                return (
                    <h4>{ele.answer}</h4>
                )
            })
        }
    }
    const handleChange = () => {

    }
    return (
        <div>
            <div>
                {isLoading && <p>Loading....</p>}
                {error && <p>{error}</p>}
                <h2 style={{ textAlign: "center", fontSize: "2rem" }}> Take the Quix </h2>

                <form>
                    <div className='quizform' key={quiz.id}>

                        {quiz.length && quiz.map((ele) => {
                            return (
                                <div className='quiz-list'>
                                    <h2>{ele.question}</h2>

                                    <p>{ele.options}</p>
                                    <select type='radio' onChange={handleChange}>
                                        {
                                             ele.options.map((opt) => {
                                                <ul>
                                                    <li>{opt.options}</li> 
                                                    {/* <option>{opt.options}</option> */}
                                                </ul>
                                            }) 
                                         }

                                     </select>


                                    <button onClick={() => handleShowAnswer()}>
                                        {
                                            showAnswer ? "Hide Answer" : "Show Answer"

                                        }
                                    </button>
                                    {/* <p>{answer?<h4>{}</h4></p> */}



                                </div>
                            )
                        })}
                    </div>
                </form>
                <button onClick={() => navigate("/result")} style={{ margin: "auto" }}>Submit Quiz</button>
            </div>
        </div>
    )
}

export default Quiz
