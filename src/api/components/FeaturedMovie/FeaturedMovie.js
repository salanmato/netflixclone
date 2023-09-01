import React from "react";
import './FeaturedMovie.css'

export default ({ item }) => {
    let firstDate = new Date(item.first_air_date)
    let genres = []
    for (let genre in item.genres) {
        genres.push(item.genres[genre].name)
    }
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured--gradient">
                <div className="featured--name">{item.name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average.toFixed(1)}</div>
                    <div className="featured--year"><strong>{firstDate.getFullYear()}</strong></div>
                    <div className="featured--seasons">{item.seasons.length} season{item.seasons.length === 1 ? '' : 's '}</div>
                </div>
                <div className="featured--overview">{item.overview}</div>
                <div className="featured--buttons">
                    <a href="" className="featured--watchbutton">Watch</a>
                    <a href="" className="featured--mylistbutton">+ My List</a>
                </div>
                <div className="featured--genres"><strong>Genres: </strong>{genres.join(' - ')}</div>
            </div>
        </section>
    )
}