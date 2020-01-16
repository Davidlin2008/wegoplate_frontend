import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Styles/Common.scss";
import SearchList from "../../Components/SearchList/SearchList";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchList />
        <Footer />
      </div>
    );
  }
}
