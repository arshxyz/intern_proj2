import "./Reviews.css";
import Slider from "react-slick";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import lorem from "../LoremText";

const review = (
  <div className="review">
    <img src="/portrait.png" className="profile-pic" />
    <div className="star-row">
      <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
      <StarBorderIcon /> <StarBorderIcon />
    </div>
    <p>{lorem}</p>
  </div>
);

const reviews = [review, review, review];

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
  };
  return (
    <div className="quote">
      <img src="/quote.png" />
      <Slider {...settings}>{reviews.map((review) => review)}</Slider>
    </div>
  );
};
