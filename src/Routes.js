import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import VideoDisplay from './Components/VideoDisplay.js';
//import About from "./About/About";
import Course from './Components/Course.js';
//import Products from './Product/Products';
import Dashboard from './Components/Dashboard.js';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Dashboard" exact component={Dashboard} />
                    <Route path="/Course" exact component={Course} />
                    <Route path="/SmartBuild" exact component={VideoDisplay} />
                </Switch>
            </Router>
        )
    }
}