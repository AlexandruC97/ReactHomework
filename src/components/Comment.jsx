import React from 'react';

function Comment(props) {
    return (
        <div>
            <span className="commName">{props.name}</span>
            <span className="commEmail">{props.email}</span>
            <span className="commContent">{props.body}</span>
        </div>
    );
}

export default Comment;