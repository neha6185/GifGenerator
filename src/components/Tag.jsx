import React,{useState}from 'react';
import useGif from '../useGif';



const Tag = () =>{
    
    const {gif,fetchData} = useGif();
    const[tag,setTag] = useState('dog');
    
    return(
       
        <React.Fragment>
            <div className="container">
                <h1>Choose Your Gif</h1>
                <img width='500' height="500" src={gif} alt='Random Gif' />
                <input value ={tag} onChange={(e)=>setTag(e.target.value)} />
                <button onClick = {fetchData(tag)}> New GIF</button>
            </div>
        </React.Fragment>
    )
}

export default Tag;