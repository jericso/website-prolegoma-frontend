const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  hoverClass,
  onClick,
}) => (
  <>
    <td className={elementClass}>
      <div className={hoverClass}>
        <img className={imageClass} src={srcValue} onClick={onClick} />
      </div>
    </td>
  </>
);

export default ClickableImageElement;
