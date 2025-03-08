import { useState, useEffect } from 'react';
import ElementsLine from './components/ElementsLine';
import ImageElementsLine from './components/ImageElementsLine';
import CountriesLine from './components/CountriesLine';
import countryService from './services/country';

const App = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countryService
      .getAll()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCountryClick = (country) => {
    console.log(country);
  };

  return (
    <div>
      <ImageElementsLine />
      {countries ? (
        <>
          <CountriesLine
            countries={countries}
            offset={0}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={1}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={2}
            onCountryClick={(country) => handleCountryClick(country)}
          />
        </>
      ) : (
        ''
      )}
      <ImageElementsLine />
      <ElementsLine />
    </div>
  );
};

export default App;
