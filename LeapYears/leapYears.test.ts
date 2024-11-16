import {describe, it, expect} from "vitest";
import Year from "./leapYears";

describe("determine if a year is a leap year", () => {
    it("should return false for a no-leap year", () => {
        const year = new Year();
        const yearToCheck = 2003;
        const result = year.isLeapYear(yearToCheck)
        expect(result).toBe(false)
    })

    it("should return true if the year is multiple of 400", () => {
        const year = new Year();
        const yearToCheck = 2000;
        const result = year.isLeapYear(yearToCheck);
        expect(result).toBe(true);
    })

    it("should return false if the year is not multiple of 400 but of 100", () => {
        const year = new Year();
        const yearToCheck = 1900;
        const result = year.isLeapYear(yearToCheck);
        expect(result).toBe(false);
    })
})
