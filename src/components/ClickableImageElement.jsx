const ClickableImageElement = ({
  srcValue,
  elementClass,
  imageClass,
  onClick,
}) => (
  <>
    <td className={elementClass}>
      <div className="flag-grow">
        <img className={imageClass} src={srcValue} onClick={onClick} />
      </div>
    </td>
  </>
);

export default ClickableImageElement;
