import React from 'react';
import MovieList from './MovieList';
import About from './About';




class App extends React.Component {
    state = {
        movies : [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qs7zl4XxPqfczYpQHTeHwI1WoGv.jpg"
            },
        
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y1TKElkgWOl90iFik3GHlgJdphm.jpg"
            },
        
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v6zknpjyE9NyBj6MCnlZJ1w58Se.jpg"
            },
            {
                "id": 4,
                "name": "DC's Legends of Tomorrow",
                "rating": 7.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lN7Hx9MbnCbUdGAmomk6pCmUOJ8.jpg"
            }


        ]

    }

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState({
            movies : newMovieList
        })
    }

    render() {
        return (
            <div>
               <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>

                    </div>
                </div>
                <MovieList
                movies={this.state.movies}
                deleteMovieProp = {this.deleteMovie}/>
               </div>
            </div>
            
        )
    }

};


export default App;

