import React, {Component} from 'react';
import List from './list/List'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <List
                    title={"Les Populaires"} animu={this.props.popularAnimu}/>
            </main>
        );
    }
}

export default Main;
