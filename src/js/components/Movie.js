import React from 'react';


export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                Title :"",
                Year : "",
                Released : "",
                Metascore : "" 
            }
        };

    }


    componentWillMount() {
        let self = this;
        const {params} = self.props;
        const {title} = params;
        self.getMoviesByTitle(title);
    }


    getMoviesByTitle(title) {
        let self = this;
        fetch(`https://www.omdbapi.com/?t=$${title}&plot=short&r=json`)
            .then(function(response) {
                    response.json()
                        .then(res => { 
                            self.setState({movie: res});
                        });
                });
    }

    render() {      
        const {movie} = this.state;
        return (
            <div class="well">
            {
                
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
            }

                
            </div>
        );
    }
}