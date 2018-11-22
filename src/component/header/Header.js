import React, {Component} from 'react';
import Menu from './menu/Menu';
import Search from  './search/Search';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <ul>
                    <Menu itemName={'Indexu'}/>
                    <Menu itemName={'My listu'}/>
                    <Search/>
                </ul>
            </header>
        );
    }
}

export default Header;
