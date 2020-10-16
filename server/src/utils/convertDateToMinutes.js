function convertDateToMinutes(date) {
  const [days, month, year] = date.split('-').map(Number);
  const dateInDays = (year * 365) + (month * 30) + days;
  const DaysInMinutes = dateInDays * 1440;
  return DaysInMinutes;
}

module.exports = convertDateToMinutes;