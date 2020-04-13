import {useState, useEffect} from 'react';

const useInitialState = (API) => {

    /* USESTATE */
    const [videos, setVideos] = useState([]);

    /* USEEFFECT consulta la API*/
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);
    return videos;
}

export default useInitialState;
