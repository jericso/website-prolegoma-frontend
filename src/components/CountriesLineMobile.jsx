import ClickableImageElement from './ClickableImageElement';

const CountriesLine = ({
  countries,
  offset,
  useLogo,
  onCountryClick,
  onLogoClick,
}) => {
  const renderFlags = () => {
    const elements = [];
    for (let i = 0; i <= 1; i++) {
      let country = countries[i + offset];
      const logoIndex = 1;
      if (!useLogo || i === 0) {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={country.flags['svg']}
            elementClass={'flag-cell-mobile'}
            imageClass={'flag-mobile'}
            onClick={() => onCountryClick(country)}
          />
        );
      } else {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={'/logo.svg'}
            elementClass={'flag-cell-mobile'}
            imageClass={'flag-mobile'}
            onLogoClick={() => onLogoClick()}
          />
        );
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
