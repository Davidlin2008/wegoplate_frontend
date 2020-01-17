import React from "react";
import SearchList from "../../Components/SearchList/SearchList";

export default function SearchLists(props) {
  console.log(props);
  return (
    <div>
      <SearchList {...props} />
    </div>
  );
}
