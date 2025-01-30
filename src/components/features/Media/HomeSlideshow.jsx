import styled from "styled-components";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import vaxtverketDesign from "./../../../assets/vaxtverketDesign.png";
import vhvhStartsida from "./../../../assets/vhvhStartsida.png";
import awesomeMemory from "./../../../assets/awesomeMemory.png";
import unify from "./../../../assets/unify.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const StyledCol = styled(Col)`
  background: #ececec;
  border-radius: 20px;
  box-shadow: -4px 4px 5px #cecece;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    border-radius: 50%;
  }

  .carousel-indicators,
  .carousel-caption {
    background: none !important;
  }
`;

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className="justify-content-center">
      <StyledCol xs={11} sm={9} md={6} className="p-3">
        <div className="d-flex flex-column text-center">
          <StyledCarousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Link to="/projects#vhvh">
                <img src={vhvhStartsida} text="vhvhStartsida" />
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/projects#awesomeMemory">
                <img src={awesomeMemory} text="awesome memory" />
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/projects#vaxtverket">
                <img src={vaxtverketDesign} text="växtverket" />
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/projects#unify">
                <img src={unify} text="unify" />
              </Link>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </StyledCarousel>
        </div>
      </StyledCol>
    </Row>
  );
}

export default Slideshow;
