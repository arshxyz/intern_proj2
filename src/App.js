import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import { Heading } from "./components/Jumbotron/Heading";
import { Showcase, SlidingShowcase } from "./components/Showcase";
import { Reviews } from "./components/Reviews";
import { EmailInput } from "./components/EmailInput";
import { BlogCard } from "./components/BlogCard";
import { Footer } from "./components/Footer";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elit nec luctus condimentum. Nullam a nisi consectetur, posuere tortor eget, ornare libero.";
const SlideShowImages = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img1.png",
  "/img2.png",
  "/img3.png",
];

function App() {
  return (
    <div className="App">
      <div class="top-banner">
        <Navbar />
      </div>
      <Jumbotron />
      <Heading text={lorem} img="/leaves.png" title="Welcome to Nature" />
      <Showcase />
      <Heading text={lorem} title="Proudly presented by" />
      <SlidingShowcase slides={4} imgs={SlideShowImages} center={false} />
      <div className="tendril">
        <Reviews />
        <Heading text={lorem} title="Subscribe to our Newsletter" />
        <EmailInput />
      </div>
      <Heading text={lorem} title="Read Our Blog" img="/leaves.png" />
      <BlogCard />
      <Footer />
    </div>
  );
}

export default App;
