import React, {Component} from 'react';
import List from './list/List'
import Aside from '../aside/Aside'
import './Main.css'

class Main extends Component {
    render() {
        return (
            <main>
                <div>
                    <List
                        title={"Les Populaires"} animu={this.props.popularAnimu}/>
                </div>
                <Aside categories={this.props.categories}/>
            </main>
        );
    }
}

export default Main;
