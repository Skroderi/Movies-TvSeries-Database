import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

// CSS
import "../stylesheet/Main.scss";

// Components
import Movies from "./Movies";
import Tvseries from "./Tvseries";
import FilterMovies from "./FilterMovies";
import MainTemplate from "../templates/MainTemplate";
import FilterTvs from "./FilterTvs";
import ItemDetails from "./ItemDetails";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

function Root() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/movies" />} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/popular" component={FilterMovies} />
            <Route exact path="/movies/top_rated" component={FilterMovies} />
            <Route exact path="/tvs/popular" component={FilterTvs} />
            <Route exact path="/tvs/top_rated" component={FilterTvs} />
            <Route path="/movies/movie/:id" component={ItemDetails} />
            <Route path="/tvs/tv/:id" component={ItemDetails} />
            <Route exact path="/tvs" component={Tvseries} />
          </Switch>
        </MainTemplate>
      </HashRouter>
    </Provider>
  );
}

export default Root;
