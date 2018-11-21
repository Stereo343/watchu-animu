import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="menu-item"><a href="#">{this.props.itemName}</a></li>
        );
    }
}

export default Menu;
