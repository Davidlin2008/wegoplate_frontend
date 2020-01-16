import React from "react";
import ListEntry from "./ListEntry";

export function List(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.datas.map(data => (
        <ListEntry data={data} />
      ))}
    </>
  );
}
