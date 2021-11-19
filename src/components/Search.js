import React from 'react'

const Search = ({handleClick,searchMovies}) => {
    return (
        <div className="search-wrap">
            <input type="text" 
             name=""
             id="" 
             placeholder="Search for movies..." 
             className="searchbox" 
             onChange={handleClick}
             onKeyPress={searchMovies} />
        </div>
    )
}

export default Search
