import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Join} />

      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
