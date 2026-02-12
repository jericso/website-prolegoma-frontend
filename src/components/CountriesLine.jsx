import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ClickableImageElement from './ClickableImageElement';

const CountriesLine = ({
  countries,
  offset,
  centerOpen,
  useNavigation,
  useLogo,
  useCompany,
  onCountryClick,
  onLogoClick,
  onAboutClick,
  onContactClick,
}) => {
  const handleSelect = (eventKey) => {
    if (eventKey === '1.1') window.open('https://dev.2200aldrich.com', '_1-1');
    else if (eventKey === '2') {
      onAboutClick();
    } else if (eventKey === '3') {
      onContactClick();
    }
  };

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
            altValue={country.flags['alt']}
            titleValue={country.name['common']}
          />,
        );
      } else if (useLogo && i === logoIndex) {
        elements.push(
          <ClickableImageElement
            key={country.cca2}
            srcValue={'/logo.svg'}
            elementClass={'flag-cell-logo'}
            imageClass={'flag-logo'}
            hoverClass={'flag-grow'}
            onClick={() => onLogoClick()}
            altValue={'Prolegoma'}
            titleValue={'Refresh flags'}
          />,
        );
      } else {
        if (useNavigation) {
          if (i === 2) {
            elements.push(
              <td
                key={country.cca2}
                className="prolegoma-navigation"
                colSpan="3"
              >
                <Nav onSelect={handleSelect}>
                  <NavDropdown title="Sites" id="nav-dropdown">
                    <NavDropdown.Item eventKey="1.1">
                      2200 Aldrich Ave S
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="1.2">
                      Cafeteria Club
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="1.3">
                      The Trade Arcade
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Prototypes" id="nav-dropdown">
                    <NavDropdown.Item eventKey="1.4">
                      Production Dashboard
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link eventKey="2">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </td>,
            );
          }
        } else if (useCompany && i === 2) {
          elements.push(
            <td key={country.cca2} className="prolegoma-heading">
              Prolegoma
            </td>,
          );
        } else if (useCompany && i === 4) {
          elements.push(
            <td key={country.cca2} className="prolegoma-directions">
              Click a flag for data on the country
              <br />
              Click the logo for new flags
            </td>,
          );
        } else {
          elements.push(<td key={country.cca2} className="flag-cell"></td>);
        }
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
