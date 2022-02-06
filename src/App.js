import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello"><div>Hello</div></Route>
        <Route path="/movie/:id" component={Detail}/>4
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
