const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  hoverClass,
  onClick,
  altValue,
  titleValue,
}) => (
  <>
    <td className={elementClass}>
      <div className={hoverClass}>
        <img
          className={imageClass}
          src={srcValue}
          alt={altValue}
          title={titleValue}
          onClick={onClick}
        />
      </div>
    </td>
  </>
);

export default ClickableImageElement;
