const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  hoverClass,
  onClick,
  altValue,
  titleValue,
}) => (
  <td className={elementClass}>
    <div className={hoverClass}>
      <button type="button" className="image-button" onClick={onClick}>
        <img
          className={imageClass}
          src={srcValue}
          alt={altValue}
          title={titleValue}
        />
      </button>
    </div>
  </td>
);

export default ClickableImageElement;
