import React from 'react';
import useGif from '../useGif';


const Random = () =>{
    
    const {gif,fetchData} = useGif();
    
    
    return(
       
        <React.Fragment>
            <div className="container">
                <h1>Cool Gif</h1>
                <img width='500' height="500" src={gif} alt='Random Gif' />
                <button onClick = {fetchData}>New GIF</button>
            </div>
        </React.Fragment>
    )
}

export default Random;