import React, {Component} from 'react';
import './List.css'
import Anime from './anime/Anime'

class List extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.animu.data);
        return (
            <section className="Video-line">
                <h2>{this.props.title}</h2>
                <div className={"Scroll-view"}>
                    {
                        this.props.animu.map((el) => {
                            return <Anime
                                id={el.id}
                                averageRating={el.attributes.averageRating}/>
                        })
                    }
                </div>
            </section>
        );
    }
}

export default List;
