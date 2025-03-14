import ClickableImageElement from './ClickableImageElement';

const CountriesLine = ({ countries, offset, onCountryClick }) => {
  const renderFlags = () => {
    const elements = [];
    for (let i = 0; i <= 6; i++) {
      let country = countries[i + offset];
      elements.push(
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          onClick={() => onCountryClick(country)}
        />
      );
    }
    return elements;
  };

  return (
    <table>
      <tbody>
        <tr>{renderFlags()}</tr>
      </tbody>
    </table>
  );
};

export default CountriesLine;
