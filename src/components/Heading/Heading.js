import "./Heading.css";

export const Heading = (props) => {
  return (
    <div className="heading-info">
      {props.img ? <img src={props.img} /> : null}
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};
