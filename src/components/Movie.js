import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, year, title, poster, summary, genre }) {
    return (
        <div>
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    poster,
                    summary,
                    genre,
                }
            }
            }>
                <img src={poster} alt={title} />
                <div>
                    <div>{title}</div>
                    <div>{year}</div>
                    <ul>{genre.map(v => {
                        return <li>{v}</li>;
                    })}
                    </ul>
                    <div>{summary.slice(0, 180)}</div>
                </div>
            </Link>
        </div >
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;