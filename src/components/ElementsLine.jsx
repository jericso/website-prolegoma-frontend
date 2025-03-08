import Element from './Element';

const ElementsLine = () => {
  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < 50; i++) {
      elements.push(<Element key={i} value={'TEST'} />);
    }
    return elements;
  };

  return (
    <table>
      <tbody>
        <tr>{renderElements()}</tr>
      </tbody>
    </table>
  );
};

export default ElementsLine;
