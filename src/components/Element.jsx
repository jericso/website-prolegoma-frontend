import './Element.css';

const Element = ({ value }) => (
  <>
    <td bgcolor="blue">{value}</td>
    <td bgcolor="orange">{value}</td>
    <td bgcolor="green">{value}</td>
    <td bgcolor="red">{value}</td>
  </>
);

export default Element;
