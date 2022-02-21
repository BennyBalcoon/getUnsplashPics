import React from "react";
import { useState, useEffect } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);

  const { description, urls } = image;
  const imageRef = React.createRef();

  useEffect(() => {
    const height = imageRef.current.clientHeight;
    const spanSize = Math.ceil(height / 10);
    imageRef.current.addEventListener("load", setSpans);
    setSpans(spanSize);
  }, [imageRef]);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img src={urls.regular} alt={description} ref={imageRef} />
    </div>
  );
};

export default ImageCard;
