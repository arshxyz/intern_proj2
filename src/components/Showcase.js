import { Grid, Hidden } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const SlideShowImages = [
  "/showcase-item.png",
  "/showcase-item.png",
  "/showcase-item-sl.png",
  "/showcase-item.png",
];

const DesktopShowcase = (props) => (
  <Grid container justify={"space-evenly"} spacing="0">
    {props.imgs.map((img) => (
      <Grid item xs={2}>
        <img src={img} />
      </Grid>
    ))}
  </Grid>
);

export const SlidingShowcase = (props) => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    swipeToScroll: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "80px",
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {props.imgs.map((img) => (
        <div>
          <img src={img} />
        </div>
      ))}
    </Slider>
  );
};

export const Showcase = () => {
  return (
    <div>
      <Hidden smDown>
        <DesktopShowcase imgs={SlideShowImages} />
      </Hidden>
      <Hidden mdUp>
        <SlidingShowcase slides={1} imgs={SlideShowImages} center />
      </Hidden>
    </div>
  );
};
