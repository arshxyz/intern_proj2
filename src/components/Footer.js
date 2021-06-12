import { Grid } from "@material-ui/core";
import "./Footer.css";

export const Footer = () => (
  <div className="footer">
    <Grid container className="footer-content">
      <Grid item md={4} xs={12} className="footer-column">
        <ul>
          <li><img src="/organic2.png" /></li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor </li>
            <li>
            <b>© Copyright 2020 Nature</b>
            </li>

        </ul>
      </Grid>

      <Grid item md={4} xs={12} className="footer-column">
        <ul>
          <li><h3 className="footer-title">Information</h3></li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms Of Service</li>


        </ul>
      </Grid>
      <Grid item md={4} xs={12} className="footer-column">
        <ul>
          <li><h3 className="footer-title">Follow Us</h3></li>
          <li className="social">
            <img src="/fb.png" />
            <img src="/linkedin.png" />
            <img src="/instagram.png" />
          </li>


        </ul>
      </Grid>
      
      
      

    </Grid>
  </div>
)