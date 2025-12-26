import React from 'react';
import Slider from 'react-slick';
import { Dropdown, Button } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import './HeroSection.scss';
import hero1 from '../../assets/images/man.jpg';
import hero2 from '../../assets/images/man.jpg';
import hero3 from '../../assets/images/man.jpg';

const HeroSection = () => {
  const images = [hero1, hero2, hero3];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className='hero-section'>
      <div className='hero-left'>
        <Slider
          autoplay={false}
          {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} className='image-left'>
              <img
                src={img}
                alt={`Hero ${index}`}
                className='hero-img'
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className='hero-right'>
        <div className='hero-content'>
          <div className='hero-buttons'>
            <Dropdown className='me-2'>
              <Dropdown.Toggle
                className='dropdown-no-arrow'
                id='dropdown-programs'>
                Programs
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Program 1</Dropdown.Item>
                <Dropdown.Item href='#'>Program 2</Dropdown.Item>
                <Dropdown.Item href='#'>Program 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='me-2'>
              <Dropdown.Toggle
                className='dropdown-no-arrow'
                id='dropdown-business'>
                Business Service
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Service 1</Dropdown.Item>
                <Dropdown.Item href='#'>Service 2</Dropdown.Item>
                <Dropdown.Item href='#'>Service 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <h1 className='hero-title'>
            Everyone deserves to live a purposeful, meaningful life.
          </h1>
          <p className='hero-desc'>
            We offer access to the resources, opportunities, and support people
            need to thrive in Minnesota and Western Wisconsin.
          </p>

          <Button
            variant='primary'
            className='me-2'>
            Find Your Program
          </Button>
          <Button variant='outline-primary'>Donate</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
