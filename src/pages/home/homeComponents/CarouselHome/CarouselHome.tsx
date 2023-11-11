import { Carousel } from "react-bootstrap";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <Carousel className="carouselHome">
      <Carousel.Item>
      <img
          className="carouselImage"
          src="https://elfaro.net/images/cache/3000x1200/crop_0_23_2999_1224/images%7Ccms-image-000038447.jpg"
          alt="first-image"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src="https://elfaro.net/images/cache/3000x1200/crop_0_23_2999_1224/images%7Ccms-image-000038447.jpg"
          alt="second-image"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src="https://elfaro.net/images/cache/3000x1200/crop_0_23_2999_1224/images%7Ccms-image-000038447.jpg"
          alt="third-image"
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselHome;
