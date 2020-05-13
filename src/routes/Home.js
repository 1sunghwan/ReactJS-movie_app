import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
    state = {
        movies: [],
        isLoading: true,
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json');
        this.setState({ movies, isLoading: false });
        console.log(this.state.movies);
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading ? 'Loading..' : movies.map(v => {
                    return (
                        <Movie id={v.id} title={v.title} year={v.year} summary={v.summary} poster={v.medium_cover_image} genre={v.genres} />
                    )
                })}
            </div>
        )
    }
}
export default Home;