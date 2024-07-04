const { parsePhoneNumberFromString } = require("libphonenumber-js");

const getPhoneNumberDetails = (number) => {
  const details = parsePhoneNumberFromString(number);
  if (details) {
    const countryCode = details?.countryCallingCode.toString();
    const country = details.country;
    const phoneNumber = details.nationalNumber.toString();
    return { countryCode, country, phoneNumber };
  } else return {};
};

module.exports = { getPhoneNumberDetails };
