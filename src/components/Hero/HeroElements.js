import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ImgBg});
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0rem calc((100% - 1280px) / 2);
`;

export const HeroItems = styled.div`
  height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;
  width: 640px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 4px 6px #ebba23;
  letter-spacing: 2px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  outline: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    color: #333;
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
