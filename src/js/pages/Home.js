import React from 'react';

import Categories from '../Components/Categories';
import LoadMore from '../Components/LoadMore';
import Posts from '../Components/Posts';
import Search from '../Components/Search';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h4>Home</h4>
                <div class="container">
                    <hr/>
                    <div class="row">
                        <div class="col-md-8">

                            <Posts/>
                            
                            <LoadMore/>

                        </div>

                        <div class="col-md-4">

                            <Search history={this.props.router}/>

                            <Categories/>


                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }



};