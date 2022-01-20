import React from "react";
import Carousel from "react-material-ui-carousel";
import CardOne from "./CardOne";

function Slider(props) {
  var items = props.data;
  return (
    <Carousel
      indicators={false}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
    >
      {items &&
        items
          .slice(props.index - 1)
          .map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
  );
}

let Item = (props) => <CardOne data={props} />;

export default Slider;
