"use client"
import {useState} from 'react';
import Header from "./Header.js";
import Movie_row from "./Movie_row.js";
import Movie_List from "./Movie_list.js";
import "./globals.css";

const box = () => {
    const [movies,setMovies]=useState(Movie_List);
    function handleDelete(Movie_name){
        const newMovieList=movies.filter((movie_object)=> Movie_name !== movie_object.Movie_name)
        setMovies(newMovieList)
    }
    function like_count(movie_data){
        movie_data.vote+=1
        const newArray=[...movies]
        newArray.sort((a,b)=>b.vote - a.vote)
        setMovies(newArray)
    };
    function dislike_count(movie_data){
        movie_data.vote-=1
        const newArray=[...movies]
        newArray.sort((a,b)=>b.vote - a.vote)
        setMovies(newArray)
    };

    return(
        <>
            <Header/>
            {movies.map((movie)=>(
                <Movie_row
                    key={movie.id}
                    data={movie}
                    onDelete={() => handleDelete(movie.Movie_name)}
                    like_count={like_count}
                    dislike_count={dislike_count}
                />
            ))}
 
        </>

    
    
    )
}
export default box;

