import React, {Component} from 'react';
import './Anime.css'

class Anime extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.id}
                {this.props.averageRating}
            </div>
        );
    }
}

export default Anime;
