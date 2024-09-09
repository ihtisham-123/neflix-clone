import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";	



// fetch('https://api.themoviedb.org/3/authentication', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const fetchFromTMDB = async (url) => {

    const options = {
       
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  ' + ENV_VARS.TMDB_API_KEY
        }
    };
   const response= await axios.get(url,options)
   if   (response.status !== 200) {
    throw new Error(`Failed to fetch data from TMDB: ${response.status}`)
   }
   
   return response.data
}