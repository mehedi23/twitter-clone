import React from 'react';
import './widget.css';
import SearchIcon from '@material-ui/icons/Search';
import Trebds from './Trebds';


function Widget() {
    return (
        <div className="widget">
            <form className="search-box" >
                <SearchIcon  className="icons"/>
                <input placeholder="Search Twitter"/>
            </form>
            <Trebds/>
        </div>
    )
}

export default Widget
