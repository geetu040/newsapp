import './App.css';
import React, { Component, useState } from 'react'
import Navbar from "./components/Navbar"
import News from "./components/News"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    
	state = { progress: 0 }
    setProgress = (progress) => {
		this.setState({progress:progress})
	}
    apiKey = process.env.REACT_APP_APIKEY
    
    render() {
        let categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
        return (<>
            <Router>
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                    height={2}
                    onLoaderFinished={() => this.setProgress(0)}
                />
                <Navbar categories={categories} />
                <Routes>
                    <Route path="/" element={
                        <News api={this.apiKey} setProgress={this.setProgress} pageSize={15} category={"general"} />
                    } />
                    {categories.map((category) => {
                        return ( <Route key={category} path={category} element={
                            <News api={this.apiKey} setProgress={this.setProgress} key={category} pageSize={15} category={category} />
                        } /> )
                    })}
                </Routes>
            </Router>
        </>)
    }

}