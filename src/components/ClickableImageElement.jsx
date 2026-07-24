const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  hoverClass,
  onClick,
  altValue,
  titleValue,
}) => (
  <div className={hoverClass}>
    <img
      className={imageClass}
      src={srcValue}
      alt={altValue}
      title={titleValue}
      onClick={onClick}
    />
  </div>
);

export default ClickableImageElement;
