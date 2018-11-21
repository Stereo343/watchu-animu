import React, {Component} from 'react';
import './App.css';
import KitsuApiController from './controller/KitsuApiController';
import Header from './component/header/Header';
import Main from './component/main/Main';

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
                <Header/>
                <Main
                    popularAnimu={this.state.popular}/>
            </div>
        );
    }
}

export default App;
