
const Action_row = (props) => {
    return(
        <div className="Action_row1">
                <div className="like_logo">
                    <button onClick={()=>props.like_count(props.data)}><img src="like.png"/></button>

                </div>
                <div className="Rating">
                    <h2 className="score">{props.data.vote}</h2>
                </div>
                <div className="dislike_logo">
                    <button onClick={()=>props.dislike_count(props.data)}><img src="dislike.png"/></button>
                </div>
        </div>

    );
    
};
export default Action_row;
