import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SearchPage from "./components/search_page/SearchPage";
import DocsPage from "./components/docs_page/DocsPage";
import './App.css';

export default class App extends Component{
    constructor(props: any) {
        super(props);
    }

    render(){
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<SearchPage/>}/>
                        <Route path="/documentation" element={<DocsPage/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);