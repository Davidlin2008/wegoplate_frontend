import Footer from "../../Components/Footer";
import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";
import "../../Styles/Common.scss";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Footer />
      </div>
    );
  }
}
