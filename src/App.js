import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import SecondaryHeader from "./SecondaryHeader";
import Signup from "./Signup";
import SignUpHeader from "./SignUpHeader";
import Profile from "./profile";
import Discussion from "./Duscussion";
import Resources from "./Resources";

const arr = [
  {
    title: "Hello World",
    body: "qkbshcxbdkjwhfxzwxejkbxfzzwbbkxnbwxz",
    link: "www.google.com",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArr = arr.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Signup/>
      {/* Main Header */}
      <SignUpHeader/>
      <Profile/>
      <Discussion/>
      <Resources/>
      <Header />


      {/* Secondary Header */}
      <SecondaryHeader />


      {/* Search Bar */}
      <div class="searchBar">
        <input
          type="text"
          placeholder="Search projects, ideas, etc"
          value={searchTerm}
          onChange={handleSearchChange}
          class="customInput"
        />
        {/* <div class= "vector">hionhj</div> */}
      </div>


     
      {/* Cards */}
      {filteredArr.map((a) => (
        <Card key={a.title} title={a.title} body={a.body} link={a.link} />
      ))}
    </div>
  );
}

export default App;
