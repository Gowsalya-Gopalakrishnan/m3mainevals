import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Movies.css'
import { Navigate, useNavigate ,Link, useParams} from 'react-router-dom'
import ViewMore from './ViewMore'

const Movies = () => {
  const[movies,setMovies]=useState("")
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(true)
  const navigate = useNavigate()
  const [currentPage,setCurrentPage]=useState(1);
  const [genre,setGenre]=useState();
  // const {id} = useParams()

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`http://localhost:3000/movies`,{
        params:{
          genre,
        }    
      }
  )
    .then((res)=>setMovies(res.data))
    // console.log(res.data)
    .catch((err)=>err.response?err.response.data:err.response)
    .finally(()=>setIsLoading(false))
  },[])
  let itemsPerPage =4;
  let totalPage = Math.ceil(movies.length/itemsPerPage);
  let startIndex = (currentPage-1)*itemsPerPage;
  let lastIndex = (currentPage * itemsPerPage)
  let finalres = movies.slice(startIndex,lastIndex)

  const handleViewMore=(id)=>{
    navigate(`/movies/${id}`)
  }
  const handleDelete=async (id)=>{
    try{
      const response = await axios.delete(`http://localhost:3000/movies/${id}`)
      // setMovies(movies.filter((movie)=>movie.id !== id)) 
    
    }catch(err){
      alert("Failed to delete")
    }
  }
  // console.log(genre)
  return (
    <>
    
      {isLoading && <p style={{color:"red",fontSize:"1.2rem",textAlign:"center"}}>Loading...</p>}
      {error && <p>{error}</p>}

        <button onClick={()=>navigate("/addnew")} style={{padding:"5px 5px",backgroundColor:"brown",color:"white",border:"none"}}>Add New Movie</button>

      <div className='filter-section'>
          <select name='genre' value={genre} onChange={(e)=>setGenre(e.target.value)}>
              <option value="">All</option>
              <option value="crime">Crime</option>
              <option value="action">Action</option>
              <option value="drama">Drama</option>
              <option value="sci-fi">Sci-Fi</option>
          </select>
      </div>
      
      <div className='movies-container'>
          {finalres &&  finalres.map((movie)=>{
                  return(
                    <div key={movie.id} className='movies-list'>
                      <img src={movie.poster} alt={movie.name}/>
                      <h3>{movie.title}</h3>
                      <h4>Genre: {movie.genre}</h4>
                      <p>ReleaseDate : {movie.releaseDate}</p>
                      <div>
                        <button onClick={()=>navigate(`/editmovie/${movie.id}`)}style={{padding:"5px 5px",backgroundColor:"red",color:"white",border:"none",borderRadius:"5px"}}>
                          Edit</button>
                        <button onClick={()=>handleDelete(movie.id)}style={{padding:"5px 5px",backgroundColor:"orange",color:"white",border:"none",borderRadius:"5px"}}>Delete</button>
                        <button onClick={()=>handleViewMore(movie.id)}
                        style={{padding:"5px 5px",backgroundColor:"green",color:"white",border:"none"
                        ,borderRadius:"5px"}} className='viewmore'>View More</button>
                        
                      </div>
                    </div>
                  )
                })}
                <div className='pagination-section'>
                <button onClick={()=>setCurrentPage((prev)=>Math.max(prev-1,1))} disabled={currentPage === 1}>Prev</button>
                <button onClick={()=>setCurrentPage((prev)=>prev+1)}>1</button>
                <button onClick={()=>setCurrentPage((prev)=>prev+1)}>2</button>
                <button onClick={()=>setCurrentPage((prev)=>prev+1)}>3</button>
                <button onClick={()=>setCurrentPage((prev)=>prev+1)}>4</button>
                <button onClick={()=>setCurrentPage((prev)=>prev+1)}>5</button>
                <button onClick={()=>setCurrentPage((prev)=>Math.min(prev+1,totalPage))}disabled={currentPage===totalPage}>Next</button>
                </div>

  
      </div>
      
    </>
  )
}

export default Movies
