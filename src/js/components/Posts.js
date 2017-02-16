import React from 'react';

export default class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        };
    }


    componentDidMount() {
        let self = this;
        self.getMovies(['tt3748528','tt0083658']);
    }


    getMovies(movies) {
        let self = this;
        movies.map(movie => 
            fetch(`https://www.omdbapi.com/?i=${movie}&plot=short&r=json`)
            .then(function(response) {
                    response.json()
                        .then(res => { 
                            self.setState({movies: [res]});
                        });
                }));
    }

    handleChange(e) {
        const searchText = e.target.value;
        this.props.search(searchText);
    }

    render() {
      
        const {movies} = this.state;
        return (
            <div class="well">
            {            
                movies.map(movie => 
                <div key={movie.Title}>
                    <h1 class="page-header">
                        {movie.Title}
                        <small>  {movie.Year}</small>
                    </h1>
                    <p class="lead">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        {movie.Metascore / 10}/10 Score
                        <a href="index.php">{}</a>
                    </p>
                    <p>
                        <span class="glyphicon glyphicon-calendar" style={{marginRight: .5 + 'em'}}> </span>
                         Release on {movie.Released}</p>
                    <hr/>
                    <img class="img-responsive" src={movie.Poster} alt=""/>
                    <hr/>
                    <p>{movie.Plot}</p>
                    <a class="btn btn-primary" href="#">Read More
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                    <hr/>
                </div>
                )
            }        
            </div>
        );
    }
}