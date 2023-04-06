import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
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
                        <Link
                        to={'/favorites'}
                        >
                        <button>
                        Favorites
                        </button>
                        </Link>
                        <button
                        onClick={logout}>
                        Cerrar sesion
                        </button>
                    </>
                ) : ('')
            }  
        </>
    )
}