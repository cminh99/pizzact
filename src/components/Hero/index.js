import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroButton,
} from './HeroElements';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Yummy Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroButton>Place Order</HeroButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
