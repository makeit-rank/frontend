import { getCurrency } from "locale-currency";
import { getTimezone } from "countries-and-timezones";

export const getCurrencyAndCountry = () => {
  const country = getTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    .countries[0];
  const countryCurrency = getCurrency(country);

  return {
    country,
    currency: countryCurrency,
  };
};
