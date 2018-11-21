import React, {Component} from 'react';
import List from './list/List'
import Aside from '../aside/Aside'
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div>
                    <List
                        title={"Les Populaires"} animu={this.props.popularAnimu}/>
                </div>
                <Aside/>
            </main>
        );
    }
}

export default Main;
