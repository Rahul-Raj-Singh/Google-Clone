import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/StateContextProvider";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const Results = () => {
    const { getResults, results, searchTerm, isLoading } = useStateContext();
    const location = useLocation();

    console.log(location.pathname);

    useEffect(() => {
        if (searchTerm !== "") {

            if (location.pathname === "/videos")
                getResults(`/search/q=${searchTerm} videos`);
            else
                getResults(`${location.pathname}/q=${searchTerm}&num=20`);
        }
    }, [location.pathname, searchTerm]);

    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case "/search":
            return (
                <div className="md:px-36 lg:px-56 flex flex-wrap pt-4">
                    {results?.results?.map(({ link, title }, index) => (
                        <div key={index} className="w-full sm:w-1/2 mb-4 p-2">
                            {" "}
                            {/* flex-item - represents single object} */}
                            <p className="text-sm">
                                {link.length <= 30 ? link : link.substr(0, 30)}
                            </p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-lg text-blue-700 dark:text-blue-300 hover:underline"
                            >
                                {title}
                            </a>
                        </div>
                    ))}
                </div>
            );

        case "/image":
            return (
                <div className="md:px-36 lg:px-56 flex flex-wrap pt-4">
                    {results?.image_results?.map(({ image, link }, index) => (
                        <div key={index} className="w-full sm:w-1/2 mb-4 p-2"> {/* flex-item - represents single object} */}
                            <img
                                src={image?.src}
                                alt={link?.title}
                                loading="lazy"
                            />
                            <a
                                href={link?.href}
                                className="block pt-2 text-blue-700 dark:text-blue-300 hover:underline"
                            >
                                {link?.title}
                            </a>
                        </div>
                    ))}
                </div>
            );

        case "/news":
            return (
                <div className="md:px-36 lg:px-56 flex flex-wrap pt-4">
                    {results?.entries?.map(({ link, title, id }, index) => (
                        <div key={id} className="w-full sm:w-1/2 mb-4 p-4"> {/* flex-item - represents single object} */}
                            <p className="text-lg">
                                {title}
                            </p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-700 dark:text-blue-300 hover:underline break-words"
                            >
                                {link}
                            </a>
                        </div>
                    ))}
                </div>
            );

        case "/videos":
            return (
                <div className="md:px-36 lg:px-56 flex flex-wrap justify-center pt-4">
                    {results?.results?.map(({ link }, index) => (
                        <div key={index} className="w-full pb-4"> {/* flex-item - represents single object} */}
                            <ReactPlayer url={link} width="100%" controls style={{margin: "0 auto"}}/>
                        </div>
                    ))}
                </div>
            );

        default:
            return "Error...";
    }
};

export default Results;
