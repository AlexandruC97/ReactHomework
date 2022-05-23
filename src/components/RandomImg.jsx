import React from 'react';

function RandomImg(){
    let imgId = Math.floor(Math.random() * 100);
    let imgSrc = "https://picsum.photos/id/" + imgId + "/1280/720";
    return (
        <img className="articleImage" src={imgSrc} alt="random image" />
    )
}

export default RandomImg;