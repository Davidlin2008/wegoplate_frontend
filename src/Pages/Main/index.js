import React, { Component } from "react";
import Index from "../../Components/Nav";
import Header from "../../Components/Header";
import "../../Styles/Common.scss";
import MainList from "./MainList";
import Footer from "../../Components/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Index />
        <Header {...this.props} />
        <MainList {...this.props} />
        <Footer />
      </div>
    );
  }
}
