var moment = require('moment');
var numeral = require('numeral');

numeral.language('nl', {
  delimiters: {thousands: '.', decimal: ','},
  currency: {symbol: '€'}
});
numeral.language('nl');

module.exports = {
  locals: {
    formatDate: dateString => moment(dateString).format('DD/MM/YYYY'),
    numberFormat: number => numeral(number).format('0,0.00'),
  }
};
