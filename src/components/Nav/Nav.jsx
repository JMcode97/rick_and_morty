import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch }) {
    const { pathname } = useLocation()

    return(
        <>
            {
                (pathname !== '/') ? (
                    <>
                        <SearchBar 
                        onSearch={onSearch}
                        />
                        <Link
                        to={'/about'}
                        >
                        <button>
                        About
                        </button>
                        </Link>
                        <Link
                        to={'/home'}
                        >
                        <button>
                        Home
                        </button>
                        </Link>
                    </>
                ) : ('')
            }  
        </>
    )
}