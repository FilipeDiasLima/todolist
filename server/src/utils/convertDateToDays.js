function convertDateToDays(date) {
  const [days, month] = date.split('/').map(Number);
  const dateInDays = (month * 30) + days;
  return dateInDays;
}

module.exports = convertDateToDays;