import React  from "react";

const ToDo = ({id, title, text, updateMode, deleteToDo})=>{

    return(
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className="edit" onClick={updateMode}>Edit</button>
            <button className="delete" onClick={deleteToDo}>Delete</button>
            
        </div>
    )
}
export default ToDo