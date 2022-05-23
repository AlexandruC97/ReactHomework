import React from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

function RandomText(){

    return(
        <div className="articleContent">
            <p className="articleText">{loremIpsum()}</p>
        </div>
    )
}

export default RandomText;