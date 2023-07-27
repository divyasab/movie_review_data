"use client"
import {useState} from 'react';
const Action_row = (props) => {
    const [Rating, setRating] = useState(0);
    const handlelike = () => {
        setRating(Rating + 1);
    };
    const handledislike = () => {
        setRating(Rating - 1);
    };

    return(
        <div className="Action_row1">
                <div className="like_logo">
                    <button onClick={handlelike}><img src="like.png"/></button>

                </div>
                <div className="Rating">
                    <h2 className="score">{Rating}</h2>
                </div>
                <div className="dislike_logo">
                    <button onClick={handledislike}><img src="dislike.png"/></button>
                </div>
                
            </div>

    );
    
};
export default Action_row;
