import React, {Component} from 'react';
import './Anime.css'

class Anime extends Component {
    render() {
        return (
            <section style={
                {
                    backgroundImage: 'url(' +
                        this.props.attr.posterImage.original + ')',
                    backgroundSize: 'cover',
                }
            }>
                <div>
                    <h1>{this.props.attr.titles.en}</h1>
                    <p>{this.props.attr.averageRating}</p>
                </div>
            </section>
        );
    }
}

export default Anime;
