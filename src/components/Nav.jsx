import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({ onSearch }) {
    return(
        <>
            <SearchBar 
            onSearch={onSearch}
            />
        </>
    )
}