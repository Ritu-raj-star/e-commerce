import { Button, Carousel } from "react-bootstrap";
import React, { useState } from "react";
import Product from './Product'

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="assets/1.jpeg"
            alt="First slide"
            height="500px"
            style={{ objectFit: "cover" }}
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="assets/2.jpeg"
            alt="Second slide"
            height="500px"
            style={{ objectFit: "cover" }}
          />
          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/3.jpeg"
            alt="Third slide"
            height="500px"
            style={{ objectFit: "cover" }}
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/4.jpeg"
            alt="fourth slide"
            height="500px"
            style={{ objectFit: "cover" }}
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Product/>
    </>
  );
}
