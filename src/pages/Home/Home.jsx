import React from 'react'
import './Home.css'
import clinica1 from "../../img/clinica1.jpg"
import clinica2 from "../../img/clinica2.jpg"
import clinica3 from "../../img/clinica3.jpg"

import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {


  return (
    <div className='homeDesign'>
        <div className='imgHome'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={clinica1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Bienvenido a la Clinica Grand Line</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={clinica2}
              alt="Second slide"
            />
            <Carousel.Caption>
            <h1>Bienvenido a la Clinica Grand Line</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={clinica3}
              alt="Third slide"
            />
            <Carousel.Caption>
            <h1>Bienvenido a la Clinica Grand Line</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}
