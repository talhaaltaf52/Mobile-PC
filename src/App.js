import React from 'react';
import AboutUs from './Components/AboutUs/AboutUs';
import MainCards from './Components/Cards/MainCards';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import SessionOne from './Components/SessionOne/SessionOne';
import SessionTwo from './Components/SessionTwo/SessionTwo';


const App = () => {
  return(
    <>
      <Header />
      <Navbar />
      <Home />
      <SessionOne />
      <SessionTwo />
      <MainCards />
      <AboutUs />
      <Review />
      <Footer />
    </>
  );
}

export default App;