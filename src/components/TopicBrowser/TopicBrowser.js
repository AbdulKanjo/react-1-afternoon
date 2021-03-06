import React, { Component } from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Sum from "../Topics/Sum";
import Palindrome from "../Topics/Palindrome";

class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Sum />
        <Palindrome />
      </div>
    );
  }
}
export default TopicBrowser;
