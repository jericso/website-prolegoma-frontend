const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  onClick,
}) => (
  <>
    <td className={elementClass}>
      <img className={imageClass} src={srcValue} onClick={onClick} />
    </td>
  </>
);

export default ClickableImageElement;
