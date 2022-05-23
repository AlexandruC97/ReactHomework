import React from 'react';

function AuthorName(props) {
    let personX = props.person;
    let name = personX[0].name;
    // console.log(personX[0]);
    // console.log(name);
    return (
        <span>{name}</span>
    )
}

export default AuthorName;