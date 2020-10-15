function convertDateToDays(date) {
  const [days, month, year] = date.split('-').map(Number);
  const dateInDays = (year * 365) + (month * 30) + days;
  return dateInDays;
}

module.exports = convertDateToDays;