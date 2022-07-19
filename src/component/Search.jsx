import React, { useState, useEffect } from "react";
import Links  from "./Links";
import {useDebounce} from "use-debounce";
import { useStateContext } from "../context/StateContextProvider";

const Search = () => {
    
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);
  const {setSearchTerm} = useStateContext();

  useEffect(() => {
    setSearchTerm(debouncedValue)
  }, [debouncedValue])
  

    return (
        <div className="sm:w-1/4 sm:mx-auto sm:-mt-11 mt-2">
            <input
                className="px-4 py-2 w-full outline-none rounded-full dark:bg-gray-200 bg-gray-300 dark:text-gray-700 text-lg"
                type="search"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Links/>
        </div>
    );
};

export default Search;
