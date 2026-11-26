// Accessors for the restcountries v5 country shape returned by the backend.
// The backend drops countries without flags, but some entities still have
// blank codes or capitals, so every accessor tolerates missing data.

export const countryKey = (country) =>
  country?.uuid || country?.codes?.alpha_2 || country?.names?.common;

export const countryName = (country) => country?.names?.common ?? '';

export const flagUrl = (country) => country?.flag?.url_svg || undefined;

export const flagAlt = (country) =>
  country?.flag?.description || `Flag of ${countryName(country)}`;

export const primaryCapital = (country) => {
  const capitals = country?.capitals ?? [];
  return capitals.find((c) => c?.attributes?.primary) ?? capitals[0];
};

