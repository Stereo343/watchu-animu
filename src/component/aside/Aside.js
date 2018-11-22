import React, {Component} from 'react';
import Category from './category/Category'
import './Aside.css'

class Aside extends Component {
    render() {
        return (
            <aside className={"main-aside"}>
                <ul>
                    {
                        this.props.categories.map((el) => {
                            return el.data.map((element) => {
                                return <Category key={element.id} attr={element.attributes} />
                            })
                        })
                    }
                </ul>
            </aside>
        );
    }
}

export default Aside;
