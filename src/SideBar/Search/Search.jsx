import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DialpadIcon from '@material-ui/icons/Dialpad';
import './Search.scss';
const Search = () => {
    return (
        <div className='search'>
            <div className="search__container">
                <SearchIcon />
                <input type="text" name="search" placeholder="People, group & messages"/>
                <DialpadIcon />
            </div>
        </div>
    )
}

export default Search;
