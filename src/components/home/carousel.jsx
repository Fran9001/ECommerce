import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <div className="custom-dot"></div>,
    appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      image: "./Silla.jpeg",
      title: "Silla Gamer Corsair TC100 Relaxed Negro Negro",
      price: "$364.889",
    },
    {
      image: "./Silla.jpeg",
      title: "Silla Gamer Corsair T3 RUSH Gris Blanco",
      price: "$453.549",
    },
    {
      image: "./Silla.jpeg",
      title: "Silla Gamer Corsair T3 RUSH Negro",
      price: "$453.549",
    },
    {
      image: "./Silla.jpeg",
      title: "Fuente Thermaltake Smart BM2 650W Semi Modular 80 Plus Bronze",
      price: "$84.459",
    },
    {
      image: "./Silla.jpeg",
      title: "Barra De Sonido Redragon GS570 Darknet Soundbar",
      price: "$44.999",
    },
  ];

  return (
    <div className="container mx-auto mt-24 px-10 sm:px-14">
      <h2 className="text-center gap-2 pl-4 py-8 rounded-t-2xl text-stone-700 text-3xl font-bold bg-gradient-to-r from-green-400 via-green-200 to-green-400">
        {props.title}
      </h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div className="shadow-2xl rounded-lg overflow-hidden">
              <img
                src={require(`${item.image}`)}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <div className="flex flex-col justify-between p-4 h-32">
                <h3 className="text-sm font-semibold text-stone-500">{item.title}</h3>
                <p className="text-xl font-bold text-green-400">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
