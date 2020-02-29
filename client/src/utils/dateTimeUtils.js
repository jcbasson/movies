export const generateYearList = (startYear, numberOfYearsCountBack) => {
  if (isNaN(startYear) || isNaN(numberOfYearsCountBack)) {
    return [];
  }
  let beginYear = parseInt(startYear, 10);

  return [
    startYear,
    ...[...Array(numberOfYearsCountBack).keys()].map(i => {
      beginYear = beginYear - 1;
      return beginYear.toString();
    })
  ];
};
