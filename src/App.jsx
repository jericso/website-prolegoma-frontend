import { useState, useEffect } from 'react';
import CountriesLine from './components/CountriesLine';
import countryService from './services/country';

const App = () => {
  const firstIndex = Math.floor(Math.random() * 229);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countryService
      .getAll()
      .then((countries) => {
        console.log(`total countries: ${countries.length}`);
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
      {countries ? (
        <>
          <CountriesLine
            countries={countries}
            offset={firstIndex}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={firstIndex + 7}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={firstIndex + 14}
            onCountryClick={(country) => handleCountryClick(country)}
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
