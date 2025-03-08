import Element from './Element';

const ElementsLine = () => {
  const renderItems = () => {
    const elements = [];
    for (let i = 0; i < 50; i++) {
      elements.push(<Element key={i} value={'TEST'} />);
    }
    return elements;
  };

  return <tr>{renderItems()}</tr>;
};

export default ElementsLine;
