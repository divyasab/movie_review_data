import Header from "./Header.js";
import Movie_row from "./Movie_row.js";
import Movie_List from "./Movie_list.js";
import "./globals.css";

const box = () => {

    return(
        <>
            <Header/>
            {Movie_List.map((movie)=>(
                <Movie_row
                    key={movie.id}
                    data={movie}
                />
            ))}
 
        </>

    
    
    )
}
export default box;

