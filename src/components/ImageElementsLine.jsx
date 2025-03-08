import ImageElement from './ImageElement';

const ImageElementsLine = () => {
  const renderImages = () => {
    const elements = [];
    for (let i = 0; i < 50; i++) {
      elements.push(
        <ImageElement key={i} srcValue={'https://i.imgur.com/CamgM58.jpeg'} />
      );
    }
    return elements;
  };

  return (
    <table>
      <tbody>
        <tr>{renderImages()}</tr>
      </tbody>
    </table>
  );
};

export default ImageElementsLine;
