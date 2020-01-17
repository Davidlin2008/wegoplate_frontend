import React, { Component } from "react";
import Index from "../../Components/Nav";
import Header from "../../Components/Header";
import "../../Styles/Common.scss";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Index />
        <Header {...this.props} />
        <Footer />
      </div>
    );
  }
}
