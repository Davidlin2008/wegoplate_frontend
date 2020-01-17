import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import SignIn from "./Pages/SignIn";
import EatDealDetail from "./Pages/EatDeal/EatDealDetail";
import SignUp from "./Pages/SignUp";
import EatDealMain from "./Pages/EatDeal/EatDealMain";
import Detail from "./Pages/Detail";
import Review from "./Pages/Review";
import TopList from "./Pages/TopList";
import SearchLists from "./Pages/SearchLists";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/detail" component={EatDealDetail} />
          <Route exact path="/detail" component={Detail} />
          <Route path="/eatdeal" component={EatDealMain} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/toplist" component={TopList} />
          <Route path="/search" render={props => <SearchLists {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
