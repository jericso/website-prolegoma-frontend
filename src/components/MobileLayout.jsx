import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { countryKey, countryName, flagAlt, flagUrl } from '../utils/country';

const FLAG_COUNT = 11;

const PROJECTS = [
  { title: '2200 Aldrich Avenue South', url: 'https://dev.2200aldrich.com' },
  { title: 'Prolegoma Chat', url: 'https://chat.prolegoma.com' },
];

const MobileLayout = ({
  countries,
  onCountryClick,
  onLogoClick,
  onAboutClick,
  onContactClick,
}) => {
  const renderLinks = (links) =>
    links.map(({ title, url }) => (
      <NavDropdown.Item
        key={url}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </NavDropdown.Item>
    ));

  return (
    <>
      <header className="prolegoma-heading-mobile">Prolegoma</header>
      <Nav className="prolegoma-nav-mobile">
        <NavDropdown title="Projects" id="nav-projects-mobile">
          {renderLinks(PROJECTS)}
        </NavDropdown>
        <Nav.Link as="button" type="button" onClick={onAboutClick}>
          About
        </Nav.Link>
        <Nav.Link as="button" type="button" onClick={onContactClick}>
          Contact
        </Nav.Link>
      </Nav>
      <div className="flag-grid-mobile">
        {countries.slice(0, FLAG_COUNT).map((country) => (
          <button
            key={countryKey(country)}
            type="button"
            className="image-button"
            onClick={() => onCountryClick(country)}
          >
            <img
              className="flag-mobile"
              src={flagUrl(country)}
              alt={flagAlt(country)}
              title={countryName(country)}
            />
          </button>
        ))}
        <button type="button" className="image-button" onClick={onLogoClick}>
          <img
            className="flag-logo-mobile"
            src="/logo.svg"
            alt="Prolegoma"
            title="Refresh flags"
          />
        </button>
      </div>
      <p className="prolegoma-directions-mobile reading-text">
        Tap a flag for data on the country. Tap our logo for new flags.
      </p>
    </>
  );
};

export default MobileLayout;
