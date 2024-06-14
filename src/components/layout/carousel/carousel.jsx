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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="container mx-auto mt-16 md:mt-20 px-10 sm:px-14">
      <h2 className="text-center gap-2 pl-0 py-2 md:pl-4 md:py-4 rounded-t-2xl text-stone-700 text-3xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-400 dark:from-green-700 dark:via-green-400 dark:to-green-700">
        {props.title}
      </h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4 dark:bg-stone-300 dark:border-b-zinc-100 dark:border-b-4">
            <div className="shadow-2xl rounded-lg overflow-hidden">
              <img
                src={require(`${item.image}`)}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <div className="flex flex-col justify-between p-4 h-32 bg-stone-200 dark:bg-stone-600">
                <h3 className="text-sm font-semibold text-stone-600 dark:text-white">{item.title}</h3>
                <p className="text-xl font-bold text-green-500 dark:text-green-300">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
