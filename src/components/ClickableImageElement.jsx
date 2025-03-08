const ClickableImageElement = ({ srcValue, onClick }) => (
  <>
    <td>
      <img src={srcValue} onClick={onClick} />
    </td>
  </>
);

export default ClickableImageElement;
