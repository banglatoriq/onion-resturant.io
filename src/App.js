import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Portfolio from './Component/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import FoodCategory from './Component/FoodCategory/FoodCategory';
import Breakfast1 from './Component/Breakfast1/Breakfast1'




function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <FoodCategory></FoodCategory>
     <Breakfast1></Breakfast1>
     <Portfolio></Portfolio>
     <Footer></Footer>
    </div>
  );
}

export default App;
