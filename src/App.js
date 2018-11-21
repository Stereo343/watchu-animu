import React, {Component} from 'react';
import './App.css';
import KitsuApiController from './controller/KitsuApiController';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popular: [],
            recent: [],
            categories: [],
        }
    }

    componentDidMount() {
        KitsuApiController.popularAnime().then(response => {
            this.setState({popular: response.data})
        });

        KitsuApiController.recentAnime().then(response => {
            this.setState({recent: response.data})
        });

        KitsuApiController.getCategories().then(response => {
            this.setState({categories: response})
        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
