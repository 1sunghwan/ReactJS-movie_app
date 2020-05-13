import React from 'react';

function Likes(props) {
    console.log(props);
    return <div>I like {props.fav}</div>
}

export default Likes;