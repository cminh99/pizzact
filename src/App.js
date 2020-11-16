import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import { pizzas, sweets } from './components/Products/data';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={pizzas} />
      <Feature />
      <Products heading="Sweet Treats for You" data={sweets} />
      <Footer />
    </Router>
  );
}

export default App;
