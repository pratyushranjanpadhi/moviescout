import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CastScreen from "./screens/CastScreen";
import FilteredListScreen from "./screens/FilteredListScreen";

import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import ScrollToTop from "./ScrollToTop";

const App = () => {
   return (
      <Router>
         <ScrollToTop />
         <Route path="/" exact component={HomeScreen} />
         <Route path="/movies/:genre" component={HomeScreen} />
         <Route path="/movie/:id" component={MovieScreen} />
         <Route path="/cast/:id" component={CastScreen} />
         <Route path="/:filteredKeyword" exact component={FilteredListScreen} />
      </Router>
   );
};
export default App;
