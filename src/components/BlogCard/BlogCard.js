import "./BlogCard.css";
import { Grid } from "@material-ui/core";
import lorem from "../LoremText";

const BlogFragment = (props) => {
  return (
    <Grid item md={3} xs={8}>
      <div class="card">
        <img src={props.img} style={{ width: "100%" }} />
        <div class="title">
          <h4>{props.title}</h4>
        </div>
        <p>{lorem}</p>
        <span className="read-more">Read More</span>
      </div>
    </Grid>
  );
};

export const BlogCard = () => {
  return (
    <Grid container justify="space-evenly">
      <BlogFragment title="Blog Post One" img="/blog1.png" />
      <BlogFragment title="Blog Post Two" img="/blog2.png" />
      <BlogFragment title="Blog Post Three" img="/blog3.png" />
    </Grid>
  );
};
