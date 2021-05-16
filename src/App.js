import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CastScreen from "./screens/CastScreen";

import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import ScrollToTop from "./ScrollToTop";

const App = () => {
   return (
      <Router>
         <ScrollToTop />
         <Route path="/" exact component={HomeScreen} />
         <Route path="/movie/:id" component={MovieScreen} />
         <Route path="/movies/:genre" component={HomeScreen} />
         <Route path="/cast/:id" component={CastScreen} />
      </Router>
   );
};
export default App;
