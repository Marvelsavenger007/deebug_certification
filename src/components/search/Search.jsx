import React, {useState} from 'react';
import search from "../images/search.png";
import "./search.css"

const Search = () => {
    const [expanded, setExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const toggleSearch = () => {
      setExpanded(!expanded);
      setSearchTerm(''); // Clear search term when collapsing
    };
  
    return (
        <div className="search-bar">
            <img
                src={search}
                width="15px"
                height="15px"
                alt="Search"
                className="search-icon"
                onClick={toggleSearch}
            />
            {expanded && (
            <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}
        </div>
    );
  };

export default Search