const ClickableImageElement = ({ srcValue, onClick }) => (
  <>
    <td className="flag-cell">
      <img className="flag" src={srcValue} onClick={onClick} />
    </td>
  </>
);

export default ClickableImageElement;
