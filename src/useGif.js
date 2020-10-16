import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchData = async (tag) => {
    var url = "";
    if (tag) {
      url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g
        `;
    } else {
      url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g
        `;
    }
    const { data } = await axios.get(url);

    const imageGif = data.data.images.downsized_large.url;
    setGif(imageGif);
    console.log(data);
  };
  //useEffect act as component didmount if second argument array is empty---firstrender
  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, fetchData };
};

export default useGif;
