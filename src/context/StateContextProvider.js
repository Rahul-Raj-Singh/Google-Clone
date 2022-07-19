import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();
const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";
// const BASE_URL = "http://localhost:3001";

// CRS Function
const makeGetApiCall = async (url, headers={}) => 
{    
    try 
    {
        console.log(`Making GET api call to ${url}`);

        const res = await axios({
            method: "get",
            url: url,
            headers: headers
        })

        console.log(`SUCCESS: GET api call to ${url} successful`);
        
        return [true, res.data]
    }
    catch (error) 
    {
        console.error(`ERROR: GET api call to ${url} failed`);
        console.error(error);
        return [false, {}]
    }
    
}

export const StateContextProvider = ({ children }) => {

    // States
    const [results, setResults] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(" ");

    // Functions
    const getResults = async (uri) => 
    {
        const url = BASE_URL + uri;

        setIsLoading(true);

        const [isSuccess, data] = await makeGetApiCall(url, {
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "X-Proxy-Location": "US",
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
        });
        
        
        setResults(data);
        setIsLoading(false);
    }
  return (
    <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);