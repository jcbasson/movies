import { generateYearList } from "../dateTimeUtils";
import isEmpty from "lodash/isEmpty";

describe("utils/tests/dateTimeUtils", () => {
  it("should return a list of years with a count equal to the number provided plus one for the start year", () => {
    const years = generateYearList("2020", 10);
    expect(years.length).toEqual(11);
  });

  it("should return an empty list if a year or count back value is not provided", () => {
    const years = generateYearList("xser", "z");
    expect(isEmpty(years)).toBeTruthy();
  });

  it("should contain the provided start year and a last year equal to start year minus the provided count back", () => {
    const years = generateYearList("2020", 10);

    expect(years.includes("2020")).toBeTruthy();
    expect(years.includes("2010")).toBeTruthy();
  });
});
