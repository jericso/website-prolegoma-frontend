import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClickableImageElement from './ClickableImageElement';

const CountriesGrid = ({
  countries,
  onCountryClick,
  onLogoClick,
  onAboutClick,
  onContactClick,
}) => {
  const handleSelect = (eventKey) => {
    if (eventKey === '1.1') window.open('https://dev.2200aldrich.com', '_1-1');
    else if (eventKey === '1.2') {
      window.open('https://tradearcade.org', '_1-2');
    } else if (eventKey === '1.3') {
      window.open('https://cafeteriaclub.org/', '_1-3');
    } else if (eventKey === '2') {
      onAboutClick();
    } else if (eventKey === '3') {
      onContactClick();
    }
  };

  const lineOne = [];
  const lineTwo = [];
  const lineThree = [];
  const lineFour = [];
  const lineFive = [];

  for (let i = 0; i <= 6; i++) {
    let country = countries[i];
    lineOne.push(
      <Col>
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          elementClass={'flag-cell'}
          imageClass={'flag'}
          hoverClass={'flag-grow'}
          onClick={() => onCountryClick(country)}
          altValue={country.flags['alt']}
          titleValue={country.name['common']}
        />
      </Col>,
    );
  }

  for (let i = 7; i <= 13; i++) {
    let country = countries[i];
    lineTwo.push(
      <Col>
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          elementClass={'flag-cell'}
          imageClass={'flag'}
          hoverClass={'flag-grow'}
          onClick={() => onCountryClick(country)}
          altValue={country.flags['alt']}
          titleValue={country.name['common']}
        />
      </Col>,
    );
  }

  for (let i = 14; i <= 20; i++) {
    let country = countries[i];
    lineThree.push(
      <Col>
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          elementClass={'flag-cell'}
          imageClass={'flag'}
          hoverClass={'flag-grow'}
          onClick={() => onCountryClick(country)}
          altValue={country.flags['alt']}
          titleValue={country.name['common']}
        />
      </Col>,
    );
  }

  for (let i = 21; i <= 27; i++) {
    let country = countries[i];
    lineFour.push(
      <Col>
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          elementClass={'flag-cell'}
          imageClass={'flag'}
          hoverClass={'flag-grow'}
          onClick={() => onCountryClick(country)}
          altValue={country.flags['alt']}
          titleValue={country.name['common']}
        />
      </Col>,
    );
  }

  for (let i = 28; i <= 34; i++) {
    let country = countries[i];
    lineFive.push(
      <Col>
        <ClickableImageElement
          key={country.cca2}
          srcValue={country.flags['svg']}
          elementClass={'flag-cell'}
          imageClass={'flag'}
          hoverClass={'flag-grow'}
          onClick={() => onCountryClick(country)}
          altValue={country.flags['alt']}
          titleValue={country.name['common']}
        />
      </Col>,
    );
  }

  return (
    <div className="main-content">
      <Container>
        <Row>{lineOne}</Row>
        <Row>{lineTwo}</Row>
        <Row>{lineThree}</Row>
        <Row>{lineFour}</Row>
        <Row>{lineFive}</Row>
      </Container>
    </div>
  );
};

export default CountriesGrid;
