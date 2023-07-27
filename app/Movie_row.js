import Action_row from "./Action_row.js"
import Delete from "./Delete.js";
export default function Movie_row(props){
    return(
        <div className="Movie_row1">
            <div className="image_logo">
                <img src={props.data.Movie_image}/>
            </div>
            <div className="Movie_details">
                <h2>{props.data.Movie_name}</h2>
                <p>{props.data.Movie_year} | {props.data.duration} | {props.data.genre} </p>
                <h3> Description</h3>
                <p>{props.data.description}</p>
                <Action_row {...props}/>
                <Delete
                        {...props}
                />
            </div>
        </div>
            
    );
};
            
            

