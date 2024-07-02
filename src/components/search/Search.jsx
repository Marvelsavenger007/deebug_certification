import React, {useState, useEffect} from 'react';
import search from "../images/search.png";
import "./search.css"

const Search = () => {
    const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 768);
  
    const handleIconClick = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(!isExpanded);
      }
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className={`search-bar-container ${isExpanded ? 'expanded' : ''}`}>
        <img 
          src={search} 
          alt="Search" 
          className="search-icon" 
          onClick={handleIconClick} 
          width="20px"
          height="20px"
        />
        <input 
          type="text" 
          placeholder="What do you want to learn" 
          className="search-input" 
        />
      </div>
);
};
  
export default Search