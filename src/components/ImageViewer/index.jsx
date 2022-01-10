import React from 'react';
import ImgPlaceholder from "../../dist/img/Seller/imgPlaceholder.png";

const ImageView = ({
  src,
  className,
  onClick,
  style,
  alt,
  stopPropagation = true,
  placeholder,
}) => {
  return (
    <img
      alt={alt || ""}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = ImgPlaceholder;
      }}
      src={src || placeholder || ImgPlaceholder}
      className={className}
      style={{ cursor: "pointer", ...style }}
      onClick={(e) => {
        if (stopPropagation) e.stopPropagation();
        src && window.open(src, "_blank");
        onClick && onClick(e);
      }}
    />
  );
};

export default ImageView;