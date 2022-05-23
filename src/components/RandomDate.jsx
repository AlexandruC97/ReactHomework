import React from 'react';

function RandomDate(){
    let randomDateEx = randomDate(new Date(2012, 0, 1), new Date());
    return(
        <div>{randomDateEx}</div>
    )
}

function randomDate(start, end) {
    let dateR = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };
    let year = dateR.getFullYear();
    let day = dateR.getDate();
    let month = months[dateR.getMonth()];
    let date = month + " " + day + ", " + year;
    return date;
}

export default RandomDate;