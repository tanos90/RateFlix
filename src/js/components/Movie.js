import React from 'react';
import styled from 'styled-components';

export default class Movie extends React.Component {
    constructor(props) {
        super(props)

    }



    render() {      
        const {movie} = this.props;
        return (
            <div>
            {
                
                <div key={movie.Title}>
                    <div class="container-fluid">
                        <Image class="col-md-1" src={movie.Poster} alt="" />
                        <div class= "col-md-4"><h2>{movie.Title}</h2>
                            <h3>{movie.Year}</h3> 
                            <h3>{movie.Metascore / 10}/10 Score</h3>  
                        </div>
                    </div>
                    <div class="container-fluid">
                        <p>
                            <span class="glyphicon glyphicon-calendar" style={{marginRight: .5 + 'em'}}> </span>
                            Release on {movie.Released}</p>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
            }

                
            </div>
        );
    }
}

const Image = styled.img`
  width : 15%;
  margin: 5px;
`;
