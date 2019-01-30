import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import New from './components/New';


export default () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/counter' component={Counter} />
            <Route exact path='/fetch-data/:startDateIndex?' component={FetchData} />
            <Route exact path='/new' component={New} />
            <Redirect from='/' to="/" />
        </Switch>
    </Layout>
);




