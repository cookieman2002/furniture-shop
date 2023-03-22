import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const Tips = () => {
  return (
    <Carousel showThumbs={true}>
      <div
        className="bg-black h-64"
        styles={{ height: "200px", color: "#fff" }}
      >
        <div>
            <img src="" alt="" />
            <h1></h1>
        </div>
      </div>
      <div styles={{ height: "200px", color: "#fff" }}>Farvel</div>
      <div styles={{ height: "200px", color: "#fff" }}>blå</div>
    </Carousel>
  );
};

export default Tips;
