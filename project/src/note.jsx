import React from "react";

function Note(proops){

    function handler(){
        proops.Adddelete(proops.id)  //it is taking proops.id from app and againg passing it to deletenot function
    }

    return(
<div className="Note">
    <h2>{proops.title}</h2>
    <p>{proops.content}</p>

    <button onClick={handler} className="delete">Delete</button>
</div>
    )
}
export default Note