import ClickableImageElement from './ClickableImageElement';

const CountriesLine = ({
  countries,
  offset,
  centerOpen,
  useLogo,
  onCountryClick,
  onLogoClick,
}) => {
  const renderFlags = () => {
    const elements = [];
    for (let i = 0; i <= 6; i++) {
      let country = countries[i + offset];
      const flagIndexes = [0, 1, 5, 6];
      const logoIndex = 3;
      if (!centerOpen || flagIndexes.includes(i)) {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={country.flags['svg']}
            elementClass={'flag-cell'}
            imageClass={'flag'}
            hoverClass={'flag-grow'}
            onClick={() => onCountryClick(country)}
          />
        );
      } else if (useLogo && i === logoIndex) {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={'/logo.svg'}
            elementClass={'flag-cell'}
            imageClass={'flag'}
            hoverClass={'flag-grow'}
            onClick={() => onLogoClick()}
          />
        );
      } else {
        elements.push(<td key={country.cca2} className="flag-cell"></td>);
      }
    }
    return elements;
  };

  return (
    <table className="flag-table">
      <tbody>
        <tr>{renderFlags()}</tr>
      </tbody>
    </table>
  );
};

export default CountriesLine;
