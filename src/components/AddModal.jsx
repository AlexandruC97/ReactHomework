import Modal from "react-bootstrap/Modal";
import React from "react";

function AddModal() {
    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add/Edit article</h5>
                </div>
                <div className="modal-body">
                    <form action="" id="addNewArticle">
                        <div className="row">
                            <input type="text" id="titleInput" className="col leftRows firstFourRows allRows"
                                placeholder="Please enter title"></input>
                            <input type="text" id="infoInput" className="col rightRows firstFourRows allRows"
                                placeholder="Please enter region"></input>
                        </div>
                        <div className="row">
                            <select id="authorInput" className="col leftRows firstFourRows allRows"></select>
                            <input type="text" id="dateInput" className="col rightRows firstFourRows allRows"
                                placeholder="Please enter date. Format ex: April 22, 2020"></input>
                        </div>
                        <div className="row">
                            <input type="text" id="imgInput" className="col singleRow lastTwoRows allRows"
                                placeholder="Please enter image url(1280x720)"></input>
                        </div>
                        <div className="row">
                            <textarea name="" cols="30" rows="10" id="textareaInput" className="col forTextArea lastTwoRows allRows"
                                placeholder="Please enter content"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn closeSaveBtn" data-bs-dismiss="modal">CLOSE</button>
                    <button type="button" id="saveBtn" className="btn closeSaveBtn pinkBtn">SAVE</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddModal;