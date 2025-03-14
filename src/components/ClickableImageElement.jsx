const ClickableImageElement = ({ srcValue, onClick }) => (
  <>
    <td class="flag-cell">
      <img class="flag" src={srcValue} onClick={onClick} />
    </td>
  </>
);

export default ClickableImageElement;
