/**
 * Magento Settings for the app,
 * Follow instructions: https://github.com/troublediehard/magento-react-native/wiki/Setup
 *
 * url                     : Base url of the magento website
 * home_cms_block_id       : Block id which contain json data,
 *                           which will be shown in Home screen
 * access_token            : Token to access magento API, without it
 *                           app won't work
 */
export const magentoOptions = {
  url: 'http://vlad.mage2.interactivated.me/',
  home_cms_block_id: '19',
  authentication: {
    integration: {
      access_token: 'wr5blidx8m1bezmq36jyqa035ix51lp7',
    },
  },
};

/**
 * Magento 2 REST API doesn't return currency symbol,
 * so manually specify all currency symbol(that your store support)
 * along side their currency code.
 */
export const currencySymbols = Object.freeze({
  USD: '$',
  EUR: '€',
  AUD: 'A$',
  GBP: '£',
  CAD: 'CA$',
  CNY: 'CN¥',
  JPY: '¥',
  SEK: 'SEK',
  CHF: 'CHF',
  INR: '₹',
  KWD: 'د.ك',
});
