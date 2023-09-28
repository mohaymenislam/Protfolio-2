import React from 'react';
import './App.css';
import Header from './components/Head/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <Features></Features>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default App;