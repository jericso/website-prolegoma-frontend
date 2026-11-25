import Button from 'react-bootstrap/Button';
import ClickableImageElement from './ClickableImageElement';

const CountriesLine = ({
  countries,
  offset,
  useLogo,
  usePortfolio,
  useAbout,
  useContact,
  onCountryClick,
  onLogoClick,
  onPortfolioClick,
  onAboutClick,
  onContactClick,
}) => {
  const renderFlags = () => {
    const elements = [];
    for (let i = 0; i <= 1; i++) {
      let country = countries[i + offset];
      if (usePortfolio && i === 0) {
        elements.push(
          <td key={country.cca2} className="flag-cell-mobile">
            <Button variant="link" onClick={() => onPortfolioClick()}>
              Portfolio
            </Button>
          </td>
        );
      } else if (useAbout && i === 1) {
        elements.push(
          <td key={country.cca2} className="flag-cell-mobile">
            <Button variant="link" onClick={() => onAboutClick()}>
              About
            </Button>
          </td>
        );
      } else if (useContact && i === 0) {
        elements.push(
          <td key={country.cca2} className="flag-cell-mobile">
            <Button variant="link" onClick={() => onContactClick()}>
              Contact
            </Button>
          </td>
        );
      } else if (!useLogo || i === 0) {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={country.flags['svg']}
            elementClass={'flag-cell-mobile'}
            imageClass={'flag-mobile'}
            hoverClass={''}
            onClick={() => onCountryClick(country)}
          />
        );
      } else {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={'/logo.svg'}
            elementClass={'flag-cell-logo-mobile'}
            imageClass={'flag-logo-mobile'}
            hoverClass={''}
            onClick={() => onLogoClick()}
          />
        );
      }
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
