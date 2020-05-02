import React from "react";
import Image from "./Image";
import "./ImageList.css";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return <Image key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
