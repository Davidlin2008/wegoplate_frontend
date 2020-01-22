import React from "react";
import Header from "./Header";
import Index from "../../Components/Nav";
import RstList from "./RstList";

const TopList = props => {
  return (
    <>
      <Index />
      <Header params={props.match.params.name} />
      <RstList params={props.match.params.name} />
    </>
  );
};

export default TopList;
