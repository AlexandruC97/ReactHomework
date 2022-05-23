import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddBtn from './components/AddBtn';
import FilterSelect from './components/FilterSelect';
import Article from './components/Article';
import AddModal from './components/AddModal';
import React, { useState, useEffect } from "react";


function App() {
  return (
    <div>
      <div className="container">
        <Navbar></Navbar>
        <AddBtn></AddBtn>
        <FilterSelect></FilterSelect>
        <Article></Article>
        <Footer></Footer>
      </div>
      <div>
        <AddModal></AddModal>
      </div>
    </div>
  );
}

export default App;
