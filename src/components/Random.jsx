import React,{useEffect,useState}from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;


const Random = () =>{
    
    const [gif,setGif] = useState('');
    const fetchData = async () =>{

        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g
        `;
        const {data} =await axios.get(url);

        const imageGif = data.data.images.downsized_large.url;
        setGif(imageGif);
         console.log(data);
        }
    //useEffect act as component didmount if second argument array is empty---firstrender
    useEffect(()=>{
        console.log(API_KEY);
        
        fetchData();
    },[]);

    const handleClick = () =>{
        fetchData();
    }
    return(
       
        <React.Fragment>
            <div className="container">
                <h1>Cool Gif</h1>
                <img width='500' height="500" src={gif} alt='Random Gif' />
                <button onClick = {handleClick}>New</button>
            </div>
        </React.Fragment>
    )
}

export default Random;