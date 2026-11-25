import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const FLAG_COUNT = 11;

const SITES = [
  { title: '2200 Aldrich Avenue South', url: 'https://dev.2200aldrich.com' },
  { title: 'The Trade Arcade', url: 'https://tradearcade.org' },
  { title: 'Cafeteria Club', url: 'https://cafeteriaclub.org/' },
];

const PROTOTYPES = [
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
        <NavDropdown title="Sites" id="nav-sites-mobile">
          {renderLinks(SITES)}
        </NavDropdown>
        <NavDropdown title="Prototypes" id="nav-prototypes-mobile">
          {renderLinks(PROTOTYPES)}
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
            key={country.cca2}
            type="button"
            className="image-button"
            onClick={() => onCountryClick(country)}
          >
            <img
              className="flag-mobile"
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              title={country.name.common}
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
