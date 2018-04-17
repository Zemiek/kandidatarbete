import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

const MKSearch = () => (
    <div>
    <SearchBar/>
    </div>
);

const wrapper = document.getElementById("SearchBar");

wrapper ? ReactDOM.render(<SearchBar />, wrapper) : null;
