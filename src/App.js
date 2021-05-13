import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";

const App = () => {
   return (
      <Router>
         <Route path="/" exact component={HomeScreen} />
         <Route path="/movie/:id" component={MovieScreen} />
         <Route path="/movies/:genre" component={HomeScreen} />
      </Router>
   );
};
export default App;
