import styled from "styled-components";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import vaxtverketDesign from "./../../../assets/vaxtverketDesign.png";
import examensprojektet from "./../../../assets/examensprojektet.png";
import awesomeMemory from "./../../../assets/awesomeMemory.png";
import { Row, Col } from "react-bootstrap";

const StyledDiv = styled.div`
  background-color: rgb(242, 159, 5, 0.7);
  border-radius: 10px;
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
    <Row className="justify-content-center ">
      <Col xs={11} sm={9} md={6}>
        <StyledDiv className="d-flex flex-column text-center p-2 p-md-8">
          <StyledCarousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img src={examensprojektet} text="examensprojektet" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={awesomeMemory} text="awesome memory" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={vaxtverketDesign} text="växtverket" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </StyledCarousel>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default Slideshow;
