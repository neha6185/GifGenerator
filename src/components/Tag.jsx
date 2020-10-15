import React,{useEffect,useState}from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;


const Tag = () =>{
    
    const [gif,setGif] = useState('');
    const[tag,setTag] = useState('dog');
    const fetchData = async (tag) =>{
        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g
        `;
        const {data} =await axios.get(url);

        const imageGif = data.data.images.downsized_large.url;
        setGif(imageGif);
         console.log(data);
        }
    //useEffect act as component didmount if second argument array is empty---firstrender
    useEffect(()=>{
        fetchData(tag);
    },[tag]);

    const handleClick = () =>{
        fetchData(tag);
    }
    return(
       
        <React.Fragment>
            <div className="container">
                <h1>Choose Your Gif</h1>
                <img width='500' height="500" src={gif} alt='Random Gif' />
                <input value ={tag} onChange={(e)=>setTag(e.target.value)} />
                <button onClick = {handleClick}>New</button>
            </div>
        </React.Fragment>
    )
}

export default Tag;