import React, {Component} from 'react';
import './Anime.css'

class Anime extends Component {
    render() {
        console.log(this.props.attr);
        return (
            <section style={
                {backgroundImage: 'url(' +
                        this.props.attr.coverImage.original + ')',
                }
            }>
                <h1>{this.props.attr.titles.en}</h1>
                <p>{this.props.attr.averageRating}</p>
            </section>
        );
    }
}

export default Anime;
