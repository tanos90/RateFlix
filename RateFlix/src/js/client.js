import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import About from './Pages/About';
import Home from './Pages/Home';
import Layout from './components/Layout';
import Movie from './components/Movie';
import UserProfile from './Pages/UserProfile';

const app = document.getElementById('app');

const routes = (    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}/>
            <Route path="userprofile" name="userprofile" component={UserProfile}/>
            <Route path="movie/:title" name="movie" component={Movie}/>
        </Route>
    </Router>
);

ReactDOM.render(routes,app);