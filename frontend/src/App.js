import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/nav";
import Homepage from "./Pages/homepage";
import Character from "./Pages/character";
import Footer from "./Pages/footer";
import NotFound from "./Pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/not-found" component={NotFound} />
        <Route path="/:id" component={Character} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
