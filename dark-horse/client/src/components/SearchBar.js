import React from "react";
import "../styles/SearchBar.css";


function SearchBar(prop) {
    return (
       <div className="searchbox">
           <span className="searchtitle"></span>
           <input
                id="search"
                className="search-control"
                type="search"
                placeholder="Search for bands"
                name="searchedBand"
                value={prop.search}
                onChange={prop.handleInputChange}
                onKeyPress={prop.handleKeyPress}
           />
           <button className="searchtbn" onClick={prop.handleSubmit}>Search</button>
       </div> 
    )
}





export default SearchBar;