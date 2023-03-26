import React from 'react'
import './Home.css'

import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {


  return (
    <div className='homeDesign'>
        <div className='imgHome'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src="/src/img/clinica1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bienvenido a la Clinica Grand Line</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src="/src/img/clinica2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Bienvenido a la Clinica Grand Line</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src="/src/img/clinica3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Bienvenido a la Clinica Grand Line</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}
