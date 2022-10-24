import "./App.css";

import React, { Component } from "react";
import Header from "./Header";
import News from "./News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import LoadingBar from "react-top-loading-bar";

//API 1 : (vit) -> d6e29b97ef5849b4bf5c280016316b7b
//API 2 : (gwalior) -> a2c2dd3b87474c119471b7bdb1713945

export default class App extends Component {
  pageSize = 9;
  apiKey = "a2c2dd3b87474c119471b7bdb1713945";
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                    apiKey={this.apiKey}
                  ></News>
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
            <Route
              exact
              path="/sports"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={this.pageSize}
                    country="in"
                    category="business"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <div>
                  <Header></Header>
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                    apiKey={this.apiKey}
                  ></News>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
