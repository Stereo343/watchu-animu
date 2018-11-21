import React, {Component} from 'react';
import Category from './category/Category'

class Aside extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={"main-aside"}>
                <ul>
                    <Category/>
                </ul>
            </aside>
        );
    }
}

export default Aside;
