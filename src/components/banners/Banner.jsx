import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import image1 from "../../assets/images/banners/banner1.webp";
import image2 from "../../assets/images/banners/banner2.webp";
import image3 from "../../assets/images/banners/banner3.webp";
import image4 from "../../assets/images/banners/banner4.webp";
import image5 from "../../assets/images/banners/banner5.jpg";
import image6 from "../../assets/images/banners/banner6.webp";
import image7 from "../../assets/images/banners/banner7.jpg";
import image8 from "../../assets/images/banners/banner8.webp";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const bannerImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`banner-${index}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
