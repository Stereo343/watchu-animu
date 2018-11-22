import React, {Component} from 'react';

class Category extends Component {
    render() {
        return (
            <li className="categories">
                {this.props.attr.name}
            </li>
        );
    }
}

export default Category;
