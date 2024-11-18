import React, { useState, useSyncExternalStore } from 'react'
import { movies } from './Movies.js'

const Movies = () => {

    const [moviesList, setMovies] = useState(movies);

    const filterbyCategary=(cat)=>{
        setMovies(movies.filter((dataa)=>dataa.category==cat)) 
    }

    return (
        <>
            <div style={{textAlign:'center',marginTop:'20px'}}>
                <button onClick={()=>setMovies(movies)} type="button" className="btn btn-outline-primary mx-3 mx-3" >All</button >
                <button onClick={()=>filterbyCategary("Action")} type="button" className="btn btn-outline-secondary mx-3" >Action</button >
                <button onClick={()=>filterbyCategary("Thriller")} type="button" className="btn btn-outline-success mx-3" >Thriller</button >
                <button onClick={()=>filterbyCategary("Animation")} type="button" className="btn btn-outline-danger mx-3" >Animation</button >
                <button onClick={()=>filterbyCategary("Horror")} type="button" className="btn btn-outline-warning mx-3" >Horror</button >
                <button onClick={()=>filterbyCategary("Drama")} type="button" className="btn btn-outline-info mx-3" >Drama</button >
                <button onClick={()=>filterbyCategary("Sci-Fi")} type="button" className="btn btn-outline-light mx-3" >Sci-Fi</button >
                
            </div> 
            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '4rem',
                width: '60rem',
                margin: 'auto',
                marginTop: '30px',

            }}>

                {moviesList.map((data) => (
                    <div key={data.id} style={{ maxWidth: '160px', textAlign: 'center' }}>
                        <div>
                            <img src={data.poster_path} alt="" className='ii' style={{ width: '150px', padding: '3px', border: '1px solid yellow', borderRadius: '10px' }} />
                        </div>
                        <h6>{data.title}</h6>
                        <p>{data.release_date}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movies
