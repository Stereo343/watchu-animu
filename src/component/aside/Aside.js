import React, {Component} from 'react';
import Category from './category/Category'

class Aside extends Component {
    render() {
        return (
            <aside className={"main-aside"}>
                <ul>
                    {
                        this.props.categories.map((el) => {
                            return <li>coucou</li>
                        })
                    }
                </ul>
            </aside>
        );
    }
}

export default Aside;
