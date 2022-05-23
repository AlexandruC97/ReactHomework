import React from "react";

function AddBtn(props){
    return(
        <div id="addButton">
            <button id="buttonAdd" data-bs-toggle="modal" data-bs-target="#addModal"><i
                    className="fa-solid fa-plus icon"></i> ADD ARTICLE</button>
        </div>
    )
}

export default AddBtn;