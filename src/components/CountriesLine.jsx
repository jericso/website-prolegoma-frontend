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
}) => {
  const handleSelect = (eventKey) => {
    if (eventKey === '2') {
      onAboutClick();
    } else {
      alert(`selected ${eventKey}`);
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
          />
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
          />
        );
      } else {
        if (useNavigation) {
          if (i === 2) {
            elements.push(
              <td
                key={country.cca2}
                className="prolegoma-navigation"
                colspan="3"
              >
                <Nav onSelect={handleSelect}>
                  <NavDropdown title="Portfolio" id="nav-dropdown">
                    <NavDropdown.Item eventKey="1.1">
                      First application
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="1.2">
                      Second application
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="1.3">
                      Third application
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.4">
                      Other applications
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link eventKey="2">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </td>
            );
          }
        } else if (useCompany && i === 2) {
          elements.push(
            <td key={country.cca2} className="prolegoma-heading">
              Prolegoma
            </td>
          );
        } else if (useCompany && i === 4) {
          elements.push(
            <td key={country.cca2} className="prolegoma-directions">
              Click flag for country info
              <br />
              Click logo for new flags
            </td>
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
