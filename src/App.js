import "./App.css";

import React, { Component } from "react";
import Header from "./Header";
import News from "./News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";

//API 1 : (vit) -> d6e29b97ef5849b4bf5c280016316b7b
//API 2 : (gwalior) -> a2c2dd3b87474c119471b7bdb1713945

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route exact
              path="/"
              element={
                <div>
                  <Header></Header>
                  <News key="general" pageSize={9} country="in" category="general" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <Header></Header>
                  <About></About>
                </div>
              }
            />
            <Route exact
              path="/sports"
              element={
                <div>
                  <Header></Header>
                  <News key="sports" pageSize={9} country="in" category="sports" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route exact
              path="/business"
              element={
                <div>
                  <Header></Header>
                  <News key="business" pageSize={9} country="in" category="business" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route exact
              path="/entertainment"
              element={
                <div>
                  <Header></Header>
                  <News key="entertainment" pageSize={9} country="in" category="entertainment" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route exact
              path="/health"
              element={
                <div>
                  <Header></Header>
                  <News key="health" pageSize={9} country="in" category="health" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route exact
              path="/science"
              element={
                <div>
                  <Header></Header>
                  <News key="science" pageSize={9} country="in" category="science" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            <Route exact
              path="/technology"
              element={
                <div>
                  <Header></Header>
                  <News key="technology" pageSize={9} country="in" category="technology" apiKey="d6e29b97ef5849b4bf5c280016316b7b"></News>
                </div>
              }
            />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
