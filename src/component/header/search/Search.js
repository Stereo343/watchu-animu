import React, {Component} from 'react';
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="menu-item">
                <a href="#" className="search-button">Rechercher</a>
                <input className="header-search"/>
            </li>
        );
    }
}

export default Search;
